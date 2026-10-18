// The mad-scientist lab at the top of a gothic tower: masonry walls, storm windows, two Tesla coils, a flask bench,
// jar shelves, a stone slab with straps, a lightning rod through the roof hatch, the big lever console, hanging lamps.
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { cv, tex, rnd, softTexture, smokeTexture, stoneTextures, flagTextures, woodTexture, copperCoilTexture, stormSkyCanvas, rainCanvas } from './tex.js';

export const QUALITY = {
  low: { dpr: 1, shadows: false, bloom: .7, parts: .45, dust: 60 },
  mid: { dpr: 1.25, shadows: true, shadowSize: 1024, bloom: 1, parts: .75, dust: 140 },
  high: { dpr: 1.6, shadows: true, shadowSize: 2048, bloom: 1, parts: 1, dust: 220 },
  ultra: { dpr: 2, shadows: true, shadowSize: 2048, bloom: 1, parts: 1.3, dust: 300 }
};
export const RR = 7.6, HH = 8.6, SLAB_Y = .62;
// villager entrances: left arch, back door, right arch (index = arrow lane: ←, ↑, →)
export const DOORS = [new THREE.Vector3(-7.25, 0, 1.1), new THREE.Vector3(0, 0, -7.2), new THREE.Vector3(7.25, 0, 1.1)];
const fin = v => Number.isFinite(v) ? v : 0;

function archShape(w, h) { const s = new THREE.Shape(); s.moveTo(-w / 2, 0); s.lineTo(-w / 2, h - w / 2); s.absarc(0, h - w / 2, w / 2, Math.PI, 0, true); s.lineTo(w / 2, 0); s.lineTo(-w / 2, 0); return s; }
function archFrame(w, h, t) { const s = archShape(w + t * 2, h + t); s.holes.push(new THREE.Path(archShape(w, h).getPoints(24).map(p => new THREE.Vector2(p.x, p.y)))); return s; }
// place an object on the inside of the tower wall at angle a (0 = towards the camera side, PI = back)
function onWall(o, a, r = RR - .04, y = 0) { o.position.set(Math.sin(a) * r, y, Math.cos(a) * r); o.rotation.y = a + Math.PI; return o; }

