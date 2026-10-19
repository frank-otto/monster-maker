// Procedural mix-and-match monster: every part is real 3D geometry on a hierarchical rig (hips > torso > neck > head,
// shoulders > elbows > hands, hips > knees > feet / spider legs / tentacles, tail chain, wing pivots), animated
// procedurally (breathing, look-at, blinking, IK legs, tail/tentacle waves, dance moves, roars, lunges).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { cv, tex, rnd, noise2 } from './tex.js';

export const CATS = ['head', 'horns', 'eyes', 'mouth', 'body', 'arms', 'legs', 'tail', 'wings', 'color', 'pattern'];
export const CAT_EMO = { head: '🗿', horns: '🦌', eyes: '👁️', mouth: '👄', body: '🫃', arms: '💪', legs: '🦵', tail: '🦎', wings: '🦇', color: '🎨', pattern: '🐾' };
// s = [roar, scare, groove]
export const PARTS = {
  head: [{ id: 'bolt', e: '🔩', s: [3, 2, 1] }, { id: 'round', e: '🟢', s: [1, 1, 3] }, { id: 'pumpkin', e: '🎃', s: [1, 3, 2] }, { id: 'dragon', e: '🐲', s: [3, 3, 0] }, { id: 'alien', e: '👽', s: [0, 2, 3] }, { id: 'bat', e: '🦇', s: [1, 2, 3] }],
  horns: [{ id: 'none', e: '⭕', s: [0, 0, 0] }, { id: 'devil', e: '😈', s: [1, 2, 0] }, { id: 'ram', e: '🐏', s: [2, 1, 0] }, { id: 'antennae', e: '📡', s: [0, 1, 2] }, { id: 'unicorn', e: '🦄', s: [0, 0, 3] }, { id: 'antlers', e: '🦌', s: [1, 2, 1] }],
  eyes: [{ id: 'two', e: '👀', s: [0, 1, 1] }, { id: 'cyclops', e: '👁️', s: [1, 2, 0] }, { id: 'three', e: '🔺', s: [0, 2, 1] }, { id: 'many', e: '🕷️', s: [0, 3, 0] }, { id: 'stalks', e: '🐌', s: [0, 1, 2] }],
  mouth: [{ id: 'grin', e: '😁', s: [1, 1, 2] }, { id: 'fangs', e: '🧛', s: [2, 2, 0] }, { id: 'tusks', e: '🐗', s: [3, 1, 0] }, { id: 'stitched', e: '🧵', s: [0, 2, 1] }, { id: 'beak', e: '🦜', s: [1, 1, 2] }, { id: 'jaw', e: '🦈', s: [3, 2, 0] }],
  body: [{ id: 'blob', e: '🫧', s: [1, 0, 2] }, { id: 'brute', e: '🦍', s: [3, 1, 0] }, { id: 'slim', e: '🦒', s: [0, 1, 3] }, { id: 'pear', e: '🍐', s: [1, 1, 1] }, { id: 'bug', e: '🐛', s: [0, 3, 1] }],
  arms: [{ id: 'claws', e: '🐾', s: [1, 2, 1] }, { id: 'muscle', e: '💪', s: [3, 1, 0] }, { id: 'stubby', e: '🧸', s: [0, 0, 2] }, { id: 'tentacles', e: '🐙', s: [0, 2, 3] }, { id: 'pincers', e: '🦀', s: [1, 3, 0] }],
  legs: [{ id: 'stompers', e: '🦶', s: [3, 0, 1] }, { id: 'chicken', e: '🐔', s: [0, 1, 3] }, { id: 'spider', e: '🕸️', s: [0, 3, 1] }, { id: 'stubby', e: '🥔', s: [1, 0, 1] }, { id: 'tentacle', e: '🦑', s: [0, 2, 2] }],
  tail: [{ id: 'none', e: '⭕', s: [0, 0, 0] }, { id: 'lizard', e: '🦎', s: [1, 0, 1] }, { id: 'devil', e: '🔱', s: [0, 2, 1] }, { id: 'fluffy', e: '🐿️', s: [0, 0, 2] }, { id: 'scorpion', e: '🦂', s: [0, 3, 0] }],
  wings: [{ id: 'none', e: '⭕', s: [0, 0, 0] }, { id: 'bat', e: '🦇', s: [1, 2, 1] }, { id: 'dragon', e: '🐉', s: [2, 2, 0] }, { id: 'bug', e: '🦋', s: [0, 1, 2] }, { id: 'tiny', e: '🪶', s: [0, 0, 2] }],
  color: [{ id: 'green', c: '#5fae3c' }, { id: 'purple', c: '#8a58d0' }, { id: 'orange', c: '#e2782c' }, { id: 'blue', c: '#3f7fd6' }, { id: 'red', c: '#c23a3a' }, { id: 'teal', c: '#2fa79a' }, { id: 'pink', c: '#e06aa8' }, { id: 'bone', c: '#d6ccb2' }],
  pattern: [{ id: 'plain', e: '⬜', s: [0, 0, 0] }, { id: 'spots', e: '🔴', s: [0, 0, 1] }, { id: 'stripes', e: '🦓', s: [0, 1, 0] }, { id: 'scales', e: '🐊', s: [1, 0, 0] }, { id: 'stitches', e: '🧵', s: [0, 1, 0] }, { id: 'glow', e: '✨', s: [0, 2, 0] }]
};
PARTS.color.forEach(p => { p.s = [0, 0, 0]; p.e = '●'; });
export const STAT_MAX = [0, 1, 2].map(k => CATS.reduce((a, c) => a + Math.max(...PARTS[c].map(p => p.s[k])), 0));
export const part = (cat, id) => PARTS[cat].find(p => p.id === id) || PARTS[cat][0];
export function stats(spec) { const v = [0, 0, 0]; for (const c of CATS) { const p = part(c, spec[c]); for (let k = 0; k < 3; k++) v[k] += p.s[k]; } return v.map((x, k) => x / STAT_MAX[k] * 1.75).map(x => Math.min(1, x)); }
export const DEFAULT_SPEC = { head: 'bolt', horns: 'none', eyes: 'two', mouth: 'stitched', body: 'brute', arms: 'claws', legs: 'stompers', tail: 'none', wings: 'none', color: 'green', pattern: 'stitches' };
export function randomSpec(R = Math.random) { const s = {}; for (const c of CATS) { const L = PARTS[c]; let p = L[Math.floor(R() * L.length)]; if ((c === 'wings' || c === 'tail' || c === 'horns') && R() < .25) p = L[0]; s[c] = p.id; } return s; }
// fun, part-based monster names (no real people)
const N1 = { bolt: ['Volt', 'Sparky', 'Boltz'], round: ['Blub', 'Gloop', 'Bobo'], pumpkin: ['Gourd', 'Pumpo', 'Jacko'], dragon: ['Drako', 'Scorch', 'Fang'], alien: ['Zorb', 'Quark', 'Bleep'], bat: ['Flitter', 'Nyx', 'Squeak'] };
const N2 = { claws: 'claw', muscle: 'crusher', stubby: 'hugger', tentacles: 'tangle', pincers: 'snapper' };
const N3 = { stompers: 'the Stomper', chicken: 'the Strutter', spider: 'the Creeper', stubby: 'the Waddler', tentacle: 'the Slitherer' };
export function monsterName(spec, lang = 'en') { const a = N1[spec.head] || N1.bolt; const i = (spec.color.length + spec.eyes.length + spec.mouth.length) % a.length;
  const de = { 'the Stomper': 'der Stampfer', 'the Strutter': 'der Stolzierer', 'the Creeper': 'der Krabbler', 'the Waddler': 'der Watschler', 'the Slitherer': 'der Schlängler' };
  const t = N3[spec.legs]; return `${a[i]}${N2[spec.arms]} ${lang === 'de' ? de[t] : t}`; }

