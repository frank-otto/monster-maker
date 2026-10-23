import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { createLab, updateLab, zap, strike, windowBolt, QUALITY, RR, HH, SLAB_Y, DOORS } from './lab.js';
import { CATS, CAT_EMO, PARTS, part, stats, buildMonster, disposeMonster, animateMonster, randomSpec, DEFAULT_SPEC, monsterName, has } from './monster.js';
import { createVillager, animateVillager, disposeVillager, CUSTOMERS } from './villagers.js';
import { createFX, sparks, puff, updateFX } from './fx.js';
import { Player, Seq, toccataEvents } from './music.js';
import * as A from './audio.js';
import { T, REQ } from './i18n.js';

const URL_TXT = '@Frank_AI_Lab';
const $ = id => document.getElementById(id);
const ls = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
let seed = (window.__mmSeed || (Date.now() & 0xffffff)) >>> 0;
function rng() { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
const lerp = (a, b, k) => a + (b - a) * k, clamp = (v, a, b) => Math.max(a, Math.min(b, v)), smooth = x => x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x), fin = v => Number.isFinite(v) ? v : 0;
const DIFF = {
  easy: { zone: [.66, .95], rs: .78, scareN: 9, gap: 2.5, spd: .72, hearts: 4, dance: [3, 4, 4], win: [.11, .2], orderN: 4, orderT: 60, reqN: 2, failO: 3 },
  medium: { zone: [.75, .93], rs: 1, scareN: 12, gap: 1.95, spd: .92, hearts: 3, dance: [4, 5, 6], win: [.085, .16], orderN: 5, orderT: 45, reqN: 3, failO: 3 },
  hard: { zone: [.82, .93], rs: 1.25, scareN: 15, gap: 1.5, spd: 1.15, hearts: 2, dance: [5, 6, 8], win: [.065, .125], orderN: 6, orderT: 34, reqN: 4, failO: 2 },
  kids: { zone: [.5, 1.01], rs: .72, cap: .97, scareN: 8, gap: 2.9, spd: .6, hearts: 0, dance: [2, 3, 3], win: [.22, .38], orderN: 4, orderT: 0, reqN: 2, failO: 99 }
};
const DIRS = ['left', 'down', 'up', 'right'], DIR_EMO = { left: '⬅️', down: '⬇️', up: '⬆️', right: '➡️' }, DIR_COL = { left: '#c79bff', down: '#5fd3ff', up: '#7dffb4', right: '#ffb65e' };
// language follows the phone/browser (German devices → DE, else EN) until the player picks one with the DE/EN toggle
function autoLang() { try { const l = (navigator.languages && navigator.languages[0]) || navigator.language || ''; return /^de\b/i.test(l) ? 'de' : 'en'; } catch (e) { return 'en'; } }
const S = {
  state: 'menu', mode: 'show', lang: (ls.get('mm-lang', '') || autoLang()), diff: ls.get('mm-diff', 'medium'), kids: ls.get('mm-kids', '0') === '1', q: ls.get('mm-q', ''), qUser: !!ls.get('mm-q', ''),
  name: ls.get('mm-name', 'Player') || 'Player', cat: 'head', az: .25, gt: 0, pel: 0, score: 0, shake: 0, newBest: false, failed: false, grade: '', alive: false, results: [], vx: 0, vy: 0
};
if (!DIFF[S.diff] || S.diff === 'kids') S.diff = 'medium';
if (!QUALITY[S.q]) { S.q = 'mid'; S.qUser = false; }
const dkey = () => S.kids ? 'kids' : S.diff, D = () => DIFF[dkey()], bestKey = () => `mm-best-${S.mode}-${dkey()}`;
A.setClock(() => S.gt);
const t = k => T[S.lang][k] ?? T.en[k] ?? k;
let spec = (() => { try { const s = JSON.parse(ls.get('mm-spec', '')); if (s && CATS.every(c => PARTS[c].some(p => p.id === s[c]))) return s; } catch (e) {} return { ...DEFAULT_SPEC }; })();

// ---------------- renderer / scene ----------------
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: !!window.__mmPDB });
renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.shadowMap.type = THREE.PCFShadowMap;
const L = createLab(renderer, QUALITY[S.q], 7); const scene = L.scene;
const camera = new THREE.PerspectiveCamera(45, 1, .1, 60);
const F = createFX(scene, L.soft, L.smokeTex);
let composer, bloom;
function buildComposer() { if (composer) { composer.passes.forEach(p => p.dispose && p.dispose()); composer.dispose(); } /* EffectComposer.dispose() frees only its own render targets, not the passes (bloom mips etc.) */ composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera)); bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .3, .45, .86); composer.addPass(bloom); composer.addPass(new OutputPass()); }
function applyQuality(qn, user) {
  S.q = qn; if (user) { S.qUser = true; ls.set('mm-q', qn); } const q = QUALITY[qn];
  renderer.shadowMap.enabled = q.shadows; L.key.castShadow = q.shadows; if (q.shadows) { L.key.shadow.mapSize.set(q.shadowSize, q.shadowSize); if (L.key.shadow.map) { L.key.shadow.map.dispose(); L.key.shadow.map = null; } }
  L.dust.geometry.setDrawRange(0, q.dust); L.shafts.forEach(s => s.visible = qn !== 'low');
  scene.traverse(o => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.needsUpdate = true); });
  buildComposer(); resize(); $('btnQ').textContent = '⚙ ' + t('q_' + qn);
}
let VW = 1, VH = 1; const portrait = () => VW / VH < .85, wide = () => VW >= 820 && VW >= VH;
function resize() { VW = window.innerWidth; VH = window.innerHeight; const dpr = Math.min(window.devicePixelRatio || 1, QUALITY[S.q].dpr);
  renderer.setPixelRatio(dpr); renderer.setSize(VW, VH, false); if (composer) { composer.setPixelRatio(dpr); composer.setSize(VW, VH); }
  camera.aspect = VW / VH; camera.fov = portrait() ? 60 : 45; camera.updateProjectionMatrix(); L.setRes(VW * dpr, VH * dpr); }

// ---------------- the monster ----------------
let M = null; const MP = { life: 0, act: null, actT: 0, actD: 1, dir: 0, inhale: 0, open: 0, twitch: 0, look: new THREE.Vector3(0, 1.6, 5), walk: 0 }; const pop = {};
function setSpec(s, changed) {
  spec = { ...s }; if (M) disposeMonster(M); M = buildMonster(spec); M.root.position.set(0, SLAB_Y, 0); scene.add(M.root);
  M.root.traverse(o => { if (o.isMesh) { o.castShadow = QUALITY[S.q].shadows; o.receiveShadow = false; } });
  if (changed) { pop[changed] = 1; if (changed === 'all') CATS.forEach(c => pop[c] = 1); }
  ls.set('mm-spec', JSON.stringify(spec)); renderStats(); if (S.state === 'build' || S.state === 'order') renderDock(); if (O && O.reqs) renderOrder();
  animateMonster(M, S.gt, 0, MP);
}
function act(name, dur = .6, dir = 0) { MP.act = name; MP.actT = S.gt; MP.actD = dur; MP.dir = dir; }
function chestPos() { return new THREE.Vector3(0, SLAB_Y + (M ? M.chestY : 1.2), .15); }
function headPos() { return new THREE.Vector3(0, SLAB_Y + (M ? M.headY : 1.8), .1); }
function changePart(cat, id) { if (spec[cat] === id) return; const s = { ...spec, [cat]: id }; setSpec(s, cat); A.unlock(); A.sfx.part(cat);
  const at = cat === 'legs' ? new THREE.Vector3(0, SLAB_Y + .3, .3) : cat === 'head' || cat === 'horns' || cat === 'eyes' || cat === 'mouth' ? headPos() : chestPos();
  puff(F, at, 3, '#9a8ab0', .5); sparks(F, at, 18, { colors: ['#b8ffb0', '#ffffff', part('color', spec.color).c], speed: 2.2, up: 1, life: .6, grav: 3, size: .07 });
  if (S.state === 'build' && S.alive && MP.life > .9) act(rng() < .5 ? 'cheer' : 'roar', 1.1); }
function cycle(cat, d) { const L2 = PARTS[cat]; const i = L2.findIndex(p => p.id === spec[cat]); changePart(cat, L2[(i + d + L2.length) % L2.length].id); }
function randomize() { A.unlock(); setSpec(randomSpec(rng), 'all'); A.sfx.random(); puff(F, chestPos(), 8, '#9a8ab0', 1); sparks(F, chestPos(), 50, { colors: ['#b8ffb0', '#ffffff', '#c79bff'], speed: 3, up: 1.4, life: .8, grav: 3, size: .08 }); }

// ---------------- timers / audio beds ----------------
const timers = []; function setTimer(d, f) { timers.push({ t: S.gt + d, f }); }
function clearTimers() { timers.length = 0; }
const music = new Player(), seq = new Seq();
function beds() { const st = S.state, ch = L.charge; A.loop('rain', .3, 1); A.loop('bubble_loop', st === 'menu' ? .18 : .26, 1); A.loop('coil_loop', .1 + ch * .5, 1 + ch * .25); A.loop('hum_loop', ch * .55, .8 + ch * .5); A.loop('mob_loop', C && C.kind === 'scare' && !C.done ? .5 : 0, 1, 1); }
let thunderT = 6; function ambient(dt) { thunderT -= dt; if (thunderT <= 0) { thunderT = 14 + rng() * 14; const i = rng() < .5 ? 0 : 1; windowBolt(L, i, rng); L.flash = Math.max(L.flash, .45); setTimer(.25 + rng() * .8, () => A.sfx.thunder(rng() < .6)); } }