export function createLab(renderer, q, seed = 7) {
  const S = new THREE.Scene(); const r = rnd(seed);
  const L = { scene: S, soft: softTexture(), smokeTex: smokeTexture(), colliders: [], arcs: [], flasks: [], lamps: [], windows: [], doors: [], torches: [], shelves: [], t: 0, flash: 0, flicker: 0, charge: 0, lever: 0, strike: 0, disco: 0, beat: 0, hatch: 0, glassBroken: 0 };
  S.background = new THREE.Color('#07060d'); S.fog = new THREE.FogExp2('#0c0a16', .035);
  // ---- lights ----
  L.hemi = new THREE.HemisphereLight('#6d6aa8', '#1a1420', .55); S.add(L.hemi);
  L.key = new THREE.SpotLight('#ffd9a8', 46, 22, .62, .55, 1.6); L.key.position.set(-3.2, 7.4, 4.6); L.key.target.position.set(0, 1.2, 0); S.add(L.key, L.key.target);
  L.key.castShadow = true; L.key.shadow.bias = -.0004; L.key.shadow.normalBias = .02; L.key.shadow.camera.near = 2; L.key.shadow.camera.far = 20;
  L.rim = new THREE.DirectionalLight('#8fa6ff', .9); L.rim.position.set(1.5, 5, -8); S.add(L.rim);
  L.flashLight = new THREE.DirectionalLight('#c9d6ff', 0); L.flashLight.position.set(-2, 7, -9); S.add(L.flashLight);
  L.boltLight = new THREE.PointLight('#bcd2ff', 0, 12, 1.6); L.boltLight.position.set(0, 3.2, .3); S.add(L.boltLight);
  L.disco = new THREE.SpotLight('#ff5ad6', 0, 16, .5, .6, 1.2); L.disco.position.set(0, 7.8, 2.5); L.disco.target.position.set(0, 1, 0); S.add(L.disco, L.disco.target);
  // ---- floor / walls / ceiling ----
  const fl = flagTextures(seed); const floor = new THREE.Mesh(new THREE.CircleGeometry(RR, 72), new THREE.MeshStandardMaterial({ map: tex(fl.map, true, [3.4, 3.4]), normalMap: tex(fl.normal, false, [3.4, 3.4]), roughness: .82, metalness: .05 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; S.add(floor);
  { const [c, g] = cv(1024, 1024); g.translate(512, 512); g.strokeStyle = 'rgba(150,255,190,.55)'; g.lineWidth = 6; for (const rr of [470, 430, 250]) { g.beginPath(); g.arc(0, 0, rr, 0, 7); g.stroke(); }
    g.lineWidth = 4; g.beginPath(); for (let i = 0; i <= 5; i++) { const a = i * 4 * Math.PI / 5 - Math.PI / 2; g[i ? 'lineTo' : 'moveTo'](Math.cos(a) * 430, Math.sin(a) * 430); } g.stroke();
    g.font = '64px serif'; g.fillStyle = 'rgba(150,255,190,.5)'; g.textAlign = 'center'; const gl = '☿♄♃♂☉♀☽⚗'; for (let i = 0; i < 8; i++) { g.save(); g.rotate(i / 8 * Math.PI * 2); g.fillText(gl[i], 0, -330); g.restore(); }
    const t = tex(c); L.circle = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 4.4), new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: .16, depthWrite: false, blending: THREE.AdditiveBlending, color: '#7dffb0' })); L.circle.rotation.x = -Math.PI / 2; L.circle.position.y = .012; S.add(L.circle); }
  const st = stoneTextures(seed + 1); const wallMat = new THREE.MeshStandardMaterial({ map: tex(st.map, true, [7, 3.2]), normalMap: tex(st.normal, false, [7, 3.2]), roughness: .9, side: THREE.BackSide, color: '#b8b0c8' });
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(RR, RR, HH, 80, 1, true), wallMat); wall.position.y = HH / 2; wall.receiveShadow = true; S.add(wall);
  const woodC = woodTexture(seed + 3); const woodMat = new THREE.MeshStandardMaterial({ map: tex(woodC, true, [1, 1]), roughness: .75, color: '#c9b1a0' });
  const darkWood = new THREE.MeshStandardMaterial({ map: tex(woodTexture(seed + 4, [46, 30, 24]), true, [1, 1]), roughness: .8 });
  const ceil = new THREE.Mesh(new THREE.RingGeometry(1.15, RR, 64, 1), new THREE.MeshStandardMaterial({ color: '#141018', roughness: 1, side: THREE.DoubleSide })); ceil.rotation.x = Math.PI / 2; ceil.position.y = HH; S.add(ceil);
  for (let i = 0; i < 8; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(.3, .34, RR - 1.1), darkWood); const a = i / 8 * Math.PI * 2 + .2; b.position.set(Math.sin(a) * (RR + 1.1) / 2, HH - .2, Math.cos(a) * (RR + 1.1) / 2); b.rotation.y = a; S.add(b); }
  { const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, .09, 8, 40), darkWood); ring.rotation.x = Math.PI / 2; ring.position.y = HH - .2; S.add(ring); }
  // roof hatch with the storm sky, lightning enters here
  L.skyC = stormSkyCanvas(seed + 9, 256, 256); L.hatchMat = new THREE.MeshBasicMaterial({ map: tex(L.skyC), fog: false, color: '#8890b8' });
  { const h = new THREE.Mesh(new THREE.CircleGeometry(1.15, 40), L.hatchMat); h.rotation.x = Math.PI / 2; h.position.y = HH + .02; S.add(h); }
  // stone ring skirting at the floor
  { const sk = new THREE.Mesh(new THREE.CylinderGeometry(RR - .02, RR - .02, .35, 80, 1, true), new THREE.MeshStandardMaterial({ color: '#2a2532', roughness: .9, side: THREE.BackSide })); sk.position.y = .17; S.add(sk); }
  // ---- gothic windows (storm outside) ----
  const frameMat = new THREE.MeshStandardMaterial({ color: '#2b2633', roughness: .85 });
  const leadMat = new THREE.MeshStandardMaterial({ color: '#0d0c10', roughness: .6, metalness: .4 });
  const rainT = tex(rainCanvas(seed + 2), false, [1.2, 1.4]);
  for (const a of [Math.PI - .62, Math.PI + .62]) {
    const g = new THREE.Group(); onWall(g, a, RR - .03, 1.9); S.add(g);
    const w = 1.5, h = 3.6; const skyC = stormSkyCanvas(seed + 11 + a * 10); const skyMat = new THREE.MeshBasicMaterial({ map: tex(skyC), fog: false, color: '#9aa2c8' });
    const sky = new THREE.Mesh(new THREE.ShapeGeometry(archShape(w, h), 24), skyMat); fixUV(sky.geometry, w, h); g.add(sky);
    const [bc, bg] = cv(128, 256); const boltT = tex(bc); const boltM = new THREE.Mesh(new THREE.ShapeGeometry(archShape(w, h), 24), new THREE.MeshBasicMaterial({ map: boltT, transparent: true, opacity: 0, fog: false, blending: THREE.AdditiveBlending, depthWrite: false })); fixUV(boltM.geometry, w, h); boltM.position.z = .005; g.add(boltM);
    const rain = new THREE.Mesh(new THREE.ShapeGeometry(archShape(w, h), 24), new THREE.MeshBasicMaterial({ map: rainT, transparent: true, opacity: .55, fog: false, depthWrite: false })); fixUV(rain.geometry, w, h); rain.position.z = .01; g.add(rain);
    const fr = new THREE.Mesh(new THREE.ExtrudeGeometry(archFrame(w, h, .22), { depth: .32, bevelEnabled: true, bevelSize: .03, bevelThickness: .03, bevelSegments: 2, curveSegments: 20 }), frameMat); fr.position.z = -.12; g.add(fr);
    for (const x of [-.25, .25]) { const m = new THREE.Mesh(new THREE.BoxGeometry(.05, h - .2, .05), leadMat); m.position.set(x, (h - .2) / 2, .04); g.add(m); }
    for (let k = 1; k < 5; k++) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, .04, .05), leadMat); m.position.set(0, k * h / 5.2, .04); g.add(m); }
    const sill = new THREE.Mesh(new THREE.BoxGeometry(w + .6, .14, .5), frameMat); sill.position.set(0, -.07, .15); g.add(sill);
    L.windows.push({ g, skyMat, boltM, bc, bg, boltT, rain, flash: 0 });
  }
  // light shafts from the windows (very faint, additive)
  { const [c, g] = cv(64, 256); const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.2, 'rgba(255,255,255,.7)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 256);
    const gx = g.createLinearGradient(0, 0, 64, 0); gx.addColorStop(0, 'rgba(0,0,0,1)'); gx.addColorStop(.5, 'rgba(0,0,0,0)'); gx.addColorStop(1, 'rgba(0,0,0,1)'); g.globalCompositeOperation = 'destination-out'; g.fillStyle = gx; g.fillRect(0, 0, 64, 256);
    const t = tex(c); L.shafts = [];
    for (const w of L.windows) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 7), new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: .05, depthWrite: false, blending: THREE.AdditiveBlending, color: '#8a9cff', side: THREE.DoubleSide })); const p = w.g.position; m.position.set(p.x * .62, 2.6, p.z * .62); m.lookAt(0, 2.6, 0); m.rotateX(-.95); m.rotateY(Math.PI / 2); S.add(m); L.shafts.push(m); } }
  // ---- doors: left & right arches + the big back door ----
  for (const [i, a] of [[0, -Math.PI / 2 + .14], [1, Math.PI], [2, Math.PI / 2 - .14]]) {
    const g = new THREE.Group(); onWall(g, a, RR - .03, 0); S.add(g); const w = i === 1 ? 1.7 : 1.45, h = i === 1 ? 3.1 : 2.75;
    const dark = new THREE.Mesh(new THREE.ShapeGeometry(archShape(w, h), 20), new THREE.MeshBasicMaterial({ color: '#030205' })); dark.position.z = -.01; g.add(dark);
    const glowC = new THREE.Mesh(new THREE.ShapeGeometry(archShape(w, h), 20), new THREE.MeshBasicMaterial({ color: '#ff9a40', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })); glowC.position.z = 0; g.add(glowC);
    const fr = new THREE.Mesh(new THREE.ExtrudeGeometry(archFrame(w, h, .2), { depth: .3, bevelEnabled: false, curveSegments: 16 }), frameMat); fr.position.z = -.1; g.add(fr);
    // door leaf (hinged on the left), two planks + iron bands
    const hinge = new THREE.Group(); hinge.position.set(-w / 2, 0, .05); g.add(hinge);
    const leafG = new THREE.ShapeGeometry(archShape(w - .04, h - .02), 16); leafG.translate(w / 2, 0, 0); fixUV(leafG, w, h, w / 2);
    const leaf = new THREE.Mesh(leafG, new THREE.MeshStandardMaterial({ map: tex(woodTexture(seed + 20 + i, [64, 40, 28]), true, [1, 1]), roughness: .8, side: THREE.DoubleSide })); hinge.add(leaf);
    for (const y of [.5, h - 1.0]) { const b = new THREE.Mesh(new THREE.BoxGeometry(w - .1, .09, .04), leadMat); b.position.set(w / 2, y, .02); hinge.add(b); }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.09, .018, 6, 16), leadMat); ring.position.set(w - .25, 1.15, .06); hinge.add(ring);
    L.doors.push({ g, hinge, glow: glowC, open: 0, target: 0, pos: DOORS[i] });
  }
  // ---- wall torches (flame sprites, no extra lights) ----
  { const [c, g] = cv(64, 128); const gr = g.createRadialGradient(32, 84, 2, 32, 74, 50); gr.addColorStop(0, 'rgba(255,240,200,1)'); gr.addColorStop(.25, 'rgba(255,170,60,.9)'); gr.addColorStop(.6, 'rgba(220,70,20,.35)'); gr.addColorStop(1, 'rgba(120,20,0,0)'); g.fillStyle = gr; g.beginPath(); g.ellipse(32, 74, 24, 54, 0, 0, 7); g.fill(); L.flameT = tex(c);
    for (const a of [Math.PI - .28, Math.PI + .28, -1.05, 1.05]) { const tg = new THREE.Group(); onWall(tg, a, RR - .2, 2.5); S.add(tg);
      const br = new THREE.Mesh(new THREE.CylinderGeometry(.06, .035, .5, 8), leadMat); br.rotation.x = -.5; br.position.z = .12; tg.add(br);
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(.11, .06, .14, 10), leadMat); cup.position.set(0, .22, .26); tg.add(cup);
      const f = new THREE.Sprite(new THREE.SpriteMaterial({ map: L.flameT, color: '#ffffff', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); f.position.set(0, .45, .27); f.scale.set(.32, .62, 1); tg.add(f); L.torches.push(f); } }
  // ---- stone slab with iron straps (the monster stands on it) ----
  const stoneMat = new THREE.MeshStandardMaterial({ map: tex(st.map, true, [.5, .3]), normalMap: tex(st.normal, false, [.5, .3]), roughness: .7, color: '#9a94a8' });
  const ironMat = new THREE.MeshStandardMaterial({ color: '#2a2a30', roughness: .45, metalness: .8 });
  const copperMat = new THREE.MeshStandardMaterial({ color: '#c06a34', roughness: .32, metalness: .9 });
  { const slab = new THREE.Mesh(new THREE.BoxGeometry(2.3, .24, 1.7), stoneMat); slab.position.y = SLAB_Y - .12; slab.castShadow = slab.receiveShadow = true; S.add(slab); L.slab = slab;
    for (const x of [-.75, .75]) { const p = new THREE.Mesh(new THREE.BoxGeometry(.45, SLAB_Y - .24, 1.3), stoneMat); p.position.set(x, (SLAB_Y - .24) / 2, 0); p.castShadow = true; S.add(p); }
    for (const z of [-.5, .5]) { const s2 = new THREE.Mesh(new THREE.BoxGeometry(2.36, .05, .14), ironMat); s2.position.set(0, SLAB_Y + .005, z); S.add(s2); }
    for (const x of [-1.16, 1.16]) for (const z of [-.5, .5]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(.07, .018, 6, 14), ironMat); ring.position.set(x, SLAB_Y - .12, z); ring.rotation.y = Math.PI / 2; S.add(ring);
      const ch = new THREE.Group(); for (let k = 0; k < 5; k++) { const l = new THREE.Mesh(new THREE.TorusGeometry(.045, .012, 5, 10), ironMat); l.position.y = -k * .075; l.rotation.y = k % 2 ? Math.PI / 2 : 0; ch.add(l); } ch.position.set(x + Math.sign(x) * .03, SLAB_Y - .2, z); S.add(ch); }
    L.colliders.push({ p: new THREE.Vector3(0, .4, 0), r: 1.6 }); }
  // ---- lightning rod + conductor ring above the slab ----
  { const rod = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, HH - 4.7, 10), copperMat); rod.position.y = 4.7 + (HH - 4.7) / 2; S.add(rod);
    L.ringMat = new THREE.MeshStandardMaterial({ color: '#c06a34', roughness: .3, metalness: .9, emissive: '#6fa8ff', emissiveIntensity: 0 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.62, .06, 10, 40), L.ringMat); ring.rotation.x = Math.PI / 2; ring.position.y = 4.55; S.add(ring);
    for (let k = 0; k < 4; k++) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, .64, 6), copperMat); const a = k * Math.PI / 2; sp.position.set(Math.sin(a) * .31, 4.6, Math.cos(a) * .31); sp.rotation.z = Math.PI / 2; sp.rotation.y = a + Math.PI / 2; S.add(sp); }
    const tip = new THREE.Mesh(new THREE.ConeGeometry(.09, .3, 10), copperMat); tip.position.y = 4.42; tip.rotation.x = Math.PI; S.add(tip); L.rodTip = new THREE.Vector3(0, 4.3, 0); }
  // ---- Tesla coils ----
  const coilT = tex(copperCoilTexture(), true, [1, 1]); L.coils = [];
  for (const x of [-3.35, 3.35]) { const g = new THREE.Group(); g.position.set(x, 0, -3.25); S.add(g);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(.55, .62, .5, 20), ironMat); base.position.y = .25; base.castShadow = true; g.add(base);
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(.42, .42, .06, 20), copperMat); plate.position.y = .53; g.add(plate);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(.21, .21, 2.6, 24, 1, true), new THREE.MeshStandardMaterial({ map: coilT, roughness: .35, metalness: .85, emissive: '#3a6cff', emissiveIntensity: 0 })); col.position.y = 1.85; g.add(col);
    const core = new THREE.Mesh(new THREE.CylinderGeometry(.19, .19, 2.6, 12), new THREE.MeshStandardMaterial({ color: '#1b1410', roughness: .8 })); core.position.y = 1.85; g.add(core);
    const top = new THREE.Mesh(new THREE.TorusGeometry(.48, .17, 16, 40), new THREE.MeshStandardMaterial({ color: '#b9bcc8', roughness: .22, metalness: 1 })); top.rotation.x = Math.PI / 2; top.position.y = 3.3; g.add(top);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(.2, 16, 12), top.material); cap.position.y = 3.42; g.add(cap);
    const pl = new THREE.PointLight('#7f9bff', .0, 7, 1.8); pl.position.y = 3.3; g.add(pl);
    L.coils.push({ g, col, top: new THREE.Vector3(x, 3.3, -3.25), light: pl, next: 0 }); L.colliders.push({ p: new THREE.Vector3(x, 1.5, -3.25), r: .75 }); }
  // ---- lever console ----
  { const g = new THREE.Group(); g.position.set(2.75, 0, -1.25); g.rotation.y = -.55; S.add(g); L.console = g;
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.05, .62), darkWood); body.position.y = .52; body.castShadow = true; g.add(body);
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.2, .08, .7), ironMat); top.position.y = 1.08; g.add(top);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(1.0, .55, .06), ironMat); panel.position.set(0, 1.45, -.22); panel.rotation.x = -.2; g.add(panel);
    L.dials = []; for (const x of [-.28, .28]) { const d = new THREE.Mesh(new THREE.CircleGeometry(.15, 24), new THREE.MeshStandardMaterial({ color: '#e8dcc0', roughness: .6, emissive: '#3a2a10', emissiveIntensity: .3 })); d.position.set(x, 1.48, -.18); d.rotation.x = -.2; g.add(d);
      const nd = new THREE.Mesh(new THREE.BoxGeometry(.012, .12, .01), new THREE.MeshBasicMaterial({ color: '#a01010' })); nd.geometry.translate(0, .05, 0); nd.position.set(x, 1.47, -.17); nd.rotation.x = -.2; g.add(nd); L.dials.push(nd); }
    L.bulbs = []; for (let k = 0; k < 4; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(.045, 10, 8), new THREE.MeshStandardMaterial({ color: '#331', emissive: ['#ff5040', '#ffd040', '#60ff80', '#60c0ff'][k], emissiveIntensity: .3 })); b.position.set(-.36 + k * .24, 1.13, .2); g.add(b); L.bulbs.push(b); }
    const piv = new THREE.Group(); piv.position.set(.38, 1.12, .12); g.add(piv); L.leverPiv = piv;
    const mount = new THREE.Mesh(new THREE.BoxGeometry(.16, .12, .22), ironMat); mount.position.set(.38, 1.13, .12); g.add(mount);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(.03, .035, .75, 10), ironMat); arm.position.y = .37; piv.add(arm);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, .22, 14), new THREE.MeshStandardMaterial({ color: '#b01818', roughness: .4 })); grip.position.y = .78; piv.add(grip); L.grip = grip;
    L.colliders.push({ p: new THREE.Vector3(2.75, .8, -1.25), r: .8 }); }
  // ---- flask bench (bubbling, glowing liquids) ----
  const glassMat = new THREE.MeshPhysicalMaterial({ color: '#cfe8ff', roughness: .08, metalness: 0, transparent: true, opacity: .28, depthWrite: false, side: THREE.DoubleSide });
  const LIQ = ['#5dff6e', '#c06bff', '#ff8a2a', '#3ad8ff', '#ff4fa0', '#b8ff3a'];
  function flask(kind, h, col) { const g = new THREE.Group(); let pts;
    if (kind === 0) pts = [[0, 0], [.16, .01], [.22, .1], [.22, .22], [.15, .33], [.06, .38], [.05, h]];
    else if (kind === 1) pts = [[0, 0], [.2, 0], [.2, .02], [.07, .3], [.05, .32], [.05, h]];
    else pts = [[0, 0], [.07, 0], [.075, .02], [.075, h]];
    const lathe = new THREE.LatheGeometry(pts.map(p => new THREE.Vector2(p[0], p[1])), 20); const gl = new THREE.Mesh(lathe, glassMat); g.add(gl);
    const liqPts = pts.filter(p => p[1] < h * .55).map(p => new THREE.Vector2(Math.max(0, p[0] - .012), p[1] + .005)); liqPts.push(new THREE.Vector2(0, liqPts[liqPts.length - 1].y));
    const lm = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: .9, roughness: .3, transparent: true, opacity: .9 });
    const liq = new THREE.Mesh(new THREE.LatheGeometry(liqPts, 18), lm); g.add(liq); return { g, lm, top: liqPts[liqPts.length - 1].y }; }
  { const g = new THREE.Group(); g.position.set(-3.45, 0, -1.35); g.rotation.y = .6; S.add(g);
    const top = new THREE.Mesh(new THREE.BoxGeometry(2.0, .1, .85), woodMat); top.position.y = .95; top.castShadow = top.receiveShadow = true; g.add(top);
    for (const x of [-.9, .9]) for (const z of [-.35, .35]) { const l = new THREE.Mesh(new THREE.BoxGeometry(.09, .95, .09), darkWood); l.position.set(x, .47, z); g.add(l); }
    const sh = new THREE.Mesh(new THREE.BoxGeometry(1.9, .05, .7), darkWood); sh.position.y = .32; g.add(sh);
    const fl = [[0, .62, -.7, 0], [1, .5, -.25, .1], [2, .55, .05, -.15], [0, .7, .45, .05], [1, .45, .8, -.1], [2, .5, -.95, .2]];
    fl.forEach(([k, h, x, z], i) => { const f = flask(k, h, LIQ[i]); f.g.position.set(x, 1.0, z); g.add(f.g); L.flasks.push({ ...f, world: new THREE.Vector3(), col: new THREE.Color(LIQ[i]), h }); });
    // burner + retort tube
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-.7, 1.38, 0), new THREE.Vector3(-.4, 1.7, -.1), new THREE.Vector3(.1, 1.6, -.2), new THREE.Vector3(.45, 1.3, 0)]), 30, .02, 6), glassMat); g.add(tube);
    L.benchLight = new THREE.PointLight('#5dff8a', 2.2, 5, 1.8); L.benchLight.position.set(0, 1.5, 0); g.add(L.benchLight);
    S.updateMatrixWorld(true); L.flasks.forEach(f => f.g.getWorldPosition(f.world));
    L.colliders.push({ p: new THREE.Vector3(-3.45, .8, -1.35), r: 1.2 }); }
  // ---- shelves with specimen jars on the wall ----
  for (const a of [Math.PI + 1.25, Math.PI - 1.25]) { const g = new THREE.Group(); onWall(g, a, RR - .32, 0); S.add(g);
    for (const y of [1.2, 2.0, 2.8]) { const b = new THREE.Mesh(new THREE.BoxGeometry(1.8, .06, .4), darkWood); b.position.set(0, y, 0); g.add(b);
      for (let k = 0; k < 4; k++) { const h = .25 + r() * .2, rad = .09 + r() * .05; const jar = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad, h, 14), glassMat); jar.position.set(-.65 + k * .43 + (r() - .5) * .1, y + .03 + h / 2, (r() - .5) * .1); g.add(jar);
        const col = LIQ[Math.floor(r() * LIQ.length)]; const lq = new THREE.Mesh(new THREE.CylinderGeometry(rad * .88, rad * .88, h * .7, 12), new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: .35, roughness: .4, transparent: true, opacity: .85 })); lq.position.copy(jar.position); lq.position.y -= h * .13; g.add(lq);
        if (r() < .4) { const blob = new THREE.Mesh(new THREE.SphereGeometry(rad * .5, 10, 8), new THREE.MeshStandardMaterial({ color: '#d8c8b0', roughness: .6 })); blob.position.copy(lq.position); g.add(blob); }
        L.shelves.push(jar); } }
    L.colliders.push({ p: g.position.clone().setY(1.5), r: 1.0 }); }
  // ---- hanging lamps ----
  for (const [x, z] of [[-1.9, 1.2], [1.9, 1.2], [0, -2.4]]) { const g = new THREE.Group(); g.position.set(x, HH, z); S.add(g);
    const len = HH - 4.9 - (z < 0 ? -.4 : 0); const ch = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, len, 4), ironMat); ch.position.y = -len / 2; g.add(ch);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(.28, .22, 16, 1, true), new THREE.MeshStandardMaterial({ color: '#2a3a34', roughness: .5, metalness: .6, side: THREE.DoubleSide })); shade.position.y = -len; g.add(shade);
    const bm = new THREE.MeshStandardMaterial({ color: '#ffe2a0', emissive: '#ffb050', emissiveIntensity: 2.2 }); const bulb = new THREE.Mesh(new THREE.SphereGeometry(.08, 12, 10), bm); bulb.position.y = -len - .1; g.add(bulb);
    const pl = new THREE.PointLight('#ffb870', 5, 9, 1.7); pl.position.y = -len - .2; g.add(pl);
    L.lamps.push({ g, bm, pl, base: 5, sw: r() * 6 }); }
  // ---- dust motes in the air ----
  { const n = 300, p = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const a = r() * Math.PI * 2, rr = Math.sqrt(r()) * (RR - 1); p[i * 3] = Math.sin(a) * rr; p[i * 3 + 1] = .3 + r() * 6; p[i * 3 + 2] = Math.cos(a) * rr; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); L.dust = new THREE.Points(g, new THREE.PointsMaterial({ map: L.soft, color: '#b8b0ff', size: .05, transparent: true, opacity: .35, depthWrite: false, blending: THREE.AdditiveBlending })); S.add(L.dust); }
  // ---- bubbles in the flasks ----
  { const n = 70, p = new Float32Array(n * 3); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); L.bub = { pts: new THREE.Points(g, new THREE.PointsMaterial({ map: L.soft, color: '#d8ffe0', size: .045, transparent: true, opacity: .8, depthWrite: false, blending: THREE.AdditiveBlending })), p, life: new Float32Array(n), f: new Int16Array(n) }; S.add(L.bub.pts); }
  // ---- electric arcs (fat lines, additive) ----
  for (let i = 0; i < 12; i++) { const mk = (w, c, o) => { const g = new LineGeometry(); g.setPositions(new Float32Array(26 * 3)); const m = new LineMaterial({ color: c, linewidth: w, transparent: true, opacity: o, depthWrite: false, blending: THREE.AdditiveBlending, worldUnits: false }); const l = new Line2(g, m); l.frustumCulled = false; l.visible = false; S.add(l); return l; };
    L.arcs.push({ core: mk(2.2, '#f2f6ff', 1), glow: mk(7, '#7aa0ff', .4), life: 0, max: 1, a: new THREE.Vector3(), b: new THREE.Vector3(), amp: .3, jt: 0 }); }
  L.setRes = (w, h) => L.arcs.forEach(a => { a.core.material.resolution.set(w, h); a.glow.material.resolution.set(w, h); });
  return L;
}
function fixUV(g, w, h, ox = 0) { const p = g.attributes.position, uv = g.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) - ox) / w + .5, p.getY(i) / h); uv.needsUpdate = true; }