// ---------------- skin patterns (grayscale, tinted by the material colour) ----------------
const patCache = {};
function patternCanvases(id) {
  if (patCache[id]) return patCache[id];
  const W = 512, H = 256, [c, g] = cv(W, H), [e, eg] = cv(W, H), n = noise2(31), r = rnd(id.length * 977 + 3);
  const im = g.createImageData(W, H); for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const v = n(x / 18, y / 18) * .5 + n(x / 4, y / 4) * .5; const i = (y * W + x) * 4, k = 205 + v * 50; im.data[i] = im.data[i + 1] = im.data[i + 2] = k; im.data[i + 3] = 255; }
  g.putImageData(im, 0, 0); eg.fillStyle = '#000'; eg.fillRect(0, 0, W, H);
  const wrap = (f) => { for (const ox of [-W, 0, W]) { g.save(); g.translate(ox, 0); f(g); g.restore(); } };
  if (id === 'spots') for (let k = 0; k < 46; k++) { const x = r() * W, y = r() * H, s = 6 + r() * 20; wrap(gg => { const gr = gg.createRadialGradient(x, y, s * .6, x, y, s); gr.addColorStop(0, 'rgba(40,20,30,.55)'); gr.addColorStop(1, 'rgba(40,20,30,0)'); gg.fillStyle = gr; gg.beginPath(); gg.arc(x, y, s, 0, 7); gg.fill(); }); }
  if (id === 'stripes') for (let k = 0; k < 12; k++) { const x0 = k * W / 12; g.fillStyle = 'rgba(20,10,30,.5)'; g.beginPath(); for (let y = 0; y <= H; y += 8) g.lineTo(x0 + Math.sin(y / 30 + k) * 10, y); for (let y = H; y >= 0; y -= 8) g.lineTo(x0 + 14 + Math.sin(y / 30 + k) * 12, y); g.fill(); }
  if (id === 'scales') { const s = 22; for (let y = -s; y < H + s; y += s * .55) for (let x = -s; x < W + s; x += s) { const ox = (Math.round(y / (s * .55)) % 2) * s * .5; g.strokeStyle = 'rgba(20,20,20,.42)'; g.lineWidth = 2.2; g.beginPath(); g.arc(x + ox, y, s * .55, 0, Math.PI); g.stroke(); g.fillStyle = 'rgba(255,255,255,.08)'; g.beginPath(); g.arc(x + ox, y - 3, s * .35, 0, Math.PI); g.fill(); } }
  if (id === 'stitches') { for (let k = 0; k < 9; k++) { g.fillStyle = `rgba(${r() < .5 ? 0 : 255},${r() < .5 ? 0 : 255},${r() < .5 ? 0 : 255},.07)`; g.beginPath(); const x = r() * W, y = r() * H; for (let j = 0; j < 6; j++) g.lineTo(x + (r() - .5) * 220, y + (r() - .5) * 160); g.fill(); }
    for (let k = 0; k < 8; k++) { let x = r() * W, y = r() * H; const a = r() * Math.PI, L = 90 + r() * 120; g.strokeStyle = 'rgba(30,15,20,.75)'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * L, y + Math.sin(a) * L); g.stroke();
      for (let j = 0; j < L; j += 11) { const px = x + Math.cos(a) * j, py = y + Math.sin(a) * j; g.beginPath(); g.moveTo(px - Math.sin(a) * 6, py + Math.cos(a) * 6); g.lineTo(px + Math.sin(a) * 6, py - Math.cos(a) * 6); g.stroke(); } } }
  if (id === 'glow') { eg.strokeStyle = '#fff'; eg.lineCap = 'round'; for (let k = 0; k < 16; k++) { let x = r() * W, y = r() * H, a = r() * 6; eg.lineWidth = 2 + r() * 3; eg.beginPath(); eg.moveTo(x, y); for (let j = 0; j < 40; j++) { a += (r() - .5) * .9; x += Math.cos(a) * 7; y += Math.sin(a) * 7; eg.lineTo(x, y); } eg.stroke(); }
    eg.filter = 'blur(2px)'; eg.drawImage(e, 0, 0); eg.filter = 'none'; g.globalAlpha = .35; g.drawImage(e, 0, 0); g.globalAlpha = 1; }
  return patCache[id] = { c, e: id === 'glow' ? e : null };
}

// ---------------- geometry helpers ----------------
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function seg(len, r0, r1, mat, rs = 10) { const g = new THREE.CapsuleGeometry((r0 + r1) / 2, Math.max(.01, len - (r0 + r1)), 4, rs); g.translate(0, -len / 2, 0); const m = new THREE.Mesh(g, mat); m.castShadow = true; return m; }
function cone(r, h, mat, rs = 10) { const g = new THREE.ConeGeometry(r, h, rs); g.translate(0, h / 2, 0); const m = new THREE.Mesh(g, mat); m.castShadow = true; return m; }
function sph(r, mat, ws = 20, hs = 14) { const m = new THREE.Mesh(new THREE.SphereGeometry(r, ws, hs), mat); m.castShadow = true; return m; }
function hornCurve(pts, r0, mat, segs = 24) { const c = new THREE.CatmullRomCurve3(pts); const g = new THREE.TubeGeometry(c, segs, 1, 10, false); const p = g.attributes.position, n = g.attributes.normal;
  // taper: rebuild radius along the tube
  for (let i = 0; i <= segs; i++) { const k = 1 - i / segs, rr = r0 * (.08 + .92 * k); const ct = c.getPointAt(i / segs); for (let j = 0; j <= 10; j++) { const idx = i * 11 + j; p.setXYZ(idx, ct.x + n.getX(idx) * rr, ct.y + n.getY(idx) * rr, ct.z + n.getZ(idx) * rr); } }
  g.computeVertexNormals(); const m = new THREE.Mesh(g, mat); m.castShadow = true; return m; }
function wingShape(kind) { const s = new THREE.Shape(); // in local x>0 (outward), y up
  if (kind === 'bat' || kind === 'dragon') { const k = kind === 'dragon' ? 1.45 : 1; s.moveTo(0, .05); s.lineTo(.35 * k, .32 * k); s.lineTo(.9 * k, .42 * k); s.quadraticCurveTo(.78 * k, .1 * k, .82 * k, -.22 * k); s.quadraticCurveTo(.6 * k, -.08 * k, .5 * k, -.28 * k); s.quadraticCurveTo(.33 * k, -.12 * k, .2 * k, -.3 * k); s.quadraticCurveTo(.1 * k, -.12 * k, 0, -.18); s.lineTo(0, .05); }
  else if (kind === 'tiny') { s.moveTo(0, 0); s.quadraticCurveTo(.12, .3, .34, .26); s.quadraticCurveTo(.3, .12, .36, .02); s.quadraticCurveTo(.24, -.02, .26, -.12); s.quadraticCurveTo(.12, -.06, 0, -.08); }
  return s; }