// ---------------- lever + "IT'S ALIVE" ----------------
let LV = null; // lever cinematic state
function pullLever() {
  if (LV || !(S.state === 'build' || (S.state === 'order' && O && O.phase === 'build'))) return; A.unlock();
  const full = S.state === 'build' && !S.alive; const T0 = S.gt; LV = { t0: T0, full, struck: false, fromAlive: S.alive }; A.sfx.lever(); $('btnLever').classList.add('pulled'); document.body.dataset.cine = '1';
  hideDock(); $('hint').classList.remove('show'); if (S.state === 'order') O.phase = 'zap';
  const k = full ? 1 : .55; LV.k = k; LV.strikeAt = full ? 2.75 : 1.35; LV.end = full ? 5.6 : 3.2;
  setTimer(.25, () => A.sfx.charge()); if (full) seq.add(toccataEvents(.55), T0 + .05); else seq.add(toccataEvents(.5).slice(0, 3), T0 + .05);
  music.stop(); banner(t('charging'));
}
function leverStep(dt) {
  if (!LV) return; const e = S.gt - LV.t0; L.lever = smooth(e / .35);
  if (!LV.struck) { L.charge = smooth(e / LV.strikeAt) * (LV.full ? 1 : .8); MP.twitch = L.charge * .45; if (e > LV.strikeAt * .45) L.flicker = Math.max(L.flicker, .4);
    if (rng() < dt * 14 * L.charge) { const c = L.coils[rng() < .5 ? 0 : 1]; zap(L, c.top, chestPos().add(new THREE.Vector3((rng() - .5) * .8, rng() * .8, 0)), { life: .12, amp: .4 }); A.sfx.arc(.18 + L.charge * .25); }
    if (e >= LV.strikeAt) { LV.struck = true; strike(L, chestPos()); A.sfx.strike(); S.shake = 1.4; L.flicker = 1.6; flashScreen(.3); puff(F, chestPos(), 4, '#c8d0ff', .75);
      sparks(F, chestPos(), Math.round(160 * QUALITY[S.q].parts), { colors: ['#ffffff', '#bcd2ff', '#7aa0ff', '#fff2a8'], speed: 5, up: 1.5, life: 1.0, grav: 4, size: .09 }); sparks(F, L.rodTip.clone(), 60, { colors: ['#ffffff', '#9fc0ff'], speed: 3.5, up: .5, life: .7, grav: 5, size: .07 }); } }
  else { const k2 = (e - LV.strikeAt); L.charge = Math.max(0, 1 - k2 * .9) * (LV.full ? 1 : .8); MP.twitch = Math.max(0, .9 - k2 * .9) * (k2 < .9 ? 1 : 0);
    MP.life = LV.fromAlive ? 1 : smooth((k2 - .25) / 1.1);
    if (!LV.roared && k2 > .7) { LV.roared = true; act('roar', 1.7); A.sfx.alive(spec.head); banner(t('alive')); S.shake = Math.max(S.shake, .9); if (S.kids) setTimer(2, () => A.sfx.kids()); }
    if (rng() < dt * 10 * Math.max(0, 1 - k2)) zap(L, chestPos(), chestPos().add(new THREE.Vector3((rng() - .5) * 1.4, (rng() - .3) * 1.2, (rng() - .5) * .8)), { life: .1, amp: .5 });
    if (e >= LV.end) { const was = LV; LV = null; L.lever = 0; L.charge = 0; MP.twitch = 0; MP.life = 1; S.alive = true; $('btnLever').classList.remove('pulled'); delete document.body.dataset.cine; afterAlive(was); } }
}
function afterAlive(was) {
  if (S.state === 'order') { deliver(); return; }
  if (S.mode === 'show') { beginShow(); return; }
  showDock(); renderDock(); // free lab: keep building with a living monster
}
function flashScreen(k) { const el = $('flash'); el.classList.add('on'); clearTimeout(flashScreen._t); flashScreen._t = setTimeout(() => el.classList.remove('on'), 750); el.style.transition = 'none'; el.style.opacity = Math.min(.3, k); void el.offsetWidth; el.style.transition = 'opacity .7s ease-out'; el.style.opacity = 0; }

// ---------------- Monster Showdown ----------------
let C = null; const vill = []; const _s = new THREE.Vector3();
const POKE = [new THREE.Vector3(-1.8, 0, .8), new THREE.Vector3(0, 0, -1.55), new THREE.Vector3(1.8, 0, .8)];
function beginShow() { S.results = []; S.score = 0; S.chI = 0; S.state = 'show'; setUI(); startChallenge('roar'); }
function startChallenge(kind) {
  const st = stats(spec); C = { kind, t0: S.gt, done: false, pts: 0, max: 1, stat: st[kind === 'roar' ? 0 : kind === 'scare' ? 1 : 2] }; const mult = .7 + .3 * C.stat; C.mult = mult;
  banner(`${t('ch' + (S.chI + 1))}: ${t('c_' + kind)}`); $('hint').textContent = t('h_' + kind + (isTouch ? 'T' : '')); setTimer(1.2, () => $('hint').classList.add('show')); setTimer(6, () => $('hint').classList.remove('show'));
  if (kind === 'roar') { C.n = 0; C.phase = 'ready'; C.pt = S.gt + 1.4; C.m = 0; C.list = []; const z = D().zone; const w = (z[1] - z[0]) * .5 * (1 + C.stat * .35), mid = (z[0] + z[1]) / 2; C.zone = [mid - w, Math.min(1.01, mid + w)]; C.max = 3 * 400; music.stop(); }
  if (kind === 'scare') { const d = D(); C.n = d.scareN; C.spawned = 0; C.next = S.gt + 2.2; C.hearts = d.hearts; C.scared = 0; C.combo = 0; C.range = 2.6 + 1.4 * C.stat + (S.kids ? .8 : 0); C.lastLane = -1; C.max = d.scareN * 250 * 1.3; music.start('show', S.gt + .2); music.vol = .55; }
  if (kind === 'dance') { const d = D(); music.start('show', S.gt + .3); music.vol = 1; C.rounds = d.dance.slice(); C.r = -1; C.seq = []; C.k = 0; C.phase = 'wait'; C.max = C.rounds.reduce((a, n) => a + n * 120 + 100, 0); C.win = d.win.map(w => w * (1 + .3 * C.stat)); C.perf = 0; C.good = 0; C.miss = 0; L.disco = 0; nextRound(); }
  setUI();
}
function endChallenge() { if (C.done) return; C.done = true; const rating = clamp(C.pts / C.max / (C.kind === 'scare' ? .95 : 1), 0, 1); const pts = Math.round(C.pts * C.mult);
  S.results.push({ kind: C.kind, pts, rating }); S.score += pts; banner(`${t('c_' + C.kind)} · +${pts}`); popText(rating > .85 ? t('j_mon') : rating > .6 ? t('j_great') : rating > .35 ? t('j_good') : t('j_weak'), '#ffe08a', 1.4);
  if (rating > .6) A.sfx.cheer(.4 + rating * .3); L.disco = 0;
  setTimer(2.4, () => { if (S.state !== 'show') return; S.chI++; if (S.chI < 3) startChallenge(['roar', 'scare', 'dance'][S.chI]); else endRun(); }); setUI(); }