// jagged bolt points from a to b (midpoint displacement), n = 26 points
const _p = new THREE.Vector3(), _d = new THREE.Vector3(), _q = new THREE.Vector3(), _u = new THREE.Vector3();
function boltPoints(a, b, amp, out, R = Math.random) {
  const n = 26; _d.subVectors(b, a); const len = _d.length(); _u.set(_d.y, -_d.x + .3, _d.z + .2).normalize(); _q.crossVectors(_d, _u).normalize(); _u.crossVectors(_q, _d).normalize();
  let o1 = 0, o2 = 0; for (let i = 0; i < n; i++) { const k = i / (n - 1); const env = Math.sin(Math.PI * k); o1 = o1 * .55 + (R() - .5) * amp * len * .35; o2 = o2 * .55 + (R() - .5) * amp * len * .35;
    _p.copy(a).addScaledVector(_d, k).addScaledVector(_u, o1 * env).addScaledVector(_q, o2 * env); out[i * 3] = fin(_p.x); out[i * 3 + 1] = fin(_p.y); out[i * 3 + 2] = fin(_p.z); } }
const _arr = new Float32Array(26 * 3);
export function zap(L, a, b, opt = {}) {
  let arc = L.arcs.find(x => x.life <= 0); if (!arc) arc = L.arcs.reduce((m, x) => x.life < m.life ? x : m, L.arcs[0]);
  arc.a.copy(a); arc.b.copy(b); arc.life = arc.max = opt.life || .25; arc.amp = opt.amp ?? .35; arc.jt = 0; arc.big = opt.big || 0;
  arc.core.material.linewidth = opt.big ? 4.5 : 2.2; arc.glow.material.linewidth = opt.big ? 16 : 7; arc.glow.material.color.set(opt.color || '#7aa0ff');
  return arc;
}
// a strike through the roof hatch, down the rod into the monster
export function strike(L, target) { L.strike = 1; L.flash = Math.max(L.flash, 1); const top = new THREE.Vector3(0, HH + .2, 0);
  zap(L, top, L.rodTip, { life: .55, amp: .22, big: 1, color: '#9fc0ff' }); zap(L, L.rodTip, target, { life: .65, amp: .3, big: 1, color: '#9fc0ff' }); zap(L, L.rodTip, target.clone().add(new THREE.Vector3(.4, -.5, .2)), { life: .4, amp: .45 });
  for (const c of L.coils) zap(L, c.top, L.rodTip, { life: .5, amp: .3 }); windowBolt(L, 0); windowBolt(L, 1); }