// ---------------- head definitions ----------------
// ell: front-surface ellipsoid [cx, cy, cz, rx, ry, rz] (to sit eyes and mouth on the face), top: y of the crown
const HEADS = {
  bolt: { ell: null, boxZ: .3, eyeY: .44, eyeW: .14, mouthY: .2, mouthW: .34, top: .7, hornX: .2, hornZ: 0, eyeS: 1 },
  round: { ell: [0, .34, 0, .37, .37, .37], eyeY: .43, eyeW: .14, mouthY: .21, mouthW: .3, top: .7, hornX: .17, hornZ: 0, eyeS: 1 },
  pumpkin: { ell: [0, .33, 0, .43, .34, .4], eyeY: .41, eyeW: .16, mouthY: .21, mouthW: .34, top: .66, hornX: .2, hornZ: 0, eyeS: 1 },
  dragon: { ell: [0, .38, -.04, .3, .3, .3], snout: true, eyeY: .5, eyeW: .15, mouthY: .2, mouthW: .26, mouthZ: .47, top: .67, hornX: .16, hornZ: -.12, eyeS: .9 },
  alien: { ell: [0, .45, 0, .31, .42, .3], eyeY: .44, eyeW: .14, mouthY: .2, mouthW: .14, top: .86, hornX: .15, hornZ: 0, eyeS: 1.3 },
  bat: { ell: [0, .34, 0, .34, .34, .33], eyeY: .43, eyeW: .14, mouthY: .19, mouthW: .26, top: .66, hornX: .1, hornZ: .02, eyeS: 1 }
};
function frontZ(H, x, y) { if (H.boxZ) return H.boxZ; const [cx, cy, cz, rx, ry, rz] = H.ell; const q = 1 - ((x - cx) / rx) ** 2 - ((y - cy) / ry) ** 2; return cz + rz * Math.sqrt(Math.max(.02, q)); }
// ---------------- bodies ----------------
const BODIES = {
  blob: { neck: [0, .98, .04], sh: [.55, .62, .03], legX: .27, tail: [0, .3, -.5], wing: [.24, .78, -.4], w: .62 },
  brute: { neck: [0, 1.2, .1], sh: [.64, .98, .05], legX: .3, tail: [0, .3, -.4], wing: [.26, 1.02, -.36], w: .66 },
  slim: { neck: [0, 1.12, 0], sh: [.33, .92, 0], legX: .16, tail: [0, .24, -.24], wing: [.16, .9, -.22], w: .32 },
  pear: { neck: [0, 1.03, 0], sh: [.37, .8, 0], legX: .27, tail: [0, .26, -.5], wing: [.2, .84, -.3], w: .56 },
  bug: { neck: [0, 1.05, .18], sh: [.28, .86, .12], legX: .22, tail: [0, .38, -.98], wing: [.2, .92, -.06], w: .4 }
};
const LEGS = { stompers: { hipY: .72, a: .38, b: .36, r: .13 }, chicken: { hipY: .86, a: .4, b: .48, r: .085, dig: true }, spider: { hipY: .55 }, stubby: { hipY: .34, a: .17, b: .17, r: .11 }, tentacle: { hipY: .44 } };