// --- roar contest ---
function roarDown() { S.rHeld = true; if (!C || C.kind !== 'roar' || C.phase !== 'ready' || S.gt < C.pt) return; C.phase = 'hold'; C.m = 0; C.ht = S.gt; A.sfx.inhale(.4); }
function roarUp() { S.rHeld = false; if (!C || C.kind !== 'roar' || C.phase !== 'hold') return; roarResult(C.m, false); }
function roarResult(m, over) {
  const z = C.zone, inZ = !over && m >= z[0] && m <= z[1]; let pts, lab;
  if (over) { S.rHeld = false; pts = 40; lab = t('r_over'); A.sfx.fizzle(); act('flinch', .8); }
  else { const prec = inZ ? 1 - Math.abs(m - (z[0] + z[1]) / 2) / ((z[1] - z[0]) / 2 + 1e-6) : 0; pts = inZ ? Math.round(260 + 140 * clamp(prec, 0, 1)) : Math.round(240 * m * m);
    lab = inZ ? (prec > .6 ? t('r_mon') : t('r_great')) : m > .45 ? t('r_ok') : t('r_weak'); const k = clamp(m, .2, 1);
    act('roar', 1.1 + k * .8); A.sfx.roar(spec.head, M.size, k); S.shake = Math.max(S.shake, k * (inZ ? 1.3 : .6)); L.flicker = inZ ? .8 : 0;
    if (inZ) { for (let i = 0; i < 3; i++) setTimer(.15 + i * .12, () => { const j = L.shelves[Math.floor(rng() * L.shelves.length)]; const p = new THREE.Vector3(); j.getWorldPosition(p); sparks(F, p, 20, { colors: ['#dff4ff', '#a8e0ff', '#ffffff'], speed: 2.2, up: 1.5, life: .9, grav: 7, size: .05 }); A.sfx.glass(); });
      for (let i = 0; i < 4; i++) puff(F, new THREE.Vector3((rng() - .5) * 6, HH - .6, (rng() - .5) * 5), 1, '#6a6070', .8); if (S.kids) A.sfx.kids(); } }
  const dB = Math.round(55 + m * 75); C.list.push({ m, pts, dB }); C.pts += pts; popText(`${lab} · ${dB} dB`, inZ ? '#ffe08a' : '#cfd8ff', 1.25); (window.__banners = window.__banners || []).push(lab);
  C.phase = 'result'; C.m = m; C.rt = S.gt; MP.inhale = 0;
}
function roarStep(dt) { const d = D();
  if (C.phase === 'ready') { MP.inhale = lerp(MP.inhale, 0, 1 - Math.exp(-dt * 6)); if (S.rHeld && S.gt >= C.pt) roarDown(); /* a press held from before 'ready' counts */ if (S.gt > C.pt + 7) roarResult(0, false); }
  else if (C.phase === 'hold') { C.m += dt * d.rs * (.42 + 1.05 * C.m); if (d.cap) C.m = Math.min(C.m, d.cap); MP.inhale = clamp(C.m, 0, 1); if (rng() < dt * 3) A.sfx.inhale(C.m); if (C.m > 1.0) roarResult(1.0, true); }
  else if (C.phase === 'result' && S.gt - C.rt > 2.1) { C.n++; if (C.n >= 3) endChallenge(); else { C.phase = 'ready'; C.pt = S.gt + .3; C.m = 0; } }
  const mt = $('rmFill'); mt.style.height = (clamp(C.phase === 'hold' ? C.m : C.phase === 'result' ? C.m : 0, 0, 1) * 100) + '%'; $('rmZone').style.bottom = (C.zone[0] * 100) + '%'; $('rmZone').style.height = ((Math.min(1, C.zone[1]) - C.zone[0]) * 100) + '%';
  $('rmLabel').textContent = C.phase === 'hold' ? `${Math.round(55 + C.m * 75)} dB` : C.phase === 'ready' ? (S.gt >= C.pt ? t('r_hold') : '…') : `${C.list.length ? C.list[C.list.length - 1].dB : 0} dB`; $('roarMeter').classList.toggle('hot', C.phase === 'hold' && C.m >= C.zone[0] && C.m <= C.zone[1]); $('rmN').textContent = `${Math.min(C.n + 1, 3)}/3`; }
// --- scare the villagers ---
function spawnVillager() { let lane = Math.floor(rng() * 3); if (lane === C.lastLane) lane = (lane + 1 + Math.floor(rng() * 2)) % 3; C.lastLane = lane; C.spawned++;
  const tor = rng() < .55; const P = createVillager({ torch: tor, fork: !tor, coat: ['#5a4632', '#4a5a3a', '#6a3a2a', '#3a3a5a'][Math.floor(rng() * 4)] }, L.flameT); P.g.scale.setScalar(1.15); scene.add(P.g);
  const from = DOORS[lane].clone(), to = POKE[lane].clone(); P.g.position.copy(from); P.g.lookAt(to.x, 0, to.z);
  const v = { P, lane, from, to, len: from.distanceTo(to), d: 0, st: 'walk', spd: D().spd * (.9 + rng() * .2), t: 0 }; vill.push(v); L.doors[lane].target = 1; setTimer(1.6, () => { if (!vill.some(x => x.lane === lane && x.st === 'walk' && x.d < 1.4)) L.doors[lane].target = 0; }); A.sfx.door(); if (P.flame) A.sfx.torch(); }
function scareLane(lane) { if (!C || C.kind !== 'scare' || C.done) return; A.unlock(); const dir = Math.atan2(POKE[lane].x, POKE[lane].z);
  const cands = vill.filter(v => v.lane === lane && v.st === 'walk').sort((a, b) => b.d - a.d); const v = cands[0];
  if (v && v.len - v.d <= C.range) { const rem = v.len - v.d; const close = 1 - rem / C.range; const pts = Math.round((100 + 150 * clamp(close, 0, 1)) * (1 + Math.min(C.combo, 5) * .06)); C.pts += pts; C.combo++; C.scared++; v.st = 'flee'; v.t = 0; act('lunge', .7, dir); A.sfx.roar(spec.head, M.size, .55 + close * .4); setTimer(.12, () => A.sfx.scream(clamp(POKE[lane].x / 3, -.9, .9))); S.shake = Math.max(S.shake, .4);
    popText(`${close > .66 ? t('s_boo') : close > .33 ? t('s_great') : t('s_ok')} +${pts}`, close > .66 ? '#ffe08a' : '#cfe8ff', 1.1); (window.__banners = window.__banners || []).push('scare'); L.doors[lane].target = 1; setTimer(1.6, () => L.doors[lane].target = 0); }
  else { C.combo = 0; act('lunge', .5, dir); A.sfx.whiff(); popText(v ? t('s_early') : t('s_none'), '#b8b0d0', .9); } }
function scareStep(dt) {
  if (!C.done && C.spawned < C.n && S.gt >= C.next) { spawnVillager(); if (!S.kids && S.diff === 'hard' && rng() < .25 && C.spawned < C.n) setTimer(.5, () => { if (C && C.kind === 'scare' && !C.done && C.spawned < C.n) spawnVillager(); }); C.next = S.gt + D().gap * (.8 + rng() * .4); }
  for (const v of vill) { v.t += dt; const P = v.P;
    if (v.st === 'walk') { v.d += v.spd * dt; const k = Math.min(1, v.d / v.len); P.g.position.lerpVectors(v.from, v.to, k); animateVillager(P, dt, 'walk'); if (k >= 1) { v.st = 'poke'; v.t = 0; } }
    else if (v.st === 'poke') { animateVillager(P, dt, 'poke'); if (v.t > .35 && !v.hit) { v.hit = true; C.combo = 0; act('flinch', .7); if (S.kids) { A.sfx.kids(); popText(t('s_tickle'), '#ffd0f0', 1); } else { A.sfx.poke(); C.hearts--; popText(t('s_ouch'), '#ff8a8a', 1.2); S.shake = .5; if (C.hearts <= 0) { mobWins(); return; } } } if (v.t > 1.1) { v.st = 'flee'; v.t = 0; v.calm = true; } }
    else if (v.st === 'flee') { const back = v.from.clone(); const dirv = back.sub(P.g.position); const dist = dirv.length(); if (dist > .05) { P.g.lookAt(v.from.x, 0, v.from.z); P.g.position.addScaledVector(dirv.normalize(), Math.min(dist, dt * (v.calm ? 2.2 : 4.2))); } animateVillager(P, dt, v.calm ? 'walk' : 'flee'); if (dist < .2) { v.st = 'gone'; scene.remove(P.g); } } }
  for (let i = vill.length - 1; i >= 0; i--) if (vill[i].st === 'gone') vill.splice(i, 1);
  if (!C.done && C.spawned >= C.n && !vill.length) endChallenge();
  $('hHearts').textContent = S.kids ? '💖' : '❤️'.repeat(Math.max(0, C.hearts)) + '🖤'.repeat(Math.max(0, D().hearts - C.hearts));
  const mk = $('vmarks'); while (mk.children.length < vill.length) mk.appendChild(document.createElement('span'));
  [...mk.children].forEach((el, i) => { const v = vill[i]; if (!v || v.st !== 'walk') { el.style.display = 'none'; return; } _s.copy(v.P.g.position).setY(1.2).project(camera); const off = Math.abs(_s.x) > .96 || Math.abs(_s.y) > .96 || _s.z > 1;
    el.style.display = off ? '' : 'none'; if (!off) return; let x = _s.z > 1 ? -_s.x : _s.x, y = _s.z > 1 ? -_s.y : _s.y; const m = Math.max(Math.abs(x), Math.abs(y)) || 1; x /= m; y /= m; el.style.left = clamp((x * .5 + .5) * VW, 30, VW - 30) + 'px'; el.style.top = clamp((-y * .5 + .5) * VH, 80, VH - 120) + 'px'; el.textContent = v.P.flame ? '🔥' : '🔱'; el.className = v.len - v.d <= C.range ? 'hot' : ''; });
  document.querySelectorAll('#lanesPad button').forEach((b, i) => b.classList.toggle('warn', vill.some(v => v.lane === i && v.st === 'walk' && v.len - v.d <= C.range)));
}
function clearVillagers() { for (const v of vill) disposeVillager(v.P); vill.length = 0; $('vmarks').innerHTML = ''; L.doors.forEach(d => d.target = 0); }
function mobWins() { C.done = true; S.failed = true; A.sfx.fail(); banner(t('mobWins')); act('sad', 2.2); setTimer(2.6, () => endRun()); }
// --- dance-off (call & response on the beat) ---
function nextRound() { C.r++; if (C.r >= C.rounds.length) { C.phase = 'finale'; act('spin', 1.1); setTimer(1.1, () => act('cheer', 1.6)); A.sfx.cheer(.55); setTimer(2.2, () => endChallenge()); return; }
  const n = C.rounds[C.r]; C.seq = []; for (let i = 0; i < n; i++) { let d; do d = DIRS[Math.floor(rng() * 4)]; while (i > 1 && d === C.seq[i - 1] && d === C.seq[i - 2]); C.seq.push(d); }
  const b = Math.ceil(music.beat(S.gt) + .6); const b0 = Math.ceil(b / 4) * 4; C.callB = b0; C.respB = b0 + Math.ceil(n / 4) * 4 + (n % 4 === 0 ? 0 : 0); C.k = 0; C.res = []; C.phase = 'call'; C.shown = -1; renderSeq(); }
