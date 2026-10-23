// WebAudio for the embedded CC0 recordings (window.MM_SOUNDS): a real pipe organ (VSCO 2 CE), timpani, pizzicato
// strings, contrabass, xylophone, harp, thunder, rain, Tesla-coil buzz, electric zaps, roars and growls, bubbling
// flasks, chains, a lever, an angry village mob. Nothing is synthesized: pitched instruments re-pitch the nearest
// recorded note; the stone-tower room tail is a generated convolution reverb (processing only).
// Every sound (and every loop level change) is logged so tests and the video mix can replay it exactly.
let ctx = null, master = null, dry = null, conv = null, bufs = {}, ready = false, muted = false; const loops = {};
export const log = [];
let clock = () => 0;
export function setClock(f) { clock = f; }
function b64(s) { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; }
export const INS = {
  org: Object.fromEntries([48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81].map(m => [m, m])),
  ped: Object.fromEntries([24, 27, 30, 33, 36, 39, 42].map(m => [m, m])),
  pz: { D3: 50, A3: 57, C4: 60, E4: 64, G4: 67, D5: 74 },
  cb: { E1: 28, Fs1: 30, A1: 33, Cs2: 37, E2: 40 },
  xy: { C5: 72, G5: 79, C6: 84 },
  hp: { D4: 62, A4: 69 }
};
const SORTED = Object.fromEntries(Object.entries(INS).map(([k, v]) => [k, Object.entries(v).sort((a, b) => a[1] - b[1])]));
export function sampleFor(ins, m) { const L = SORTED[ins]; let best = L[0]; for (const e of L) if (Math.abs(e[1] - m) < Math.abs(best[1] - m)) best = e; return { n: ins + '_' + best[0], r: Math.pow(2, (m - best[1]) / 12) }; }
function makeIR(sec = 2.8) { const sr = ctx.sampleRate, n = Math.floor(sr * sec), ir = ctx.createBuffer(2, n, sr); let seed = 11;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 * 2 - 1; };
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); let lp = 0; for (let i = 0; i < n; i++) { const t = i / sr; lp += (rnd() - lp) * (.5 - .38 * t / sec); d[i] = lp * Math.exp(-t * 2.2) * (i < sr * .02 ? i / (sr * .02) : 1); } } return ir; }
// iOS Safari: create/resume inside the tap, play a 1-sample silent buffer (unlocks output), ask for 'playback' (ignores the mute switch)
function kick(c) { try { const b = c.createBuffer(1, 1, 22050), s = c.createBufferSource(); s.buffer = b; s.connect(c.destination); s.start(0); } catch (e) {} }
export function audioState() { return ctx ? ctx.state : 'none'; }
export async function unlock() {
  try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch (e) {}
  if (ctx) { if (ctx.state !== 'running') ctx.resume().catch(() => {}); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  ctx = new AC(); kick(ctx); if (ctx.state !== 'running') ctx.resume().catch(() => {}); master = ctx.createGain(); master.gain.value = muted ? 0 : .9;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 3; comp.attack.value = .004; comp.release.value = .2; master.connect(comp); comp.connect(ctx.destination);
  dry = ctx.createGain(); dry.connect(master); conv = ctx.createConvolver(); conv.buffer = makeIR(); const wet = ctx.createGain(); wet.gain.value = .32; conv.connect(wet); wet.connect(master);
  const src = window.MM_SOUNDS || {};
  await Promise.all(Object.keys(src).map(k => new Promise(res => { try { ctx.decodeAudioData(b64(src[k]), b => { bufs[k] = b; res(); }, () => res()); } catch (e) { res(); } })));
  ready = true; window.__mmAudioReady = Object.keys(bufs).length; for (const k in loops) startLoop(k);
}
export function play(n, vol = 1, rate = 1, delay = 0, rev = .4, dur = 0, pan = 0) {
  if (!Number.isFinite(vol)) vol = 0; if (!Number.isFinite(rate) || rate <= 0) rate = 1; if (!Number.isFinite(delay)) delay = 0; if (!Number.isFinite(rev)) rev = 0; if (!Number.isFinite(dur)) dur = 0; if (!Number.isFinite(pan)) pan = 0;
  delay = Math.max(0, delay); log.push({ n, t: clock() + delay, v: vol, r: rate, rv: rev, d: dur, p: pan });
  if (log.length > 8000) log.splice(0, 1500);
  if (!ready || !bufs[n] || !(vol > 0)) return null;
  const s = ctx.createBufferSource(); s.buffer = bufs[n]; s.playbackRate.value = rate;
  const g = ctx.createGain(); g.gain.value = vol; s.connect(g); let out = g;
  if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); out = p; }
  out.connect(dry); if (rev > 0) { const sg = ctx.createGain(); sg.gain.value = rev; out.connect(sg); sg.connect(conv); }
  const t0 = ctx.currentTime + delay; s.start(t0);
  if (dur > 0) { g.gain.setValueAtTime(vol, t0 + dur); g.gain.exponentialRampToValueAtTime(.0008, t0 + dur + .4); s.stop(t0 + dur + .45); }
  return s;
}
export function note(ins, m, vol = .7, dur = 0, delay = 0, rev = .4, pan = 0) { const { n, r } = sampleFor(ins, m); return play(n, vol, r, delay, rev, dur, pan); }
// looping beds (rain, coil buzz, bubbling, mob): level/rate changes are logged as '~name'
function startLoop(k) { const L = loops[k]; if (!ready || L.src || !bufs[k]) return; L.g = ctx.createGain(); L.g.gain.value = L.v; L.src = ctx.createBufferSource(); L.src.buffer = bufs[k]; L.src.loop = true; L.src.playbackRate.value = L.r; L.src.connect(L.g); L.g.connect(dry); const sg = ctx.createGain(); sg.gain.value = .25; L.g.connect(sg); sg.connect(conv); L.src.start(); }
export function loop(k, v, r = 1, fade = .4) {
  if (!Number.isFinite(v)) v = 0; if (!Number.isFinite(r) || r <= 0) r = 1; if (!Number.isFinite(fade)) fade = .4;
  const L = loops[k] || (loops[k] = { v: 0, r: 1 }); if (Math.abs(L.v - v) < .004 && Math.abs(L.r - r) < .004) return; L.v = v; L.r = r;
  log.push({ n: '~' + k, t: clock(), v, r, f: fade }); startLoop(k);
  if (L.g) { const t = ctx.currentTime; L.g.gain.cancelScheduledValues(t); L.g.gain.setValueAtTime(L.g.gain.value, t); L.g.gain.linearRampToValueAtTime(v, t + fade); L.src.playbackRate.setTargetAtTime(r, t, .15); }
}
export function setMuted(m) { muted = m; if (master) master.gain.value = m ? 0 : .9; }
export function isMuted() { return muted; }
const rr = a => a[Math.floor(Math.random() * a.length)];
const ROARS = { bolt: ['roar_big', .92], round: ['growl', 1.05], pumpkin: ['roar_b', 1], dragon: ['roar_dragon', 1], alien: ['roar_hiss', 1.08], bat: ['roar_small', 1] };
export const sfx = {
  ui() { play('cl_1', .28, 1.25, 0, .15); },
  tab() { play('cl_2', .22, 1.1, 0, .15); },
  part(cat) { const map = { horns: ['clank', .18, 1.6], wings: ['wing', .5, 1], eyes: ['splat', .3, 1.5], color: ['bubbles_a', .5, 1.1], pattern: ['magic', .2, 1.2], tail: ['splat', .35, .9], legs: ['stomp', .25, 1.3], head: ['splat', .45, .8], mouth: ['splat', .35, 1.2], arms: ['splat', .4, 1], body: ['splat', .5, .75] }[cat] || ['splat', .4, 1];
    play(map[0], map[1], map[2] * (.95 + Math.random() * .1), 0, .3); play('splat', .18, 1.3 + Math.random() * .2, .03, .2); },
  random() { play('magic', .3, 1, 0, .4); play('bubbles_b', .4, 1.2, 0, .3); play('splat', .3, .9, .1, .2); },
  lever() { play('lever', .8, 1, 0, .3); play('clank', .4, .9, .25, .4); play('chain', .45, 1, .05, .3); },
  charge() { play('tproll', .35, 1, 0, .5); play('heart', .55, 1, .2, .3); play('zap_crackle', .4, 1, .1, .4); play('cymcresc', .25, 1, .4, .5); },
  arc(k = .3) { play(rr(['zap_1', 'zap_2', 'zap_3', 'zap_short', 'spark']), k, .9 + Math.random() * .25, 0, .35, 0, (Math.random() - .5) * .8); },
  strike() { play('thunder', .9, 1, 0, .25); play('zap_big', .8, 1, 0, .3); play('crash', .45, .9, 0, .5); play('sub', .6, 1, 0, .2); play('gong', .3, .8, .05, .5); play('glass', .25, 1.1, .3, .4, 0, -.5); },
  alive(head) { play('choir_swell', .5, 1, 0, .6); const [n, r] = ROARS[head] || ROARS.bolt; play(n, .85, r, .55, .4); play('mad_laugh', .5, 1, 1.9, .5, 0, .5); },
  roar(head, size = 1, k = 1) { const [n, r] = ROARS[head] || ROARS.bolt; play(n, .5 + .45 * k, r * (1.15 - .25 * Math.min(1, size / 2.4)) * (.97 + Math.random() * .06), 0, .45); if (k > .7) { play('sub', .35 * k, 1, 0, .2); play('impact', .3 * k, .8, 0, .3); } },
  fizzle() { play('roar_tiny', .45, .8, 0, .3); play('zap_short', .2, .7, .1, .3); },
  inhale(k) { play('fwoosh', .2 + .2 * k, .6 + k * .3, 0, .3); },
  glass() { play('glass', .55, .95 + Math.random() * .1, 0, .45, 0, (Math.random() - .5)); },
  cheer(v = .5) { play('applause', v, 1, 0, .5); play('cheer', v * .6, 1, .1, .5); },
  boo() { play('boo', .4, 1, 0, .5); },
  door() { play('chain', .35, .8, 0, .4); play('clank', .25, .7, .1, .5); },
  scream(pan = 0) { play('crowd_panic', .55, 1 + (Math.random() - .5) * .1, 0, .4, 1.3, pan); },
  poke() { play('impact', .55, 1.1, 0, .3); play('growl', .4, 1.3, .05, .3); },
  stomp(v = .4) { play('stomp', v, .9 + Math.random() * .2, 0, .3); },
  whiff() { play('fwoosh', .35, 1.2, 0, .3); },
  thunder(far = false) { play(far ? 'thunder_soft' : 'thunder', far ? .45 : .7, 1, 0, .25); },
  judge(ok) { if (ok) play('xy_C6', .25, 1, 0, .4); },
  kids() { play('laugh_kids', .45, 1, 0, .4); },
  win() { play('success', .5, 1, 0, .4); play('sparkle', .35, 1, .3, .5); },
  fail() { play('crowd_panic', .3, .8, 0, .5); play('roar_tiny', .4, .7, .2, .4); play('gong', .35, .7, 0, .5); },
  tick() { play('cl_2', .18, 1.5, 0, .1); },
  bubble() { play(rr(['bubbles_a', 'bubbles_b']), .25, .9 + Math.random() * .3, 0, .3, 0, -.4); },
  torch() { play('torch', .3, 1, 0, .4); }
};