export function buildMonster(spec, opt = {}) {
  const col = new THREE.Color(part('color', spec.color).c); const pat = patternCanvases(spec.pattern);
  const map = tex(pat.c, true, [1, 1]); const emap = pat.e ? tex(pat.e, true, [1, 1]) : null;
  const skin = new THREE.MeshStandardMaterial({ color: col, map, roughness: .6, metalness: 0, bumpMap: map, bumpScale: 1.2, emissiveMap: emap, emissive: emap ? col.clone().offsetHSL(0, .15, .25) : new THREE.Color('#000'), emissiveIntensity: 0 });
  const skinDark = new THREE.MeshStandardMaterial({ color: col.clone().multiplyScalar(.55), map, roughness: .7, side: THREE.DoubleSide });
  const bone = new THREE.MeshStandardMaterial({ color: '#e8dcc0', roughness: .42 });
  const hornM = new THREE.MeshStandardMaterial({ color: spec.horns === 'devil' ? '#8a1c1c' : spec.horns === 'unicorn' ? '#f0e6ff' : '#d9c9a4', roughness: .38, metalness: spec.horns === 'unicorn' ? .2 : 0 });
  const dark = new THREE.MeshStandardMaterial({ color: '#2a070a', roughness: .8 }), tooth = new THREE.MeshStandardMaterial({ color: '#f6f0e0', roughness: .3 });
  const iron = new THREE.MeshStandardMaterial({ color: '#5a5e66', roughness: .35, metalness: .9 });
  const eyeCol = new THREE.Color(spec.color === 'green' || spec.color === 'teal' ? '#ffd23a' : spec.color === 'orange' || spec.color === 'red' ? '#7dff6a' : '#ffe14a');
  const irisM = new THREE.MeshStandardMaterial({ color: eyeCol, emissive: eyeCol, emissiveIntensity: 0, roughness: .3 });
  const sclera = new THREE.MeshStandardMaterial({ color: '#f2eee4', roughness: .25 }), pupilM = new THREE.MeshStandardMaterial({ color: '#050505', roughness: .2 });
  const M = { spec, root: new THREE.Group(), parts: {}, eyes: [], arms: [], legs: [], tail: [], wings: [], ants: [], mats: { skin, skinDark, bone, hornM, dark, tooth, iron, irisM, sclera, pupilM }, geos: [], anim: { look: V(0, 1.5, 5), blink: 0, nextBlink: 2, yaw: 0, t: 0 }, stats: stats(spec) };
  M.root.name = 'monster'; const rig = new THREE.Group(); M.root.add(rig); M.rig = rig;
  const B = BODIES[spec.body], LG = LEGS[spec.legs]; M.hipY = LG.hipY; M.B = B;
  const hips = new THREE.Group(); hips.position.y = LG.hipY; rig.add(hips); M.hips = hips;
  const torso = new THREE.Group(); hips.add(torso); M.torso = torso; const tg = new THREE.Group(); torso.add(tg); M.parts.body = tg;
  // --- body ---
  if (spec.body === 'blob') { const b = sph(.6, skin, 32, 24); b.scale.set(1, .92, .88); b.position.y = .5; tg.add(b); const belly = sph(.42, skin, 24, 16); belly.scale.set(1, .9, .6); belly.position.set(0, .42, .26); tg.add(belly); }
  else if (spec.body === 'brute') { const c = sph(.5, skin, 32, 24); c.scale.set(1.3, 1.05, .85); c.position.y = .8; tg.add(c); const b = sph(.42, skin, 24, 18); b.scale.set(1.05, .9, .92); b.position.set(0, .33, .03); tg.add(b);
    for (const x of [-.36, .36]) { const p = sph(.26, skin, 20, 14); p.scale.set(1.1, .7, .8); p.position.set(x, .98, .1); tg.add(p); } }
  else if (spec.body === 'slim') { const c = new THREE.Mesh(new THREE.CapsuleGeometry(.27, .62, 8, 24), skin); c.position.y = .58; c.castShadow = true; tg.add(c); const ch = sph(.25, skin, 20, 14); ch.scale.set(1.15, .8, .9); ch.position.y = .86; tg.add(ch); }
  else if (spec.body === 'pear') { const pts = [[0, 0], [.4, .03], [.56, .24], [.53, .48], [.42, .72], [.31, .92], [.2, 1.04], [0, 1.08]].map(p => new THREE.Vector2(p[0], p[1])); const c = new THREE.Mesh(new THREE.LatheGeometry(new THREE.SplineCurve(pts).getPoints(24), 32), skin); c.castShadow = true; tg.add(c); }
  else { const ab = sph(.42, skin, 28, 18); ab.scale.set(.9, .85, 1.25); ab.position.set(0, .38, -.45); tg.add(ab); for (let k = 0; k < 4; k++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(.33 - k * .03, .025, 6, 24), skinDark); ring.position.set(0, .38, -.2 - k * .2); ring.scale.set(1.1, .95, 1); tg.add(ring); }
    const th = sph(.3, skin, 24, 16); th.position.set(0, .52, .04); tg.add(th); const ch = sph(.27, skin, 24, 16); ch.scale.set(1.05, 1, .95); ch.position.set(0, .84, .12); tg.add(ch); }
  // --- neck + head ---
  const neck = new THREE.Group(); neck.position.set(...B.neck); torso.add(neck); M.neck = neck;
  const head = new THREE.Group(); neck.add(head); M.head = head; const hg = new THREE.Group(); head.add(hg); M.parts.head = hg; const H = HEADS[spec.head]; M.H = H;
  { const nk = seg(.16, .14, .14, skin); nk.position.y = .1; neck.add(nk); }
  if (spec.head === 'bolt') { const b = new THREE.Mesh(new RoundedBoxGeometry(.62, .66, .58, 4, .08), skin); b.position.y = .36; b.castShadow = true; hg.add(b);
    const hair = new THREE.Mesh(new RoundedBoxGeometry(.66, .13, .62, 3, .04), new THREE.MeshStandardMaterial({ color: '#141414', roughness: .9 })); hair.position.y = .68; hg.add(hair);
    for (const x of [-.34, .34]) { const bl = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .16, 10), iron); bl.rotation.z = Math.PI / 2; bl.position.set(x, .14, -.02); hg.add(bl); const nut = new THREE.Mesh(new THREE.CylinderGeometry(.065, .065, .05, 6), iron); nut.rotation.z = Math.PI / 2; nut.position.set(x * 1.22, .14, -.02); hg.add(nut); }
    const scar = new THREE.Mesh(new THREE.BoxGeometry(.3, .012, .012), dark); scar.position.set(.04, .6, .3); scar.rotation.z = -.15; hg.add(scar); for (let k = 0; k < 6; k++) { const s2 = new THREE.Mesh(new THREE.BoxGeometry(.01, .05, .012), dark); s2.position.set(-.08 + k * .05, .6 + (-.08 + k * .05) * .15 * -1, .305); hg.add(s2); }
    const brow = new THREE.Mesh(new RoundedBoxGeometry(.56, .07, .08, 2, .03), skin); brow.position.set(0, .53, .29); hg.add(brow); }
  else if (spec.head === 'pumpkin') { const g = new THREE.SphereGeometry(.38, 40, 24); const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), y = p.getY(i); const a = Math.atan2(z, x); const k = 1 - .07 * Math.pow(Math.abs(Math.cos(a * 4)), .6) * (1 - Math.abs(y) / .38); p.setXYZ(i, x * k, y, z * k); } g.computeVertexNormals();
    const b = new THREE.Mesh(g, skin); b.scale.set(1.12, .88, 1.05); b.position.y = .33; b.castShadow = true; hg.add(b); const stem = hornCurve([V(0, .6, 0), V(.03, .7, 0), V(.09, .76, .02)], .05, new THREE.MeshStandardMaterial({ color: '#3d5a1e', roughness: .8 }), 10); hg.add(stem); }
  else if (spec.head === 'dragon') { const sk = sph(.3, skin, 28, 20); sk.position.set(0, .38, -.04); hg.add(sk); const sn = new THREE.Mesh(new RoundedBoxGeometry(.3, .2, .42, 4, .08), skin); sn.position.set(0, .27, .25); sn.castShadow = true; hg.add(sn);
    for (const x of [-.06, .06]) { const n2 = sph(.022, dark, 8, 6); n2.position.set(x, .33, .46); hg.add(n2); }
    for (const x of [-.13, .13]) { const br = new THREE.Mesh(new RoundedBoxGeometry(.16, .06, .14, 2, .025), skinDark); br.position.set(x, .58, .17); br.rotation.z = -x * 2.4; hg.add(br); }
    for (let k = 0; k < 4; k++) { const sp = cone(.04, .12, bone, 6); sp.position.set(0, .64 - k * .05, -.08 - k * .1); sp.rotation.x = -.5 - k * .25; hg.add(sp); } }
  else if (spec.head === 'alien') { const pts = [[0, 0], [.1, .02], [.2, .12], [.3, .35], [.32, .55], [.27, .75], [.15, .86], [0, .88]].map(p => new THREE.Vector2(p[0], p[1])); const b = new THREE.Mesh(new THREE.LatheGeometry(new THREE.SplineCurve(pts).getPoints(20), 32), skin); b.scale.z = .95; b.castShadow = true; hg.add(b); }
  else if (spec.head === 'bat') { const b = sph(.34, skin, 28, 20); b.position.y = .34; hg.add(b); for (const x of [-1, 1]) { const ear = cone(.12, .34, skin, 12); ear.position.set(x * .2, .55, -.02); ear.rotation.z = -x * .45; ear.scale.z = .45; hg.add(ear); const inner = cone(.07, .24, new THREE.MeshStandardMaterial({ color: '#d98a9a', roughness: .7 }), 10); inner.position.set(x * .205, .57, .02); inner.rotation.z = -x * .45; inner.scale.z = .25; hg.add(inner); }
    const nose = sph(.07, skinDark, 14, 10); nose.scale.set(1.3, .8, .9); nose.position.set(0, .32, .32); hg.add(nose); }
  else { const b = sph(.37, skin, 32, 24); b.position.y = .34; hg.add(b); }
  // --- eyes ---
  const eg = new THREE.Group(); head.add(eg); M.parts.eyes = eg; const es = H.eyeS || 1;
  let ep = []; const w = H.eyeW, y = H.eyeY;
  if (spec.eyes === 'two') ep = [[-w, y, .085], [w, y, .085]]; else if (spec.eyes === 'cyclops') ep = [[0, y + .02, .14]]; else if (spec.eyes === 'three') ep = [[-w, y - .01, .072], [w, y - .01, .072], [0, y + .13, .065]];
  else if (spec.eyes === 'many') ep = [[-w * 1.05, y - .02, .055], [w * 1.05, y - .02, .055], [0, y + .04, .06], [-w * .6, y + .15, .045], [w * .6, y + .15, .045], [0, y + .2, .04]];
  if (spec.eyes === 'stalks') { for (const s of [-1, 1]) { const base = new THREE.Group(); base.position.set(s * (H.hornX * .8 + .04), H.top - .06, H.hornZ + .02); base.rotation.z = -s * .35; base.rotation.x = .25; eg.add(base); const st = seg(.32, .035, .03, skin); st.rotation.x = Math.PI; base.add(st); const ey = mkEye(.08 * es); ey.g.position.y = .34; base.add(ey.g); ey.stalk = base; M.eyes.push(ey); } }
  else for (const [x, yy, rr] of ep) { const r2 = rr * es; const ey = mkEye(r2); const z = frontZ(H, x, yy); ey.g.position.set(x, yy, z - r2 * .45); eg.add(ey.g); M.eyes.push(ey); }
  function mkEye(r) { const g = new THREE.Group(); const sc = sph(r, sclera, 18, 14); g.add(sc); const ir = sph(r * .62, irisM, 16, 12); ir.scale.z = .45; ir.position.z = r * .7; g.add(ir); const pu = sph(r * .28, pupilM, 12, 8); pu.scale.z = .4; pu.position.z = r * .94; g.add(pu);
    const lid = new THREE.Mesh(new THREE.SphereGeometry(r * 1.12, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), skin); g.add(lid); const lo = new THREE.Mesh(new THREE.SphereGeometry(r * 1.1, 18, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), skin); lo.rotation.x = -.35; g.add(lo); return { g, lid, r }; }
  // --- mouth ---
  const mg = new THREE.Group(); const mz = H.mouthZ || frontZ(H, 0, H.mouthY); mg.position.set(0, H.mouthY, mz - .02); head.add(mg); M.parts.mouth = mg; M.mouth = { kind: spec.mouth, g: mg };
  { const mw = H.mouthW; const cav = sph(1, dark, 20, 12); cav.scale.set(mw / 2, .03, .06); mg.add(cav); M.mouth.cav = cav; M.mouth.w = mw; const top = new THREE.Group(), bot = new THREE.Group(); mg.add(top, bot); M.mouth.top = top; M.mouth.bot = bot;
    if (spec.mouth === 'grin') { for (let k = 0; k < 7; k++) { const x = (k / 6 - .5) * mw * .82; const t = cone(.022, .05, tooth, 6); t.rotation.x = Math.PI; t.position.set(x, .012, .035 - Math.abs(x) * .25); top.add(t); const b = cone(.02, .045, tooth, 6); b.position.set(x, -.012, .03 - Math.abs(x) * .25); bot.add(b); } }
    else if (spec.mouth === 'fangs') { for (const x of [-mw * .28, mw * .28]) { const f = cone(.03, .13, tooth, 8); f.rotation.x = Math.PI; f.position.set(x, .02, .04); top.add(f); } for (let k = 0; k < 4; k++) { const b = cone(.016, .03, tooth, 5); b.position.set((k / 3 - .5) * mw * .4, -.01, .04); bot.add(b); } }
    else if (spec.mouth === 'tusks') { for (const s of [-1, 1]) { const t = hornCurve([V(s * mw * .38, -.02, .03), V(s * mw * .46, .06, .09), V(s * mw * .5, .16, .1)], .045, tooth, 12); bot.add(t); } }
    else if (spec.mouth === 'stitched') { for (let k = 0; k < 6; k++) { const s2 = new THREE.Mesh(new THREE.BoxGeometry(.012, .08, .012), dark); s2.position.set((k / 5 - .5) * mw * .85, 0, .055); top.add(s2); } const ln = new THREE.Mesh(new THREE.BoxGeometry(mw * .95, .012, .012), dark); ln.position.z = .05; top.add(ln); }
    else if (spec.mouth === 'beak') { cav.visible = false; const bm = new THREE.MeshStandardMaterial({ color: '#e8b13a', roughness: .4 }); const up = cone(.11, .26, bm, 14); up.rotation.x = Math.PI / 2; up.scale.set(1.2, 1, .6); up.position.set(0, .03, .0); top.add(up); const lo2 = cone(.09, .2, bm, 12); lo2.rotation.x = Math.PI / 2; lo2.scale.set(1.1, 1, .45); lo2.position.set(0, -.02, -.01); bot.add(lo2); }
    else if (spec.mouth === 'jaw') { const j = new THREE.Mesh(new RoundedBoxGeometry(mw * 1.1, .09, .16, 3, .035), skinDark); j.position.set(0, -.04, .04); bot.add(j); for (const x of [-mw * .38, mw * .38]) { const t = cone(.03, .1, tooth, 7); t.position.set(x, -.01, .1); bot.add(t); } for (let k = 0; k < 5; k++) { const t = cone(.018, .04, tooth, 5); t.rotation.x = Math.PI; t.position.set((k / 4 - .5) * mw * .7, .02, .05); top.add(t); } } }
  // --- horns ---
  const hrn = new THREE.Group(); head.add(hrn); M.parts.horns = hrn; const ty = H.top - .04, hx = H.hornX, hz = H.hornZ;
  if (spec.horns === 'devil') for (const s of [-1, 1]) hrn.add(hornCurve([V(s * hx, ty - .05, hz), V(s * (hx + .07), ty + .12, hz + .02), V(s * (hx + .04), ty + .28, hz - .02)], .07, hornM, 16));
  else if (spec.horns === 'ram') for (const s of [-1, 1]) { const pts = []; for (let k = 0; k <= 12; k++) { const a = k / 12 * Math.PI * 1.6; const rr = .16 * (1 - k / 22); pts.push(V(s * (hx + .06 + Math.sin(a) * .02 + k * .004), ty - .1 + Math.cos(a) * rr * .2 + Math.sin(a) * rr * .9, hz - .05 - (1 - Math.cos(a)) * rr * .8 + .1)); } hrn.add(hornCurve(pts, .075, hornM, 30)); }
  else if (spec.horns === 'antennae') for (const s of [-1, 1]) { const g = new THREE.Group(); g.position.set(s * hx * .7, ty - .02, hz); hrn.add(g); const st = seg(.34, .015, .012, iron); st.rotation.z = Math.PI - s * .3; g.add(st); const ball = sph(.05, new THREE.MeshStandardMaterial({ color: eyeCol, emissive: eyeCol, emissiveIntensity: 0, roughness: .3 }), 14, 10); ball.position.set(s * .1, .33, 0); g.add(ball); M.ants.push({ g, s, ball }); }
  else if (spec.horns === 'unicorn') { const g = new THREE.ConeGeometry(.06, .4, 16, 8); const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const yy = p.getY(i) + .2, a = yy * 40; const rr = 1 + .12 * Math.sin(Math.atan2(p.getZ(i), p.getX(i)) * 2 + a); p.setX(i, p.getX(i) * rr); p.setZ(i, p.getZ(i) * rr); } g.computeVertexNormals(); g.translate(0, .2, 0); const u = new THREE.Mesh(g, hornM); u.position.set(0, ty - .06, hz + (H.boxZ ? .14 : .12)); u.rotation.x = .45; u.castShadow = true; hrn.add(u); }
  else if (spec.horns === 'antlers') for (const s of [-1, 1]) { hrn.add(hornCurve([V(s * hx, ty - .04, hz), V(s * (hx + .1), ty + .14, hz), V(s * (hx + .26), ty + .3, hz - .04)], .04, hornM, 14)); hrn.add(hornCurve([V(s * (hx + .1), ty + .13, hz), V(s * (hx + .08), ty + .3, hz + .06)], .026, hornM, 8)); hrn.add(hornCurve([V(s * (hx + .19), ty + .23, hz - .02), V(s * (hx + .2), ty + .38, hz + .02)], .022, hornM, 8)); }
  // --- arms ---
  const ag = new THREE.Group(); torso.add(ag); M.parts.arms = ag; const AR = spec.arms;
  for (const s of [-1, 1]) { const sh = new THREE.Group(); sh.position.set(s * B.sh[0], B.sh[1], B.sh[2]); ag.add(sh); const arm = { s, sh, kind: AR, chain: [] };
    if (AR === 'tentacles') { let parent = sh; for (let k = 0; k < 8; k++) { const j = new THREE.Group(); if (k) j.position.y = -.11; parent.add(j); const m = seg(.13, .085 - k * .008, .08 - k * .008, skin); j.add(m); if (k % 2 === 0 && k < 7) { const sc = sph(.018, skinDark, 6, 4); sc.position.set(0, -.06, .06 - k * .004); j.add(sc); } arm.chain.push(j); parent = j; } }
    else { const L = AR === 'muscle' ? [.36, .36, .14, .12] : AR === 'stubby' ? [.15, .13, .1, .09] : AR === 'pincers' ? [.34, .32, .06, .05] : [.36, .35, .075, .065];
      sh.add(seg(L[0], L[2], L[2] * .9, skin)); const el = new THREE.Group(); el.position.y = -L[0] + L[2] * .4; sh.add(el); el.add(seg(L[1], L[3], L[3] * .85, skin)); const hand = new THREE.Group(); hand.position.y = -L[1] + L[3] * .3; el.add(hand); arm.el = el; arm.hand = hand;
      if (AR === 'muscle') { const f = sph(.15, skin, 18, 14); f.position.y = -.08; hand.add(f); for (let k = 0; k < 3; k++) { const kn = sph(.045, skinDark, 8, 6); kn.position.set((k - 1) * .07, -.14, .1); hand.add(kn); } }
      else if (AR === 'stubby') { const f = sph(.1, skin, 16, 12); f.scale.set(1, .85, 1); f.position.y = -.05; hand.add(f); }
      else if (AR === 'claws') { const p = sph(.07, skin, 12, 10); p.position.y = -.03; hand.add(p); for (let k = 0; k < 3; k++) { const c = cone(.022, .15, bone, 6); c.position.set((k - 1) * .045, -.06, .03); c.rotation.x = Math.PI + .5; c.rotation.z = (k - 1) * .2; hand.add(c); } }
      else { const cm = skinDark; const up = new THREE.Mesh(new THREE.SphereGeometry(.12, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), cm); up.scale.set(.6, 1.6, 1); up.rotation.z = Math.PI / 2 * s * 0; up.position.y = -.1; hand.add(up);
        const jaw = new THREE.Group(); jaw.position.y = -.06; hand.add(jaw); const lo = new THREE.Mesh(new THREE.SphereGeometry(.1, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), cm); lo.scale.set(.55, 1.5, .9); lo.position.y = -.05; jaw.add(lo); arm.pin = jaw;
        const ph = sph(.1, cm, 14, 10); ph.scale.set(.9, 1.15, .8); hand.add(ph); } }
    M.arms.push(arm); }
  // --- legs ---
  const lg = new THREE.Group(); hips.add(lg); M.parts.legs = lg; const LK = spec.legs;
  if (LK === 'spider') { for (const s of [-1, 1]) for (let k = 0; k < 3; k++) { const root = new THREE.Group(); root.position.set(s * .26, .14, (k - 1) * .3 - .05); const be = (k - 1) * .6; root.rotation.y = s > 0 ? -be : Math.PI + be; lg.add(root);
      const yaw = new THREE.Group(); root.add(yaw); const a = new THREE.Group(); yaw.add(a); a.add(segX(.48, .06, .05, skinDark)); const b = new THREE.Group(); b.position.x = .46; a.add(b); b.add(segX(.7, .05, .025, skinDark)); const tip = cone(.026, .08, bone, 6); tip.position.x = .7; tip.rotation.z = -Math.PI / 2; b.add(tip);
      M.legs.push({ kind: 'spider', s, k, root, a, b, ph: (k + (s > 0 ? 1 : 0)) % 2 * .5 }); } }
  else if (LK === 'tentacle') { const skirt = sph(.42, skin, 24, 12); skirt.scale.set(1, .55, 1); skirt.position.y = .02; lg.add(skirt); for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2 + .2; const root = new THREE.Group(); root.position.set(Math.sin(a) * .3, -.05, Math.cos(a) * .3); root.rotation.y = a; lg.add(root); const ch = []; let parent = root;
      for (let i = 0; i < 6; i++) { const j = new THREE.Group(); if (i) j.position.z = .12; parent.add(j); const m = segZ(.14, .085 - i * .011, .075 - i * .011, skin); j.add(m); ch.push(j); parent = j; } M.legs.push({ kind: 'tentacle', a, root, ch, k }); } }
  else { const D = LEGS[LK]; for (const s of [-1, 1]) { const hip = new THREE.Group(); hip.position.set(s * B.legX, .06, 0); lg.add(hip); hip.add(seg(D.a + D.r * .4, D.r, D.r * .85, skin)); const knee = new THREE.Group(); knee.position.y = -D.a; hip.add(knee); knee.add(seg(D.b + D.r * .3, D.r * .85, D.r * .7, LK === 'chicken' ? new THREE.MeshStandardMaterial({ color: '#d9a43a', roughness: .5 }) : skin)); const foot = new THREE.Group(); foot.position.y = -D.b; knee.add(foot);
      if (LK === 'stompers') { const f = new THREE.Mesh(new RoundedBoxGeometry(.28, .13, .38, 3, .05), skin); f.position.set(0, -.02, .07); f.castShadow = true; foot.add(f); for (let k = 0; k < 3; k++) { const c = cone(.03, .08, bone, 6); c.rotation.x = Math.PI / 2; c.position.set((k - 1) * .08, -.04, .25); foot.add(c); } }
      else if (LK === 'chicken') { const fm = new THREE.MeshStandardMaterial({ color: '#d9a43a', roughness: .5 }); for (let k = 0; k < 3; k++) { const t = segZ(.2, .025, .015, fm); t.position.y = -.02; t.rotation.y = (k - 1) * .5; foot.add(t); const cl = cone(.016, .05, bone, 5); cl.rotation.x = Math.PI / 2; cl.position.set(Math.sin((k - 1) * .5) * .2, -.02, Math.cos((k - 1) * .5) * .2); foot.add(cl); } const back = segZ(.1, .02, .012, fm); back.rotation.y = Math.PI; back.position.y = -.02; foot.add(back); }
      else { const f = sph(.12, skin, 16, 12); f.scale.set(1, .6, 1.25); f.position.set(0, -.03, .04); foot.add(f); }
      M.legs.push({ kind: 'biped', s, hip, knee, foot, D }); } }
  // --- tail ---
  const tl = new THREE.Group(); tl.position.set(...B.tail); torso.add(tl); M.parts.tail = tl; const TK = spec.tail;
  if (TK !== 'none') { let parent = tl; const n = TK === 'fluffy' ? 4 : TK === 'scorpion' ? 9 : TK === 'devil' ? 10 : 8;
    for (let i = 0; i < n; i++) { const j = new THREE.Group(); if (i) j.position.z = TK === 'fluffy' ? -.15 : TK === 'devil' ? -.09 : -.11; parent.add(j); let m;
      if (TK === 'fluffy') { m = sph(.13 + i * .02, skin, 14, 10); m.position.z = -.08; } else if (TK === 'devil') m = segZ(.1, .035, .03, skin, -1); else if (TK === 'scorpion') m = segZ(.12, .085 - i * .005, .075 - i * .005, skinDark, -1); else m = segZ(.12, .12 - i * .013, .105 - i * .013, skin, -1);
      j.add(m); M.tail.push(j); parent = j; }
    if (TK === 'devil') { const sp = new THREE.Mesh(new THREE.ConeGeometry(.08, .16, 4), skinDark); sp.rotation.x = -Math.PI / 2; sp.scale.set(1.3, 1, .35); sp.position.z = -.16; parent.add(sp); }
    if (TK === 'scorpion') { const st = cone(.05, .16, bone, 8); st.rotation.x = -Math.PI / 2 - .6; st.position.z = -.12; parent.add(st); } }
  // --- wings ---
  const wg = new THREE.Group(); torso.add(wg); M.parts.wings = wg; const WK = spec.wings;
  if (WK !== 'none') for (const s of [-1, 1]) { const root = new THREE.Group(); root.position.set(s * B.wing[0], B.wing[1], B.wing[2]); wg.add(root); const flap = new THREE.Group(); root.add(flap); const inner = new THREE.Group(); inner.scale.x = s; flap.add(inner);
    if (WK === 'bug') { const wm = new THREE.MeshPhysicalMaterial({ color: '#bfe8ff', transparent: true, opacity: .42, roughness: .15, iridescence: 1, iridescenceIOR: 1.6, side: THREE.DoubleSide, depthWrite: false });
      for (const [yy, sc, rot] of [[.08, 1, .25], [-.08, .75, -.25]]) { const e = new THREE.Mesh(new THREE.CircleGeometry(.3, 24), wm); e.scale.set(1.25 * sc, .42 * sc, 1); e.position.set(.36 * sc, yy, 0); e.rotation.z = rot; inner.add(e); } }
    else { const sh = wingShape(WK); const m = new THREE.Mesh(new THREE.ShapeGeometry(sh, 16), WK === 'tiny' ? new THREE.MeshStandardMaterial({ color: '#f4f0ff', roughness: .7, side: THREE.DoubleSide }) : skinDark); m.castShadow = true; inner.add(m);
      if (WK !== 'tiny') { const k = WK === 'dragon' ? 1.45 : 1; for (const [x, y2] of [[.9, .42], [.82, -.22], [.5, -.28], [.2, -.3]]) { const len = Math.hypot(x * k - .35 * k * (x > .6 ? 1 : 0), y2 * k); const bn = new THREE.Mesh(new THREE.CylinderGeometry(.014, .02, 1, 6), bone); const a2 = new THREE.Vector3(.35 * k, .32 * k, 0), b2 = new THREE.Vector3(x * k, y2 * k, 0); if (x < .6) a2.set(0, 0, 0); bn.position.copy(a2).lerp(b2, .5); bn.scale.y = a2.distanceTo(b2); bn.lookAt(inner.localToWorld(b2.clone())); bn.quaternion.setFromUnitVectors(V(0, 1, 0), b2.clone().sub(a2).normalize()); inner.add(bn); }
        const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(.025, .03, 1, 6), bone); const b3 = V(.35 * k, .32 * k, 0); arm2.position.copy(b3).multiplyScalar(.5); arm2.scale.y = b3.length(); arm2.quaternion.setFromUnitVectors(V(0, 1, 0), b3.clone().normalize()); inner.add(arm2); } }
    M.wings.push({ s, root, flap, kind: WK }); }
  M.root.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  // overall height for framing
  M.headTop = LG.hipY + B.neck[1] + H.top + (spec.horns !== 'none' ? .25 : 0); M.headY = LG.hipY + B.neck[1] + .35; M.chestY = LG.hipY + B.sh[1];
  M.size = Math.max(1.6, M.headTop);
  return M;
}
function segX(len, r0, r1, mat) { const m = seg(len, r0, r1, mat); m.rotation.z = Math.PI / 2; m.position.x = 0; const g = new THREE.Group(); m.position.set(len / 2, 0, 0); m.geometry.translate(0, len / 2, 0); m.rotation.z = -Math.PI / 2; g.add(m); return g; }
function segZ(len, r0, r1, mat, dir = 1) { const m = seg(len, r0, r1, mat); m.geometry.translate(0, len / 2, 0); m.rotation.x = dir * Math.PI / 2; m.position.z = dir * len / 2; const g = new THREE.Group(); g.add(m); return g; }
export function disposeMonster(M) { M.root.traverse(o => { if (o.geometry) o.geometry.dispose(); }); for (const k in M.mats) M.mats[k].dispose(); if (M.root.parent) M.root.parent.remove(M.root); }