function danceStep(dt) { const bt = music.beat(S.gt); L.beat = bt; L.disco = lerp(L.disco, C.phase === 'finale' ? 1 : .75, 1 - Math.exp(-dt * 2));
  if (C.phase === 'call') { const i = Math.floor(bt - C.callB + 1e-6); if (i >= 0 && i < C.seq.length && i !== C.shown) { C.shown = i; renderSeq(); A.sfx.tick(); act(C.seq[i], .45); } if (bt >= C.respB - 1 && C.shown >= C.seq.length - 1) { C.phase = 'resp'; renderSeq(); popText(t('d_you'), '#7dffb4', 1.1); } }
  else if (C.phase === 'resp') { const due = C.respB + C.k; if (C.k < C.seq.length && (bt - due) * music.spb > C.win[1]) { judgeDance(null, 'miss'); } if (C.k >= C.seq.length && !C.next2) { C.next2 = true; const all = C.res.every(r => r !== 'miss'); if (all) { C.pts += 100; popText(t('d_round'), '#ffe08a', 1.2); A.sfx.cheer(.35); } setTimer(.8, () => { C.next2 = false; nextRound(); }); } }
  else if (C.phase === 'finale') { if (rng() < dt * 6) sparks(F, chestPos().setY(SLAB_Y + .2), 8, { colors: ['#ff5ad6', '#7dffb4', '#5fd3ff', '#ffe08a'], speed: 2.4, up: 2, life: .8, grav: 2, size: .07 }); } }
function dancePress(dir) { if (!C || C.kind !== 'dance' || C.phase !== 'resp' || C.k >= C.seq.length) { if (C && C.kind === 'dance') act(dir, .45); return; }
  const bt = music.beat(S.gt), due = C.respB + C.k, off = (bt - due) * music.spb; if (off < -C.win[1] * 1.6) { act(dir, .45); return; }
  judgeDance(dir, dir !== C.seq[C.k] ? 'miss' : Math.abs(off) <= C.win[0] ? 'perfect' : Math.abs(off) <= C.win[1] ? 'good' : 'late'); }
function judgeDance(dir, j) { const want = C.seq[C.k]; if (j === 'late') j = 'good';
  if (j === 'perfect') { C.pts += 120; C.perf++; } else if (j === 'good') { C.pts += 70; C.good++; } else C.miss++;
  C.res.push(j); C.k++; S.lastJ = j; act(j === 'miss' ? 'flinch' : want, .45); if (j !== 'miss') { A.sfx.stomp(.3); A.sfx.judge(true); sparks(F, new THREE.Vector3(0, SLAB_Y + .05, .4), 10, { colors: [DIR_COL[want]], speed: 2, up: 1.5, life: .6, grav: 3, size: .07 }); }
  popText(t('j_' + j), j === 'perfect' ? '#ffe08a' : j === 'good' ? '#7dffb4' : '#ff9a9a', 1); renderSeq(); }
function renderSeq() { const el = $('dseq'); if (!C || C.kind !== 'dance') { el.innerHTML = ''; return; } el.innerHTML = '';
  C.seq.forEach((d, i) => { const s = document.createElement('div'); s.className = 'ds'; const shown = C.phase === 'call' ? i <= C.shown : true; s.textContent = shown ? DIR_EMO[d] : '•';
    if (C.phase === 'call' && i === C.shown) s.classList.add('now'); if (C.phase !== 'call' && C.res[i]) s.classList.add(C.res[i]); if (C.phase === 'resp' && i === C.k) s.classList.add('next'); el.appendChild(s); });
  $('dlab').textContent = C.phase === 'call' ? t('d_watch') : C.phase === 'resp' ? t('d_you') : ''; $('dround').textContent = `${t('round')} ${Math.min(C.r + 1, C.rounds.length)}/${C.rounds.length}`; }

// ---------------- Monster Order ----------------
let O = null; let cust = null;
function startOrder() { S.mode = 'order'; S.state = 'order'; S.score = 0; S.failed = false; S.results = []; S.orderI = 0; S.stars = 0; S.failedO = 0; S.alive = false; MP.life = 0; music.start('order', S.gt + .2); music.vol = .8; setUI(); nextOrder(); }
function genReqs(n) { const simple = ['color:red', 'color:blue', 'color:purple', 'color:orange', 'color:pink', 'color:teal', 'color:bone', 'color:green', 'any:wings', 'any:horns', 'any:tail', 'eyes:cyclops', 'eyes:three', 'eyes:many', 'wings:bat', 'legs:spider', 'head:pumpkin', 'head:dragon', 'pattern:spots', 'pattern:stripes', 'mouth:fangs', 'tentacles:1', 'head:bat', 'legs:chicken'];
  const adv = ['pattern:glow', 'pattern:scales', 'mouth:tusks', 'horns:antlers', 'arms:pincers', 'body:bug', 'wings:bug', 'tail:scorpion', 'stat:0', 'stat:1', 'stat:2', 'horns:unicorn', 'eyes:stalks'];
  const pool = S.kids ? simple.filter(r => !r.startsWith('mouth') && !r.startsWith('pattern')) : S.diff === 'easy' ? simple : simple.concat(adv, adv);
  const out = [], used = new Set(); let guard = 0; while (out.length < n && guard++ < 400) { const r = pool[Math.floor(rng() * pool.length)]; const k = r.split(':')[0], cat = k === 'any' ? r.split(':')[1] : k === 'tentacles' ? 'arms' : k;
    if (used.has(cat) || out.includes(r)) continue; if (has(spec, r) && out.filter(x => has(spec, x)).length >= 0) continue; if (k === 'stat' && out.some(x => x.startsWith('stat'))) continue; used.add(cat); if (k === 'any' && cat === 'wings') used.add('wings'); if (r === 'tentacles:1') { used.add('legs'); } out.push(r); }
  return out; }
function nextOrder() {
  const d = D(); if (S.orderI >= d.orderN) { endRun(); return; }
  const def = CUSTOMERS[(S.orderI * 3 + Math.floor(rng() * 7)) % CUSTOMERS.length]; if (cust) disposeVillager(cust); cust = createVillager(def, L.flameT); cust.def = def; scene.add(cust.g);
  const from = DOORS[0].clone(), to = new THREE.Vector3(-2.05, 0, 1.05); cust.g.position.copy(from); L.doors[0].target = 1; A.sfx.door();
  O = { def, reqs: genReqs(d.reqN), t0: S.gt, phase: 'arrive', from, to, tLimit: d.orderT, tLeft: d.orderT, met: 0 }; S.alive = false; MP.life = 0;
  renderOrder(); $('order').classList.add('show'); hideDock(); setUI();
}
function orderStep(dt) {
  const P = cust; if (!O || !P) return;
  if (O.phase === 'arrive') { const k = smooth((S.gt - O.t0) / 2.2); P.g.position.lerpVectors(O.from, O.to, k); P.g.lookAt(lerp(O.to.x + 1, 0, k), 0, lerp(O.to.z, 0, k) + (1 - k) * 0); animateVillager(P, dt, 'walk');
    if (k >= 1) { O.phase = 'build'; O.bt = S.gt; L.doors[0].target = 0; showDock(); renderDock(); P.g.lookAt(0, 0, .3); banner(t('o_new')); A.sfx.ui(); } }
  else if (O.phase === 'build') { animateVillager(P, dt, 'idle'); P.g.lookAt(0, 0, .3); if (O.tLimit) { O.tLeft = Math.max(0, O.tLimit - (S.gt - O.bt)); if (O.tLeft <= 0) { banner(t('o_time')); pullLever(); } if (O.tLeft < 8 && Math.floor(O.tLeft * 2) !== O._tk) { O._tk = Math.floor(O.tLeft * 2); A.sfx.tick(); } } renderTimer(); }
  else if (O.phase === 'zap') animateVillager(P, dt, LV && LV.struck ? 'scared' : 'idle');
  else if (O.phase === 'react') { animateVillager(P, dt, O.happy ? 'happy' : 'grumpy'); if (S.gt - O.rt > 2.6) { O.phase = 'leave'; O.lt = S.gt; L.doors[0].target = 1; puff(F, chestPos(), 10, '#b0a0c8', 1.2); A.sfx.random(); } }
  else if (O.phase === 'leave') { const k = smooth((S.gt - O.lt) / 1.8); P.g.position.lerpVectors(O.to, O.from, k); P.g.lookAt(O.from.x, 0, O.from.z); animateVillager(P, dt, 'walk');
    if (!O.swapped && k > .05) { O.swapped = true; const s = randomSpec(rng); setSpec(s, 'all'); S.alive = false; MP.life = 0; }
    if (k >= 1) { L.doors[0].target = 0; S.orderI++; if (S.failedO >= D().failO) { S.failed = true; banner(t('o_closed')); A.sfx.fail(); setTimer(1.8, () => endRun()); O.phase = 'done'; } else nextOrder(); } }
}
function deliver() { const met = O.reqs.filter(r => has(spec, r)).length, n = O.reqs.length; O.met = met; O.happy = met / n >= .6;
  const stars = met === n ? 3 : met / n >= .6 ? 2 : met > 0 ? 1 : 0; O.stars = stars; S.stars += stars; if (met / n < .5) S.failedO++;
  const pts = met * 100 + (met === n ? 150 + Math.round((O.tLimit ? O.tLeft : 20) * 4) : 0); S.score += pts; S.results.push({ kind: 'order', pts, stars, cust: O.def.id });
  O.phase = 'react'; O.rt = S.gt; act(O.happy ? 'cheer' : 'sad', 1.6); if (O.happy) { A.sfx.cheer(.5); sparks(F, cust.g.position.clone().setY(1.7), 30, { colors: ['#ffe08a', '#ff7ab0', '#ffffff'], speed: 2.4, up: 1.6, life: 1, grav: 2, size: .08 }); } else A.sfx.boo();
  banner(`${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}  +${pts}`); popText(t(O.happy ? (stars === 3 ? 'o_perfect' : 'o_happy') : 'o_meh'), O.happy ? '#ffe08a' : '#cfd0e8', 1.3); renderOrder(); setUI(); }