// lightning drawn into a window's sky
export function windowBolt(L, i, R = Math.random) { const w = L.windows[i]; if (!w) return; const g = w.bg; g.clearRect(0, 0, 128, 256);
  const path = (x, y, len, wd, depth) => { g.lineWidth = wd; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < len; k++) { x += (R() - .5) * 18; y += 8 + R() * 8; g.lineTo(x, y); if (depth < 2 && R() < .08) { const sx = x, sy = y; g.stroke(); path(sx, sy, len * .4, wd * .6, depth + 1); g.lineWidth = wd; g.beginPath(); g.moveTo(sx, sy); } } g.stroke(); };
  g.shadowColor = 'rgba(160,190,255,1)'; g.shadowBlur = 10; g.strokeStyle = 'rgba(235,240,255,1)'; g.lineCap = 'round'; path(30 + R() * 70, -5, 22, 3, 0); w.boltT.needsUpdate = true; w.flash = 1; }
export function updateLab(L, t, dt, I = {}) {
  L.t = t; const R = Math.random;
  L.flash = Math.max(0, L.flash - dt * 2.6); L.strike = Math.max(0, L.strike - dt * 1.6); L.flicker = Math.max(0, L.flicker - dt * .5);
  const fl = fin(L.flash); L.flashLight.intensity = fl * 2.4; L.boltLight.intensity = fin(L.strike) * 26;
  L.hatchMat.color.setScalar(.55 + fl * .9);
  for (const w of L.windows) { w.flash = Math.max(0, w.flash - dt * 2.2); w.skyMat.color.setRGB(.6 + w.flash * .8 + fl * .3, .63 + w.flash * .8 + fl * .3, .8 + w.flash * .6 + fl * .2); w.boltM.material.opacity = Math.min(1, w.flash * 1.6) * (w.flash > .5 || R() < .7 ? 1 : .3); w.rain.material.map.offset.y = (t * 1.6) % 1; w.rain.material.map.offset.x = (t * .1) % 1; }
  L.shafts.forEach((s, i) => s.material.opacity = .045 + fl * .06 + L.windows[i].flash * .05);
  // coils: idle sparks, more with charge
  const ch = fin(L.charge);
  for (const c of L.coils) { c.col.material.emissiveIntensity = ch * .6 + .04; c.light.intensity = ch * 6 + (c.arcK || 0) * 3; c.arcK = Math.max(0, (c.arcK || 0) - dt * 6);
    c.next -= dt; if (c.next <= 0) { c.next = ch > .1 ? .05 + R() * (.35 - ch * .3) : .9 + R() * 2.6; const a = R() * Math.PI * 2, h = R() - .3;
      _q.set(c.top.x + Math.cos(a) * (.9 + R() * .6), c.top.y + h * 1.1, c.top.z + Math.sin(a) * (.9 + R() * .6)); zap(L, c.top, _q.clone(), { life: .12 + R() * .12, amp: .5 }); c.arcK = 1; if (I.onArc) I.onArc(c, ch); } }
  if (ch > .55 && R() < dt * 8 * ch) { const c = L.coils[R() < .5 ? 0 : 1]; zap(L, c.top, L.rodTip, { life: .15, amp: .35 }); }
  L.ringMat.emissiveIntensity = ch * 1.4 + fl * .8;
  // arcs: jitter, flicker, fade
  for (const a of L.arcs) { if (a.life <= 0) { a.core.visible = a.glow.visible = false; continue; } a.life -= dt; a.jt -= dt;
    if (a.jt <= 0) { a.jt = 1 / 24; boltPoints(a.a, a.b, a.amp, _arr); a.core.geometry.setPositions(_arr); a.glow.geometry.setPositions(_arr); }
    const k = Math.max(0, a.life / a.max), fk = k * (R() < .25 ? .45 : 1); a.core.material.opacity = Math.min(1, fk * 1.3); a.glow.material.opacity = .35 * fk; a.core.visible = a.glow.visible = a.life > 0; }
  // lever
  L.leverPiv.rotation.x = -.95 + fin(L.lever) * 1.9; L.grip.material.emissive.set('#ff2020'); L.grip.material.emissiveIntensity = I.leverHint ? .25 + .25 * Math.sin(t * 6) : 0;
  L.dials.forEach((d, i) => d.rotation.z = -1.1 + ch * 2.2 + Math.sin(t * (3 + i)) * (.05 + ch * .2));
  L.bulbs.forEach((b, i) => b.material.emissiveIntensity = .25 + (ch > i * .25 ? 1.6 : 0) * (R() < .9 ? 1 : .3));
  // lamps: sway; flicker during the big moment
  L.lamps.forEach(l => { l.g.rotation.z = Math.sin(t * .7 + l.sw) * .02 + (I.shake || 0) * .05 * Math.sin(t * 9 + l.sw); l.g.rotation.x = Math.cos(t * .6 + l.sw) * .02;
    const on = L.flicker > 0 ? (R() < .55 - L.flicker * .3 ? 1 : .05) : 1; const k = on * (1 - fin(L.disco) * .55); l.pl.intensity = l.base * k; l.bm.emissiveIntensity = 2.2 * k; });
  L.key.intensity = 46 * (L.flicker > 0 && R() < .25 ? .35 : 1) * (1 - fin(L.disco) * .45);
  // disco spotlights during the dance-off
  L.disco.intensity = fin(L.disco) * 140; if (L.disco.intensity > 0) { const hue = (L.beat * .17) % 1; L.disco.color.setHSL(hue, .85, .6); L.disco.position.set(Math.sin(t * 1.3) * 2.5, 7.8, 2.5 + Math.cos(t * 1.1)); }
  // torches
  L.torches.forEach((f, i) => { const k = .85 + Math.sin(t * 13 + i * 3) * .08 + Math.sin(t * 29 + i) * .06; f.scale.set(.32 * k, .62 * (2 - k), 1); });
  // doors
  for (const d of L.doors) { d.open += (d.target - d.open) * (1 - Math.exp(-dt * 5)); d.hinge.rotation.y = -d.open * 1.45; d.glow.material.opacity = d.open * .18; }
  // flask liquids glow + bubbles
  L.flasks.forEach((f, i) => f.lm.emissiveIntensity = .75 + Math.sin(t * 2 + i) * .15 + ch * .5);
  L.benchLight.intensity = 2 + Math.sin(t * 3.1) * .25 + ch * 2;
  { const B = L.bub, p = B.p; for (let i = 0; i < B.life.length; i++) { B.life[i] -= dt; if (B.life[i] <= 0) { const f = L.flasks[Math.floor(R() * L.flasks.length)]; B.f[i] = L.flasks.indexOf(f); B.life[i] = .6 + R() * .9; p[i * 3] = f.world.x + (R() - .5) * .06; p[i * 3 + 1] = f.world.y + .03; p[i * 3 + 2] = f.world.z + (R() - .5) * .06; }
      else { const f = L.flasks[B.f[i]]; p[i * 3 + 1] = Math.min(p[i * 3 + 1] + dt * (.25 + ch * .4), f.world.y + f.top * 1.05); p[i * 3] += (R() - .5) * dt * .05; } } B.pts.geometry.attributes.position.needsUpdate = true; }
  { const p = L.dust.geometry.attributes.position; for (let i = 0; i < p.count; i++) { let y = p.getY(i) + dt * (.03 + (i % 5) * .006); if (y > 6.5) y = .3; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t * .3 + i) * dt * .02); } p.needsUpdate = true; }
  L.circle.material.opacity = .12 + ch * .25 + fl * .1;
}