// ---------------- procedural animation ----------------
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, k) => a + (b - a) * k, sm = x => x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x);
const env = p => Math.sin(Math.PI * clamp(p, 0, 1));
const _w = new THREE.Vector3(), _m = new THREE.Matrix4();
function solve2(a, b, fz, h, dig) { const d = clamp(Math.hypot(fz, h), .05, a + b - .002); const th = Math.atan2(fz, h);
  const k1 = Math.acos(clamp((a * a + d * d - b * b) / (2 * a * d), -1, 1)), kn = Math.PI - Math.acos(clamp((a * a + b * b - d * d) / (2 * a * b), -1, 1));
  return dig ? [-th + k1, -kn] : [-th - k1, kn]; }
// P: { life 0..1, act, actP 0..1, dir, inhale 0..1, open 0..1, twitch 0..1, look (world Vector3), walk 0..1 }
export function animateMonster(M, t, dt, P) {
  const A = M.anim, life = clamp(Number.isFinite(P.life) ? P.life : 1, 0, 1), dead = 1 - life; A.t = t; const s = M.spec;
  const act = P.act, p = clamp(P.actP || 0, 0, 1), e = env(p); const inh = clamp(P.inhale || 0, 0, 1);
  const tw = Number.isFinite(P.twitch) ? P.twitch : 0, J = k => tw * (Math.sin(t * 37 + k * 9.1) * .6 + Math.sin(t * 23 + k * 4.7) * .4);
  const br = Math.sin(t * 2.2) * .5 + .5;
  // ---- whole-body offsets ----
  let hipDY = life * (br * .012), hipX = 0, lean = dead * .2 - life * .02 - inh * .16, roll = dead * .06, yaw = A.yaw || 0, jump = 0, squat = 0;
  let armAb = lerp(.1, .32 + Math.sin(t * 1.3) * .05, life) + inh * .45, armFw = lerp(.06, -.18, life), armEl = lerp(.12, .55, life), armAbR = 0, armFwR = 0, armElR = 0, pinch = life * (.15 + .1 * Math.sin(t * 2.4));
  let hdP = dead * .32 - inh * .32, hdY = dead * .12, hdR = dead * .22, open = (P.open || 0) * 1, chest = 1 + inh * .07 + life * br * .012;
  let wingOpen = life * .45 + inh * .4, wingFlap = life * Math.sin(t * 2.6) * .14, tailUp = lerp(-.35, .12, life), tailWag = life * Math.sin(t * 2.3) * .35;
  let stepL = 0, stepR = 0;
  if (act === 'roar') { const a1 = sm(p / .25); lean += -.18 * (1 - a1) * (p < .25 ? 1 : 0) + .16 * e * (p > .2 ? 1 : 0); hdP += -.35 * env(p / .35) * (p < .35 ? 1 : 0) + .22 * e * (p > .3 ? 1 : 0); armAb += 1.05 * e; armFw += -.55 * e; armEl -= .25 * e; open = Math.max(open, sm(p / .15) * (1 - sm((p - .8) / .2))); wingOpen += .7 * e; wingFlap += Math.sin(t * 18) * .25 * e; tailUp += .5 * e; chest += .06 * e; }
  else if (act === 'lunge') { const k = sm(p / .3) * (1 - sm((p - .65) / .35)); yaw = (P.dir || 0) * k; lean += .38 * k; armFw += -1.25 * k; armAb -= .1 * k; armEl -= .3 * k; open = Math.max(open, k); hdP -= .15 * k; stepL = stepR = .18 * k; wingOpen += .6 * k; tailUp += .4 * k; }
  else if (act === 'left' || act === 'right') { const d = act === 'left' ? -1 : 1; hipX = d * .22 * e; roll += -d * .22 * e; hdR += d * .25 * e; if (d < 0) { armAb += .9 * e; armAbR += -.1 * e; armFwR += -.5 * e; } else { armAbR += .9 * e; armAb += -.1 * e; armFw += -.5 * e; } (d < 0 ? stepL = 0 : stepR = 0); tailWag += -d * .6 * e; }
  else if (act === 'up') { jump = .34 * env(clamp((p - .15) / .7, 0, 1)); squat = .12 * env(p / .2) * (p < .2 ? 1 : 0); armAb += 2.3 * e; armEl -= .4 * e; hdP -= .25 * e; open = Math.max(open, .6 * e); wingOpen += .9 * e; wingFlap += Math.sin(t * 20) * .35 * e; }
  else if (act === 'down') { squat = .2 * e; lean += .22 * e; armAb += .8 * e; armFw += -.3 * e; hdP += .35 * e; tailUp -= .3 * e; }
  else if (act === 'spin') { yaw = Math.PI * 2 * sm(p); armAb += 1.1 * e; jump = .1 * e; tailUp += .4 * e; }
  else if (act === 'cheer') { jump = .15 * Math.abs(Math.sin(p * Math.PI * 3)); armAb += 2.2 * sm(p / .2); armEl -= .2; open = Math.max(open, .5 * e); hdP -= .2 * e; wingOpen += .6 * e; wingFlap += Math.sin(t * 16) * .2 * e; }
  else if (act === 'sad') { lean += .25 * e; hdP += .45 * e; armAb -= .15 * e; armFw += .1 * e; tailUp -= .3 * e; wingOpen -= .3 * e; }
  else if (act === 'flinch') { lean += -.25 * e; hdP += -.2 * e; hdY += Math.sin(p * 30) * .2 * e; armFw += -.8 * e; armAb += .3 * e; }
  else if (act === 'walk') { const ph = t * 6.5; stepL = Math.sin(ph) * .22; stepR = -stepL; hipDY += Math.abs(Math.cos(ph)) * .04; armFw += Math.sin(ph) * .3; armFwR = -Math.sin(ph) * .3 - armFw + armFw; roll += Math.sin(ph) * .05; }
  if (P.walk) { const ph = t * 6.5; stepL = Math.sin(ph) * .22 * P.walk; stepR = -stepL; hipDY += Math.abs(Math.cos(ph)) * .04 * P.walk; }
  A.yaw = act === 'lunge' || act === 'spin' ? A.yaw : (A.yaw || 0) * Math.exp(-dt * 6);
  // ---- apply ----
  M.rig.rotation.y = act === 'lunge' || act === 'spin' ? yaw : A.yaw;
  M.rig.position.set(hipX * .4, 0, act === 'lunge' ? .25 * sm(p / .3) * (1 - sm((p - .65) / .35)) : 0);
  const hy = M.hipY + hipDY + jump - squat; M.hips.position.set(hipX, hy, 0);
  M.torso.rotation.set(lean + J(1) * .15, J(2) * .1, roll + J(3) * .15); M.parts.body.scale.set(chest, chest, chest);
  // head look-at (alive): yaw/pitch toward P.look in rig space
  if (P.look) { _w.copy(P.look); M.neck.updateWorldMatrix(true, false); _m.copy(M.neck.matrixWorld).invert(); _w.applyMatrix4(_m); const ly = clamp(Math.atan2(_w.x, _w.z), -.8, .8), lp = clamp(-Math.atan2(_w.y - .3, Math.hypot(_w.x, _w.z)), -.5, .5);
    A.ly = lerp(A.ly || 0, ly, 1 - Math.exp(-dt * 4)); A.lp = lerp(A.lp || 0, lp, 1 - Math.exp(-dt * 4)); hdY += A.ly * life * .8; hdP += A.lp * life * .6; }
  M.head.rotation.set(hdP + J(4) * .3, hdY + J(5) * .3, hdR + J(6) * .2);
  // eyes: blink, glow, follow
  A.nextBlink -= dt; if (A.nextBlink <= 0) { A.blink = 1; A.nextBlink = 2.5 + Math.random() * 3; } A.blink = Math.max(0, A.blink - dt * 7);
  const lidC = clamp(dead + (A.blink > 0 ? env(1 - A.blink) : 0) - inh * .2 + (act === 'roar' ? -.3 * e : 0), 0, 1);
  for (const ey of M.eyes) { ey.lid.rotation.x = lerp(-.5, 1.35, lidC); ey.g.rotation.set((A.lp || 0) * .4 * life, (A.ly || 0) * .5 * life, 0); if (ey.stalk) { ey.stalk.rotation.x = .25 + Math.sin(t * 2 + ey.r) * .12 * life + dead * .9; } }
  M.mats.irisM.emissiveIntensity = life * (1.6 + (act === 'roar' ? 1.2 * e : 0)) + tw * 2;
  for (const a of M.ants) { a.g.rotation.z = a.s * (Math.sin(t * 3 + a.s) * .15 * life) + dead * a.s * .9; a.g.rotation.x = Math.sin(t * 4.1 + a.s) * .1 * life + dead * .3; a.ball.material.emissiveIntensity = life * 1.5; }
  if (M.mats.skin.emissiveMap) M.mats.skin.emissiveIntensity = life * (.9 + .35 * Math.sin(t * 3)) + tw * 1.5;
  // mouth
  const mo = clamp(open + life * .06 * Math.max(0, Math.sin(t * .9)), 0, 1); const mh = M.mouth.kind === 'stitched' ? .02 + mo * .08 : .025 + mo * .13;
  M.mouth.cav.scale.set(M.mouth.w / 2 * (1 + mo * .15), mh, .06 + mo * .04); M.mouth.bot.position.y = -mh * .9; M.mouth.top.position.y = mh * .25; if (M.mouth.kind === 'beak') { M.mouth.bot.rotation.x = mo * .5; M.mouth.bot.position.y = 0; }
  if (M.mouth.kind === 'jaw' || M.mouth.kind === 'tusks') M.mouth.bot.rotation.x = mo * .25;
  // arms
  for (const a of M.arms) { const R = a.s > 0; const ab = armAb + (R ? armAbR : 0) + J(7 + a.s) * .4, fw = armFw + (R ? armFwR : 0) + (life * Math.sin(t * 1.7 + a.s) * .05), el = armEl + (R ? armElR : 0);
    if (a.kind === 'tentacles') { a.sh.rotation.set(fw * .8, 0, a.s * (ab * .9 + .1)); a.chain.forEach((j, i) => { if (!i) return; j.rotation.x = -(.08 + el * .18) - life * Math.sin(t * 3 - i * .7 + a.s) * .16 - dead * .02; j.rotation.z = a.s * (life * Math.cos(t * 2.4 - i * .6) * .12 + dead * .05); }); }
    else { a.sh.rotation.set(fw, 0, a.s * ab); a.el.rotation.set(-el, 0, 0); if (a.pin) a.pin.rotation.x = pinch + (act === 'lunge' ? .5 * e : 0); if (a.hand) a.hand.rotation.set(-.1 * life, 0, 0); } }
  // legs
  for (const L of M.legs) {
    if (L.kind === 'biped') { const D = L.D; const step = L.s < 0 ? stepL : stepR; const footH = s.legs === 'stompers' ? .09 : s.legs === 'stubby' ? .1 : .04; const h = Math.max(.05, hy + .06 - footH);
      const [ha, ka] = solve2(D.a, D.b, step, h, D.dig); L.hip.rotation.set(ha, 0, L.s * (.03 + dead * .03)); L.knee.rotation.x = ka; L.foot.rotation.x = -(ha + ka); }
    else if (L.kind === 'spider') { const ph = t * (P.walk || act === 'walk' ? 7 : 1.4) + L.ph * Math.PI * 2; const lift = (P.walk || act === 'walk') ? Math.max(0, Math.sin(ph)) * .12 : life * Math.max(0, Math.sin(ph)) * .015;
      const h = hy + .14 - lift, out = .78; const d = Math.hypot(out, h); const a = .48, b = .7; const k1 = Math.acos(clamp((a * a + d * d - b * b) / (2 * a * d), -1, 1)), kn = Math.acos(clamp((a * a + b * b - d * d) / (2 * a * b), -1, 1)); const th = Math.atan2(-h, out);
      L.a.rotation.z = th + k1; L.b.rotation.z = -(Math.PI - kn); }
    else { L.ch.forEach((j, i) => { j.rotation.x = (i === 0 ? .9 + dead * .1 : -.12) + life * Math.sin(t * 2.4 - i * .8 + L.k) * .12 * (i / 5); j.rotation.y = life * Math.sin(t * 1.7 + L.k * 2 - i * .5) * .08; }); }
  }
  // tail
  M.tail.forEach((j, i) => { const k = i / Math.max(1, M.tail.length - 1); if (s.tail === 'scorpion') { j.rotation.x = -(i ? .32 : -.3) * lerp(.2, 1, life) - (tailUp - .12) * .1; j.rotation.y = tailWag * .15 * (1 - k); }
    else if (s.tail === 'fluffy') { j.rotation.x = -(.3 + tailUp * .6) * (i ? .6 : 1) - (i ? .25 : -.6) * life; j.rotation.y = tailWag * .25; }
    else { j.rotation.x = i === 0 ? .6 - tailUp * 1.2 : (-.05 - tailUp * .25) + dead * .04; j.rotation.y = tailWag * (.25 + k * .2) * Math.sin(t * 2.3 - i * .5 + 1) + (i ? 0 : tailWag * .3); } });
  // wings
  for (const w of M.wings) { const o = clamp(wingOpen, 0, 1.4), fl = w.kind === 'bug' ? life * Math.sin(t * 40) * .25 + wingFlap : wingFlap;
    w.root.rotation.set(-.15, w.s * lerp(1.15, .3, clamp(o, 0, 1)), 0); w.flap.rotation.set(0, 0, w.s * (lerp(-.5, .3, clamp(o, 0, 1)) + fl)); }
}
// for order checks
export function has(spec, req) { const [k, v] = req.split(':');
  if (k === 'any') return spec[v] !== 'none'; if (k === 'tentacles') return spec.arms === 'tentacles' || spec.legs === 'tentacle';
  if (k === 'stat') { const st = stats(spec); return st[+v] >= .6; } return spec[k] === v; }