function renderOrder() { if (!O) return; const def = O.def; $('oFace').textContent = def.e; $('oWho').textContent = t('cu_' + def.id); $('oSay').textContent = t('cs_' + def.id);
  const box = $('oReqs'); box.innerHTML = ''; for (const r of O.reqs) { const ok = has(spec, r); const el = document.createElement('span'); el.className = 'req' + (ok ? ' ok' : ''); el.textContent = (ok ? '✔ ' : '') + REQ(r, S.lang); box.appendChild(el); }
  $('oNum').textContent = `${t('order')} ${S.orderI + 1}/${D().orderN}`; renderTimer(); }
function renderTimer() { const el = $('oTime'); if (!O || !O.tLimit) { el.style.display = 'none'; return; } el.style.display = ''; $('oTimeFill').style.width = (O.tLeft / O.tLimit * 100) + '%'; $('oTimeFill').classList.toggle('low', O.tLeft < 8); }

// ---------------- flow: menu / build / end ----------------
function start(mode) { A.unlock(); clearTimers(); clearVillagers(); seq.clear(); LV = null; L.lever = 0; L.charge = 0; L.disco = 0; C = null; O = null; if (cust) { disposeVillager(cust); cust = null; }
  S.mode = mode; S.score = 0; S.failed = false; S.newBest = false; S.results = []; S.grade = ''; S.pel = 0; window.__banners = [];
  $('end').classList.remove('show'); $('menu').classList.remove('show'); $('order').classList.remove('show');
  if (mode === 'order') { startOrder(); return; }
  S.state = 'build'; S.alive = false; MP.life = 0; S.cat = 'head'; showDock(); renderDock(); music.start('lab', S.gt + .2); music.vol = .9; setUI(); A.sfx.ui();
  $('hint').textContent = t(isTouch ? 'h_buildT' : 'h_build'); setTimer(.6, () => $('hint').classList.add('show')); setTimer(7, () => $('hint').classList.remove('show')); }
function toMenu() { clearTimers(); clearVillagers(); seq.clear(); LV = null; C = null; O = null; if (cust) { disposeVillager(cust); cust = null; } L.disco = 0; L.charge = 0; L.lever = 0;
  S.state = 'menu'; S.alive = true; MP.life = 1; $('menu').classList.add('show'); $('end').classList.remove('show'); $('order').classList.remove('show'); hideDock(); music.start('lab', S.gt + .3); music.vol = .6; setUI(); applyLang(); }
function endRun() {
  if (S.state === 'end') return; clearVillagers(); seq.clear(); LV = null; L.disco = 0; L.charge = 0; L.lever = 0; if (cust) { disposeVillager(cust); cust = null; } $('order').classList.remove('show'); hideDock();
  const prev = S.state; S.state = 'end'; MP.life = Math.max(MP.life, S.mode === 'lab' ? 1 : MP.life); if (S.mode !== 'lab') { MP.life = 1; S.alive = true; }
  let ratio = 0; if (S.mode === 'show') ratio = S.results.reduce((a, r) => a + r.rating, 0) / 3; else if (S.mode === 'order') ratio = S.stars / (3 * D().orderN);
  let g = S.mode === 'lab' ? '' : ratio >= .88 ? 'S' : ratio >= .74 ? 'A' : ratio >= .58 ? 'B' : ratio >= .4 ? 'C' : 'D'; if (S.failed && !S.kids) g = 'D'; if (S.kids && g && 'CD'.includes(g)) g = 'B'; S.grade = g;
  const best = +ls.get(bestKey(), 0); S.newBest = S.mode !== 'lab' && S.score > best && S.score > 0; if (S.newBest) ls.set(bestKey(), S.score); S.best = Math.max(best, S.score);
  music.start('lab', S.gt + .5); music.vol = .6; act(S.failed ? 'sad' : 'cheer', 1.8); if (!S.failed && S.mode !== 'lab') A.sfx.win(); if (S.failed) A.sfx.fail();
  $('eTitle').textContent = S.mode === 'lab' ? t('e_lab') : S.failed ? (S.mode === 'order' ? t('o_closed') : t('mobWins')) : t(g === 'S' ? 'e_s' : g === 'A' ? 'e_a' : 'e_b');
  $('eScore').textContent = S.mode === 'lab' ? monsterName(spec, S.lang) : S.score; $('eGrade').textContent = g; $('eGrade').style.display = g ? '' : 'none';
  $('eBest').textContent = S.mode === 'lab' ? '' : S.newBest ? t('newBest') : `${t('best')}: ${S.best}`;
  const st = stats(spec); $('eStats').innerHTML = (S.mode === 'show' ? S.results.map(r => `<span>${t('c_' + r.kind)}: <b>${r.pts}</b></span>`).join('') : S.mode === 'order' ? `<span>⭐ ${S.stars}/${3 * D().orderN}</span><span>${t('orders')}: ${S.results.length}</span>` : '') +
    `<span>🦁 ${Math.round(st[0] * 100)}</span><span>👻 ${Math.round(st[1] * 100)}</span><span>💃 ${Math.round(st[2] * 100)}</span>`;
  $('eName').value = S.name; $('end').classList.add('show'); setUI();
}

// ---------------- UI ----------------
function setUI() { const st = S.state; document.body.dataset.state = st; document.body.dataset.mode = S.mode; document.body.dataset.ch = C && !C.done ? C.kind : ''; document.body.dataset.kids = S.kids ? '1' : '0';
  $('hScore').textContent = S.score; $('hMode').textContent = st === 'show' && C ? `${t('ch' + (S.chI + 1))} · ${t('c_' + C.kind)}` : st === 'order' ? `${t('order')} ${Math.min(S.orderI + 1, D().orderN)}/${D().orderN} · ⭐ ${S.stars || 0}` : st === 'build' ? (S.mode === 'lab' ? t('lab') : t('showdown')) : '';
  $('lanesPad').style.display = st === 'show' && C && C.kind === 'scare' && !C.done ? '' : 'none'; $('roarMeter').style.display = st === 'show' && C && C.kind === 'roar' && !C.done ? '' : 'none'; $('roarBtn').style.display = $('roarMeter').style.display;
  $('dance').style.display = st === 'show' && C && C.kind === 'dance' && !C.done ? '' : 'none'; $('hHeartsBox').style.display = st === 'show' && C && C.kind === 'scare' ? '' : 'none';
}
function showDock() { $('dock').classList.add('show'); } function hideDock() { $('dock').classList.remove('show'); }
function renderDock() {
  const tabs = $('tabs'); if (!tabs.children.length) CATS.forEach(c => { const b = document.createElement('button'); b.dataset.c = c; b.innerHTML = `<span>${CAT_EMO[c]}</span><small></small>`; b.onclick = () => { S.cat = c; A.unlock(); A.sfx.tab(); renderDock(); }; tabs.appendChild(b); });
  tabs.querySelectorAll('button').forEach(b => { b.classList.toggle('on', b.dataset.c === S.cat); b.querySelector('small').textContent = t('cat_' + b.dataset.c); });
  const op = $('opts'); op.innerHTML = ''; for (const p of PARTS[S.cat]) { const b = document.createElement('button'); b.dataset.p = p.id; b.className = spec[S.cat] === p.id ? 'on' : '';
    if (S.cat === 'color') { b.innerHTML = `<i class="sw" style="background:${p.c}"></i><small>${t('col_' + p.id)}</small>`; } else b.innerHTML = `<span>${p.e}</span><small>${t('p_' + S.cat + '_' + p.id)}</small>`;
    b.onclick = () => { changePart(S.cat, p.id); renderDock(); }; op.appendChild(b); }
  $('btnLever').textContent = S.state === 'order' ? t('zapOrder') : S.alive ? t('zapAgain') : t('lever'); $('lifeRow').style.display = S.state === 'build' && S.mode === 'lab' && S.alive ? '' : 'none';
  $('dName').textContent = monsterName(spec, S.lang); renderStats(); }
function renderStats() { const st = stats(spec); ['Roar', 'Scare', 'Groove'].forEach((k, i) => { const el = $('st' + k); if (el) el.style.width = Math.round(st[i] * 100) + '%'; }); const nm = $('dName'); if (nm) nm.textContent = monsterName(spec, S.lang); }
function applyLang() {
  document.documentElement.lang = S.lang; document.querySelectorAll('[data-t]').forEach(el => el.textContent = t(el.dataset.t)); $('btnLang').textContent = S.lang === 'en' ? 'DE' : 'EN';
  $('btnKids').classList.toggle('on', S.kids); $('btnKids').setAttribute('aria-pressed', S.kids); document.querySelectorAll('#diff button').forEach(b => b.classList.toggle('on', b.dataset.d === S.diff)); $('diff').style.display = S.kids ? 'none' : '';
  const bS = +ls.get(`mm-best-show-${dkey()}`, 0), bO = +ls.get(`mm-best-order-${dkey()}`, 0); $('bestShow').textContent = bS ? `🏆 ${bS}` : ''; $('bestOrder').textContent = bO ? `🏆 ${bO}` : '';
  $('btnSound').classList.toggle('on', !A.isMuted()); $('btnSound').textContent = A.isMuted() ? '🔇' : '🔊'; $('btnQ').textContent = '⚙ ' + t('q_' + S.q); renderDock(); if (O) renderOrder(); setUI(); }
function popText(txt, col, big = 1) { const el = document.createElement('div'); el.className = 'pop'; el.textContent = txt; el.style.color = col; el.style.fontSize = (28 * big * (VW < 600 ? .8 : 1)) + 'px'; $('pops').appendChild(el); setTimeout(() => el.remove(), 1300); }
function banner(s) { (window.__banners = window.__banners || []).push(s); const el = $('banner'); el.textContent = s; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }
function toast(s) { const el = $('toast'); el.textContent = s; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2500); }

// ---------------- input ----------------
let isTouch = false, drag = null;
canvas.addEventListener('pointerdown', e => { A.unlock(); isTouch = e.pointerType === 'touch'; e.preventDefault();
  if (S.state === 'show' && C && C.kind === 'roar') { roarDown(); return; }
  if (S.state === 'show' && C && C.kind === 'scare' && isTouch) { const x = e.clientX / VW; scareLane(x < .36 ? 0 : x > .64 ? 2 : 1); return; }
  if (S.state === 'build' || S.state === 'order' || S.state === 'menu' || S.state === 'end') { drag = { x: e.clientX, az: S.az }; canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId); } });
canvas.addEventListener('pointermove', e => { if (drag) { S.az = drag.az - (e.clientX - drag.x) * .006; S.azT = S.gt; } });
const up = () => { drag = null; roarUp(); }; window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
$('roarBtn').addEventListener('pointerdown', e => { e.preventDefault(); A.unlock(); roarDown(); });
document.querySelectorAll('#lanesPad button').forEach((b, i) => b.addEventListener('pointerdown', e => { e.preventDefault(); scareLane(i); }));
document.querySelectorAll('#pad button').forEach(b => b.addEventListener('pointerdown', e => { e.preventDefault(); A.unlock(); dancePress(b.dataset.d); }));
const KD = { ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right', ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down' };
window.addEventListener('keydown', e => {
  if (e.target && e.target.tagName === 'INPUT') return; A.unlock(); const k = e.code;
  if (S.state === 'show' && C && C.kind === 'roar' && (k === 'Space' || k === 'Enter' || k === 'ArrowUp')) { e.preventDefault(); if (!e.repeat) roarDown(); return; }
  if (e.repeat) return;
  if (k === 'Escape') { if (S.state === 'build' && S.mode === 'lab') { endRun(); return; } if (S.state === 'build' || S.state === 'show' || S.state === 'order') { if (S.mode === 'lab') endRun(); else if (S.state === 'show' || S.state === 'order') endRun(); else toMenu(); } return; }
  if (S.state === 'menu' && k === 'Enter') { start('show'); return; }
  if (S.state === 'show' && C && C.kind === 'scare') { const m = { ArrowLeft: 0, KeyA: 0, ArrowUp: 1, KeyW: 1, ArrowRight: 2, KeyD: 2 }[k]; if (m !== undefined) { e.preventDefault(); scareLane(m); } return; }
  if (S.state === 'show' && C && C.kind === 'dance') { const d = KD[k]; if (d) { e.preventDefault(); dancePress(d); } return; }
  if ((S.state === 'build' || (S.state === 'order' && O && O.phase === 'build')) && !LV) {
    if (k === 'ArrowLeft' || k === 'ArrowRight') { e.preventDefault(); cycle(S.cat, k === 'ArrowLeft' ? -1 : 1); renderDock(); }
    else if (k === 'ArrowUp' || k === 'ArrowDown') { e.preventDefault(); const i = CATS.indexOf(S.cat); S.cat = CATS[(i + (k === 'ArrowDown' ? 1 : -1) + CATS.length) % CATS.length]; A.sfx.tab(); renderDock(); }
    else if (k === 'KeyR') randomize(); else if (k === 'Space' || k === 'Enter' || k === 'KeyL') { e.preventDefault(); pullLever(); } }
});
window.addEventListener('keyup', e => { if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowUp') roarUp(); });
$('btnPlay').onclick = () => start('show'); $('btnOrder').onclick = () => start('order'); $('btnLab').onclick = () => start('lab');
$('btnAgain').onclick = () => start(S.mode); $('btnMenu').onclick = () => { A.sfx.ui(); toMenu(); };
$('btnQuit').onclick = () => { if (S.state === 'build' && S.mode !== 'lab' && !LV) toMenu(); else if (S.state === 'build' || S.state === 'show' || S.state === 'order') endRun(); };
$('btnLever').onclick = () => pullLever(); $('btnRandom').onclick = () => randomize();
$('btnRoar').onclick = () => { A.unlock(); act('roar', 1.6); A.sfx.roar(spec.head, M.size, .8); S.shake = .6; }; $('btnDance').onclick = () => { A.unlock(); const m = ['left', 'right', 'up', 'down', 'spin'][Math.floor(rng() * 5)]; act(m, .9); A.sfx.stomp(.35); }; $('btnDone').onclick = () => endRun();
$('btnCard').onclick = () => saveCard(false); $('btnShare').onclick = () => saveCard(true);
$('btnLang').onclick = () => { S.lang = S.lang === 'en' ? 'de' : 'en'; ls.set('mm-lang', S.lang); applyLang(); A.sfx.ui(); };
document.querySelectorAll('#diff button').forEach(b => b.onclick = () => { S.diff = b.dataset.d; ls.set('mm-diff', S.diff); applyLang(); A.unlock(); A.sfx.ui(); });
$('btnKids').onclick = () => { S.kids = !S.kids; ls.set('mm-kids', S.kids ? '1' : '0'); applyLang(); A.unlock(); A.sfx.ui(); };
$('btnSound').onclick = () => { A.unlock(); A.setMuted(!A.isMuted()); applyLang(); };
$('btnQ').onclick = () => { const o = ['low', 'mid', 'high', 'ultra']; applyQuality(o[(o.indexOf(S.q) + 1) % 4], true); };
$('eName').addEventListener('keydown', e => e.stopPropagation());
window.addEventListener('resize', resize); document.addEventListener('pointerdown', () => A.unlock(), { once: true });

// ---------------- share card ----------------
async function makeCard() {
  S.name = ($('eName').value || '').trim() || 'Player'; ls.set('mm-name', S.name); try { await document.fonts.load('700 40px Fredoka'); } catch (e) {}
  const CW = 1080, CH = 1350; renderer.setPixelRatio(1); renderer.setSize(CW, CH, false); composer.setPixelRatio(1); composer.setSize(CW, CH); bloom.strength = .22;
  const old = { a: camera.aspect, f: camera.fov, p: camera.position.clone(), q: camera.quaternion.clone() }; const h = M.size;
  camera.clearViewOffset(); camera.aspect = CW / CH; camera.fov = 42; camera.updateProjectionMatrix(); camera.position.set(1.15, SLAB_Y + h * .62, 2.4 + h * 1.15); camera.lookAt(0, SLAB_Y + h * .5 + .05, 0); composer.render();
  const c = document.createElement('canvas'); c.width = CW; c.height = CH; const k = c.getContext('2d'); k.drawImage(renderer.domElement, 0, 0, CW, CH);
  camera.aspect = old.a; camera.fov = old.f; camera.position.copy(old.p); camera.quaternion.copy(old.q); resize();
  const gr = k.createLinearGradient(0, 0, 0, CH); gr.addColorStop(0, 'rgba(8,6,18,.9)'); gr.addColorStop(.24, 'rgba(8,6,18,.05)'); gr.addColorStop(.7, 'rgba(8,6,18,.1)'); gr.addColorStop(1, 'rgba(8,6,18,.94)'); k.fillStyle = gr; k.fillRect(0, 0, CW, CH);
  const Fo = (w, s) => `${w} ${s}px Fredoka, "Arial Rounded MT Bold", sans-serif`; k.textAlign = 'center'; k.lineJoin = 'round';
  const txt = (s, x, y, fill, stroke = 'rgba(10,8,26,.85)', lw = 8) => { k.strokeStyle = stroke; k.lineWidth = lw; k.strokeText(s, x, y); k.fillStyle = fill; k.fillText(s, x, y); };
  k.font = Fo(700, 84); txt('🧪 Monster Maker', CW / 2, 112, '#d9ffe0', 'rgba(16,30,22,.9)', 10);
  k.font = Fo(700, 58); txt(monsterName(spec, S.lang), CW / 2, 192, '#fff0c8'); k.font = Fo(500, 38); txt(`${t('by')} ${S.name.slice(0, 18)}`, CW / 2, 246, '#ffffff');
  const st = stats(spec); const bx = 210, bw = 660; ['🦁 ' + t('roar'), '👻 ' + t('scare'), '💃 ' + t('groove')].forEach((lab, i) => { const y = 1030 + i * 54; k.textAlign = 'left'; k.font = Fo(600, 32); txt(lab, bx - 40, y + 11, '#f0e8ff');
    k.fillStyle = 'rgba(255,255,255,.14)'; k.beginPath(); k.roundRect(bx + 200, y - 12, bw - 200, 24, 12); k.fill(); k.fillStyle = ['#ff9a5a', '#b48cff', '#5fe0b0'][i]; k.beginPath(); k.roundRect(bx + 200, y - 12, Math.max(24, (bw - 200) * st[i]), 24, 12); k.fill(); });
  k.textAlign = 'center'; if (S.mode !== 'lab' && S.state === 'end') { k.font = Fo(700, 44); txt(`${S.mode === 'order' ? t('orderTitle') : t('showdown')}: ${S.score}${S.grade ? ' · ' + S.grade : ''}`, CW / 2, 990, '#ffe08a'); }
  k.font = Fo(600, 44); txt(t('cardTag'), CW / 2, 1238, '#9dffb8'); k.font = Fo(400, 32); txt(URL_TXT, CW / 2, 1292, 'rgba(255,255,255,.92)');
  window.__mmCard = { w: c.width, h: c.height }; return c;
}
async function saveCard(share) {
  const c = await makeCard(); const blob = await new Promise(r => c.toBlob(r, 'image/png'));
  const file = new File([blob], 'my-monster.png', { type: 'image/png' });
  if (share && navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], text: `Monster Maker — ${t('cardTag')} ${URL_TXT}` }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'my-monster.png'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast(t('saved'));
}

// ---------------- simulation ----------------
const camPos = new THREE.Vector3(0, 2.2, 6.2), look = new THREE.Vector3(0, 1.5, 0), _v = new THREE.Vector3(), _l = new THREE.Vector3();
let bubT = 3;
function keepClear(p) { for (const c of L.colliders) { _v.subVectors(p, c.p); _v.y *= .45; const dd = _v.length(), m = c.r + .7; if (dd < m) p.addScaledVector(_v.normalize(), m - dd); }
  const r = Math.hypot(p.x, p.z), rmax = RR - .95; if (r > rmax) { p.x *= rmax / r; p.z *= rmax / r; } p.y = clamp(p.y, .55, HH - 1.0); return p; }
let fovT = 45;
function camTarget(dt) {
  const st = S.state, pt = portrait(), h = M ? M.size : 2, cy = SLAB_Y + h * .5, mul = pt ? 1.35 : 1; fovT = pt ? 60 : 45;
  if (st === 'menu') { const a = Math.sin(S.gt * .08) * .55 + .15; const R = (2.8 + h * .95) * mul; _v.set(Math.sin(a) * R, SLAB_Y + h * .62 + .25, Math.cos(a) * R); _l.set(0, cy + (pt ? .35 : .1), 0); }
  else if (st === 'build' || (st === 'order' && O && O.phase === 'build')) { const cat = S.cat; const head = ['head', 'horns', 'eyes', 'mouth'].includes(cat), low = cat === 'legs', back = cat === 'tail' || cat === 'wings';
    if (S.azT === undefined || S.gt - S.azT > 6) { const goal = back ? 2.94 : st === 'order' ? (pt ? -.55 : .45) : .25; S.az = goal + (((S.az - goal + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI); S.az = lerp(S.az, back ? 2.94 : st === 'order' ? (pt ? -.55 : .45) : .25, 1 - Math.exp(-dt * (back ? 1.5 : .5))); }
    const R = (head ? 2.6 + h * .85 : low ? 2.8 + h * .9 : 3.0 + h * 1.05) * mul; const ly = head ? lerp(cy, SLAB_Y + M.headY, .6) : low ? lerp(cy, SLAB_Y + M.hipY * .6, .35) : cy; _v.set(Math.sin(S.az) * R, ly + .35, Math.cos(S.az) * R); _l.set(st === 'order' ? (pt ? -.35 : -.55) : 0, ly - (pt ? -.05 : 0), 0); }
  else if (LV) { const e = S.gt - LV.t0, k = smooth(e / (LV.end || 5)); const a = lerp(-.55, .18, k); const R = lerp(3.7, 5.2, k) * mul; _v.set(Math.sin(a) * R, lerp(SLAB_Y + .5, SLAB_Y + h * .7, smooth(e / 3)), Math.cos(a) * R); _l.set(0, lerp(cy + .2, cy, k), 0); }
  else if (st === 'show' && C && C.kind === 'scare') { _v.set(Math.sin(S.gt * .1) * .3, pt ? 7.3 : 5.5, pt ? 4.6 : 5.9); _l.set(0, pt ? .2 : .5, pt ? -.9 : -1.1); fovT = pt ? 80 : 60; }
  else if (st === 'show' && C && C.kind === 'dance') { const a = Math.sin(S.gt * .35) * .45; const R = (2.9 + h * 1.0) * mul; _v.set(Math.sin(a) * R, SLAB_Y + h * .55 + .2, Math.cos(a) * R); _l.set(0, cy, 0); }
  else if (st === 'show') { const inh = MP.inhale; const a = .18 + Math.sin(S.gt * .2) * .05; const R = (2.9 + h * .9 - inh * .9) * mul; _v.set(Math.sin(a) * R, SLAB_Y + h * .45 + .1 - inh * .2, Math.cos(a) * R); _l.set(0, cy + .1 + inh * .2, 0); }
  else if (st === 'order') { const a = pt ? -.55 : .42; const R = (3.4 + h * 1.0) * mul; _v.set(Math.sin(a) * R, SLAB_Y + h * .6, Math.cos(a) * R); _l.set(-.8, cy - .1, .3); }
  else { const a = .3 + Math.sin(S.gt * .07) * .25; const R = (2.8 + h * 1.05) * mul; _v.set(Math.sin(a) * R, SLAB_Y + h * .6 + .2, Math.cos(a) * R); _l.set(0, cy, 0); }
  // projection window shift so panels/docks never cover the monster
  const W2 = wide(), dockOn = $('dock').classList.contains('show');
  const vx = st === 'menu' ? (W2 ? -.17 : 0) : st === 'end' ? (W2 ? -.2 : 0) : dockOn && W2 ? .17 : st === 'order' && W2 ? .1 : 0;
  const vy = !W2 ? (st === 'menu' ? .17 : st === 'end' ? .22 : dockOn ? .21 : st === 'order' ? .08 : 0) : 0;
  const kv = 1 - Math.exp(-dt * 2.5); S.vx = lerp(S.vx, vx, kv); S.vy = lerp(S.vy, vy, kv); camera.setViewOffset(VW, VH, S.vx * VW, S.vy * VH, VW, VH); camera.fov = fin(lerp(camera.fov, fovT, 1 - Math.exp(-dt * 2.5))) || 45; camera.updateProjectionMatrix();
}
function step(dt) {
  dt = Math.max(0, Math.min(dt || 0, 1 / 20)); S.gt += dt; S.pel += dt; // rAF stamps can precede performance.now(): never step backwards
  for (let i = timers.length - 1; i >= 0; i--) if (timers[i].t <= S.gt) { const f = timers[i].f; timers.splice(i, 1); f(); }
  for (const k of ['flash', 'charge', 'flicker', 'strike', 'lever', 'disco', 'beat']) if (!Number.isFinite(L[k])) L[k] = 0; // NaN guard for effect values
  for (const k of ['life', 'inhale', 'twitch', 'open', 'actP']) if (!Number.isFinite(MP[k])) MP[k] = k === 'life' ? 1 : 0; if (!Number.isFinite(S.shake)) S.shake = 0;
  seq.step(S.gt); music.step(S.gt); leverStep(dt); ambient(dt); beds();
  const st = S.state;
  if (st === 'show' && C && !C.done) { if (C.kind === 'roar') roarStep(dt); else if (C.kind === 'scare') scareStep(dt); else danceStep(dt); }
  else if (st === 'show' && C && C.kind === 'scare') scareStep(dt);
  if (st === 'order') orderStep(dt);
  if (st === 'menu' && Math.floor(S.gt / 5.5) !== S._mm) { S._mm = Math.floor(S.gt / 5.5); act(['roar', 'left', 'right', 'up', 'spin', 'cheer'][S._mm % 6], S._mm % 6 === 0 ? 1.6 : .9); if (S._mm % 6 === 0) A.sfx.roar(spec.head, M.size, .5); if (S._mm % 3 === 1) { const c = L.coils[S._mm % 2]; zap(L, c.top, L.rodTip, { life: .3, amp: .35 }); A.sfx.arc(.2); } }
  if (st === 'end' && rng() < dt * .25 && !MP.act) act(['cheer', 'roar', 'spin'][Math.floor(rng() * 3)], 1.4);
  bubT -= dt; if (bubT < 0) { bubT = 4 + rng() * 5; A.sfx.bubble(); }
  // monster
  if (M) { if (MP.act) { MP.actP = (S.gt - MP.actT) / MP.actD; if (MP.actP >= 1) MP.act = null; } else MP.actP = 0;
    if (S.state !== 'build' || !LV) { } MP.look.copy(st === 'show' && C && C.kind === 'scare' && vill.length ? vill.filter(v => v.st === 'walk').sort((a, b) => b.d - a.d)[0]?.P.g.position.clone().setY(1.4) || camera.position : st === 'order' && cust ? cust.g.position.clone().setY(1.5) : camera.position);
    animateMonster(M, S.gt, dt, MP);
    for (const c of CATS) { if (pop[c] > 0) pop[c] = Math.max(0, pop[c] - dt * 2.6); if (pop[c] > 0 && M.parts[c]) { const k = pop[c]; const s = 1 + Math.sin(k * Math.PI) * .22 * k; M.parts[c].scale.setScalar(c === 'body' ? M.parts.body.scale.x * s : s); } }
    if (pop.color > 0 || pop.pattern > 0) { const k = Math.max(pop.color || 0, pop.pattern || 0); M.mats.skin.emissive.setRGB(k * .15, k * .2, k * .12); if (!M.mats.skin.emissiveMap) M.mats.skin.emissiveIntensity = 1; } else if (!M.mats.skin.emissiveMap) M.mats.skin.emissive.setRGB(0, 0, 0); }
  camTarget(dt);
  const k = 1 - Math.exp(-dt * (LV ? 1.4 : 2)); { // move on a circle around the slab (never straight through the middle / past the coils)
    const a0 = Math.atan2(camPos.x, camPos.z), a1 = Math.atan2(_v.x, _v.z); let da = a1 - a0; da = ((da + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
    const a = a0 + da * k, r = lerp(Math.hypot(camPos.x, camPos.z), Math.hypot(_v.x, _v.z), k); camPos.set(Math.sin(a) * r, lerp(camPos.y, _v.y, k), Math.cos(a) * r); if (!Number.isFinite(camPos.x + camPos.y + camPos.z)) camPos.set(0, 2.2, 6); } look.lerp(_l, k); keepClear(camPos); camera.position.copy(camPos);
  if (window.__mmCam) { const o = window.__mmCam; camPos.set(...o.p); look.set(...o.l); camera.position.copy(camPos); if (o.fov) { camera.fov = o.fov; camera.updateProjectionMatrix(); } } // scripted camera (video opening only)
  if (S.shake > .01) camera.position.lerp(look, Math.min(.1, S.shake * .055)); S.shake *= Math.exp(-dt * 5); // impact = smooth scale punch toward the monster, never a jittery screen shake
  camera.lookAt(look); camera.updateMatrixWorld();
  updateLab(L, S.gt, dt, { leverHint: (st === 'build' && !S.alive && S.pel > 4) || (st === 'order' && O && O.phase === 'build'), shake: S.shake });
  bloom.strength = (st === 'menu' || st === 'end' ? .2 : .3) * QUALITY[S.q].bloom;
  updateFX(F, dt, VH * renderer.getPixelRatio() * .5 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
  if ((st === 'show' || st === 'order') && Math.floor(S.gt * 8) !== S._h) { S._h = Math.floor(S.gt * 8); setUI(); }
}
function render() { composer.render(); }
const fps = { n: 0, acc: 0, frames: 0, bad: 0, since: 0 };
function fpsTick(dt) { if (document.hidden) return; fps.since += dt; if (fps.since < 6 || dt > .25) return; fps.acc += dt; fps.frames++;
  if (fps.acc >= 1) { const f = fps.frames / fps.acc; fps.acc = 0; fps.frames = 0; fps.n++; fps.bad = f < 32 ? fps.bad + 1 : 0; fps.last = f;
    if (!S.qUser && !window.__mmNoAutoQ && fps.bad >= 4 && S.q !== 'low') { const o = ['low', 'mid', 'high', 'ultra']; const nq = o[o.indexOf(S.q) - 1]; applyQuality(nq); toast(`${t('autoQ')} ${t('q_' + nq)} (${Math.round(f)} fps)`); fps.bad = 0; fps.since = 0; } } }

setSpec(spec); applyQuality(S.q); applyLang(); toMenu(); MP.life = 1; S.alive = true;
try { renderer.compile(scene, camera); } catch (e) {}
for (let i = 0; i < 60; i++) step(1 / 30);
let last = performance.now();
function advance(now) { const dt = Math.max(0, (now - last) / 1000) || 0; last = Math.max(last, now || 0); if (!window.__mmManual) { step(dt); fpsTick(dt); } return dt; } // rAF stamps can be earlier than the last one: never run the clock backwards
function frameLoop(now) { advance(now); render(); requestAnimationFrame(frameLoop); }
requestAnimationFrame(frameLoop);
window.__mm = { S, audioState: () => A.audioState(), MP, L, step: (dt, n = 1) => { for (let i = 0; i < n; i++) step(dt); render(); }, stepq: (dt, n = 1) => { for (let i = 0; i < n; i++) step(dt); }, log: A.log, quality: q => q ? applyQuality(q, true) : S.q, renderer, start, end: endRun, toMenu,
  bolt: (smoke = true) => { strike(L, chestPos()); A.sfx.strike(); S.shake = 1.4; L.flicker = 1.6; flashScreen(.3); if (smoke) puff(F, chestPos(), 8, '#c8d0ff', 1.2); sparks(F, chestPos(), Math.round(160 * QUALITY[S.q].parts), { colors: ['#ffffff', '#bcd2ff', '#7aa0ff', '#fff2a8'], speed: 5, up: 1.5, life: 1.0, grav: 4, size: .09 }); sparks(F, L.rodTip.clone(), 60, { colors: ['#ffffff', '#9fc0ff'], speed: 3.5, up: .5, life: .7, grav: 5, size: .07 }); },
  wake: () => { act('roar', 1.7); A.sfx.roar(spec.head, M.size, 1); A.play('choir_swell', .5, 1, 0, .6); S.shake = Math.max(S.shake, .9); }, play: A.play, chest: () => chestPos().toArray(), headY: () => SLAB_Y + (M ? M.headY : 2),
  pull: pullLever, set: changePart, spec: () => ({ ...spec }), setSpec: s => setSpec(s, 'all'), randomize, stats: () => stats(spec), name: () => monsterName(spec, S.lang), M: () => M, LV: () => LV,
  roarDown, roarUp, C: () => C && { kind: C.kind, phase: C.phase, pt: C.pt, m: C.m, zone: C.zone, n: C.n, pts: C.pts, done: C.done, hearts: C.hearts, range: C.range, scared: C.scared, spawned: C.spawned, N: C.n, seq: C.seq, k: C.k, res: C.res, respB: C.respB, callB: C.callB, r: C.r, win: C.win },
  scare: scareLane, vill: () => vill.map(v => ({ lane: v.lane, st: v.st, rem: v.len - v.d })), dance: dancePress, beat: () => music.beat(S.gt), spb: () => music.spb,
  O: () => O && { phase: O.phase, reqs: O.reqs.slice(), met: O.reqs.filter(r => has(spec, r)).length, tLeft: O.tLeft, stars: O.stars }, has: r => has(spec, r),
  cam: () => ({ p: camera.position.toArray(), near: camera.near }), camClear: () => Math.min(...L.colliders.map(c => { _v.subVectors(camera.position, c.p); _v.y *= .45; return _v.length() - c.r; })),
  screen: v => { _s.set(...v).project(camera); return { x: (_s.x * .5 + .5) * VW, y: (-_s.y * .5 + .5) * VH }; }, fps, card: saveCard, cardURL: async () => (await makeCard()).toDataURL('image/jpeg', .92), sparks: () => { let n = 0; for (let i = 0; i < F.n; i++) if (F.life[i] > 0) n++; return n; }, diff: () => S.diff, advance, challenge: kind => { clearVillagers(); S.state = 'show'; S.chI = ['roar', 'scare', 'dance'].indexOf(kind); C = null; startChallenge(kind); }, spawn: () => spawnVillager(), last: () => last, _dbg: { scene, camera, composer, bloom, F, THREE } };
document.body.classList.add('ready');
