// Low-poly villagers (the torch-and-pitchfork mob) and the customers of the Monster Order shop.
import * as THREE from 'three';
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .75, ...o });
export const CUSTOMERS = [
  { id: 'mayor', e: '🎩', coat: '#2b3a6a', hat: 'top', skin: '#e8b896' },
  { id: 'witch', e: '🧙', coat: '#3a2450', hat: 'witch', skin: '#9fc28a' },
  { id: 'count', e: '🧛', coat: '#151018', hat: 'none', cape: true, skin: '#e6e0ea' },
  { id: 'ghost', e: '👻', ghost: true },
  { id: 'baker', e: '🥐', coat: '#efe8da', hat: 'chef', skin: '#d9a07a' },
  { id: 'pirate', e: '🏴‍☠️', coat: '#8a1f22', hat: 'tricorn', patch: true, skin: '#c98f6a' },
  { id: 'gardener', e: '🌻', coat: '#3f6a34', hat: 'straw', skin: '#f0c8a0' }
];
export function createVillager(o = {}, flameT) {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body); const P = { g, body, t: Math.random() * 10, arms: [], legs: [], o };
  const skin = mat(o.skin || '#e0b090'), coat = mat(o.coat || '#5a4632'), dark = mat('#141010');
  if (o.ghost) { const sheet = new THREE.Mesh(new THREE.LatheGeometry([[0, 0], [.42, .02], [.36, .3], [.32, .8], [.3, 1.15], [.22, 1.4], [0, 1.5]].map(p => new THREE.Vector2(p[0], p[1])), 24), mat('#f2f2fa', { roughness: .6, emissive: '#8890b0', emissiveIntensity: .25 })); body.add(sheet);
    for (const x of [-.1, .1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(.05, 10, 8), dark); e.scale.set(.8, 1.3, .5); e.position.set(x, 1.25, .26); body.add(e); } const m = new THREE.Mesh(new THREE.SphereGeometry(.05, 10, 8), dark); m.scale.set(1, 1.3, .5); m.position.set(0, 1.08, .29); body.add(m); P.mouth = m; P.ghost = true; P.height = 1.5; }
  else {
    for (const s of [-1, 1]) { const l = new THREE.Group(); l.position.set(s * .1, .62, 0); body.add(l); const m = new THREE.Mesh(new THREE.CylinderGeometry(.06, .05, .6, 8), mat('#2a2420')); m.position.y = -.3; l.add(m); const b = new THREE.Mesh(new THREE.BoxGeometry(.12, .07, .2), dark); b.position.set(0, -.6, .04); l.add(b); P.legs.push(l); }
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(.2, .32, .72, 12), coat); torso.position.y = .95; torso.castShadow = true; body.add(torso);
    if (o.cape) { const cape = new THREE.Mesh(new THREE.ConeGeometry(.48, 1.15, 14, 1, true, Math.PI * .15, Math.PI * 1.7), mat('#6a0a14', { side: THREE.DoubleSide })); cape.position.set(0, .82, -.04); cape.rotation.y = Math.PI; body.add(cape); const col = new THREE.Mesh(new THREE.ConeGeometry(.3, .3, 12, 1, true, Math.PI * .1, Math.PI * 1.8), mat('#151018', { side: THREE.DoubleSide })); col.position.set(0, 1.36, -.05); col.rotation.set(Math.PI, Math.PI, 0); body.add(col); }
    if (o.id === 'mayor') { const sash = new THREE.Mesh(new THREE.TorusGeometry(.25, .025, 6, 20), mat('#c0262a')); sash.position.set(0, 1.0, .02); sash.rotation.set(.1, 0, .7); sash.scale.set(1, 1.25, .8); body.add(sash); }
    if (o.id === 'baker') { const ap = new THREE.Mesh(new THREE.PlaneGeometry(.34, .5), mat('#ffffff', { side: THREE.DoubleSide })); ap.position.set(0, .86, .27); ap.rotation.x = -.15; body.add(ap); }
    const head = new THREE.Group(); head.position.y = 1.46; body.add(head); P.head = head; const hd = new THREE.Mesh(new THREE.SphereGeometry(.17, 16, 12), skin); hd.castShadow = true; head.add(hd);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(.035, 8, 6), skin); nose.position.set(0, -.01, .17); head.add(nose);
    for (const x of [-.06, .06]) { const e = new THREE.Mesh(new THREE.SphereGeometry(.022, 8, 6), dark); e.position.set(x, .04, .15); head.add(e); }
    if (o.patch) { const p2 = new THREE.Mesh(new THREE.CircleGeometry(.04, 10), dark); p2.position.set(.06, .04, .168); head.add(p2); const st = new THREE.Mesh(new THREE.TorusGeometry(.172, .006, 4, 24), dark); st.rotation.set(0, 0, .45); head.add(st); }
    const mouth = new THREE.Mesh(new THREE.TorusGeometry(.04, .01, 4, 10, Math.PI), dark); mouth.position.set(0, -.07, .155); mouth.rotation.z = Math.PI; head.add(mouth); P.mouth = mouth;
    const hat = o.hat || (Math.random() < .5 ? 'cap' : 'hood');
    if (hat === 'top') { const c = new THREE.Mesh(new THREE.CylinderGeometry(.13, .14, .3, 14), dark); c.position.y = .27; head.add(c); const b = new THREE.Mesh(new THREE.CylinderGeometry(.24, .24, .02, 18), dark); b.position.y = .12; head.add(b); }
    else if (hat === 'witch') { const c = new THREE.Mesh(new THREE.ConeGeometry(.17, .5, 14), mat('#2a1838')); c.position.y = .36; c.rotation.z = .15; head.add(c); const b = new THREE.Mesh(new THREE.CylinderGeometry(.32, .32, .02, 18), mat('#2a1838')); b.position.y = .12; head.add(b); }
    else if (hat === 'chef') { const c = new THREE.Mesh(new THREE.CylinderGeometry(.16, .13, .22, 14), mat('#ffffff')); c.position.y = .22; head.add(c); const t = new THREE.Mesh(new THREE.SphereGeometry(.2, 14, 10), mat('#ffffff')); t.scale.y = .6; t.position.y = .36; head.add(t); }
    else if (hat === 'tricorn') { const c = new THREE.Mesh(new THREE.ConeGeometry(.28, .16, 3), dark); c.position.y = .18; c.rotation.y = Math.PI; head.add(c); }
    else if (hat === 'straw') { const b = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .025, 20), mat('#d8b860')); b.position.y = .13; head.add(b); const c = new THREE.Mesh(new THREE.CylinderGeometry(.13, .15, .14, 14), mat('#d8b860')); c.position.y = .2; head.add(c); }
    else if (hat === 'cap') { const c = new THREE.Mesh(new THREE.SphereGeometry(.18, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(['#4a3a2a', '#3a4a3a', '#5a2a2a'][Math.floor(Math.random() * 3)])); c.position.y = .03; head.add(c); }
    else if (hat === 'hood') { const c = new THREE.Mesh(new THREE.SphereGeometry(.21, 14, 10, 0, Math.PI * 2, 0, Math.PI * .6), coat); c.position.set(0, .01, -.02); head.add(c); }
    for (const s of [-1, 1]) { const a = new THREE.Group(); a.position.set(s * .25, 1.24, 0); body.add(a); const m = new THREE.Mesh(new THREE.CylinderGeometry(.05, .045, .5, 8), coat); m.position.y = -.25; a.add(m); const h = new THREE.Mesh(new THREE.SphereGeometry(.05, 8, 6), skin); h.position.y = -.52; a.add(h); P.arms.push(a); }
    P.height = 1.7;
    if (o.torch || o.fork) { const hand = P.arms[1]; const stick = new THREE.Mesh(new THREE.CylinderGeometry(.022, .022, o.fork ? 1.5 : .6, 6), mat('#4a3020')); stick.position.set(0, -.52, .12); stick.rotation.x = Math.PI / 2 - .25; hand.add(stick); P.tool = stick;
      if (o.torch) { const head2 = new THREE.Mesh(new THREE.CylinderGeometry(.05, .035, .12, 8), mat('#2a1a10')); head2.position.y = .32; stick.add(head2); const f = new THREE.Sprite(new THREE.SpriteMaterial({ map: flameT, color: '#ffffff', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); f.scale.set(.26, .5, 1); f.position.y = .55; stick.add(f); P.flame = f; }
      else { const bar = new THREE.Mesh(new THREE.BoxGeometry(.28, .02, .02), mat('#555', { metalness: .8 })); bar.position.y = .75; stick.add(bar); for (const x of [-.13, 0, .13]) { const p2 = new THREE.Mesh(new THREE.ConeGeometry(.012, .2, 5), mat('#777', { metalness: .8 })); p2.position.set(x, .85, 0); stick.add(p2); } } }
  }
  g.traverse(m => { if (m.isMesh) m.castShadow = true; });
  return P;
}
// mood: 'walk' | 'idle' | 'flee' | 'happy' | 'grumpy' | 'scared' | 'poke'
export function animateVillager(P, dt, mood = 'idle', k = 1) {
  P.t += dt; const t = P.t;
  if (P.ghost) { P.body.position.y = .25 + Math.sin(t * 2) * .08 + (mood === 'happy' ? Math.abs(Math.sin(t * 8)) * .25 : 0); P.body.rotation.z = Math.sin(t * 1.3) * .06 + (mood === 'grumpy' ? Math.sin(t * 14) * .12 : 0); P.mouth.scale.y = mood === 'flee' || mood === 'scared' ? 2.4 : mood === 'happy' ? .6 : 1.3; return; }
  const walk = mood === 'walk' || mood === 'flee' ? 1 : 0, sp = mood === 'flee' ? 14 : 7.5;
  P.legs.forEach((l, i) => l.rotation.x = walk * Math.sin(t * sp + i * Math.PI) * .6);
  P.body.position.y = walk * Math.abs(Math.sin(t * sp)) * .05 + (mood === 'happy' ? Math.abs(Math.sin(t * 9)) * .22 : 0) + (mood === 'scared' ? .12 * Math.abs(Math.sin(t * 20)) : 0);
  P.body.rotation.x = mood === 'poke' ? .25 * Math.max(0, Math.sin(t * 9)) : mood === 'flee' ? .18 : 0;
  const up = mood === 'flee' || mood === 'scared' || mood === 'happy';
  P.arms.forEach((a, i) => { const s = i ? 1 : -1; a.rotation.z = s * (up ? 2.6 + Math.sin(t * 18 + i) * .2 : .15); a.rotation.x = up ? 0 : walk * Math.sin(t * sp + i * Math.PI + Math.PI) * .5 - (P.tool && i ? .5 + (mood === 'poke' ? Math.max(0, Math.sin(t * 9)) * .9 : 0) : 0); });
  if (mood === 'grumpy') { P.head.rotation.y = Math.sin(t * 9) * .35; P.arms.forEach((a, i) => { a.rotation.x = -1.2; a.rotation.z = (i ? -1 : 1) * .9; }); } else P.head.rotation.y *= .9;
  if (P.mouth) P.mouth.scale.set(1, mood === 'flee' || mood === 'scared' ? -2.2 : mood === 'grumpy' ? -1 : 1, 1);
  if (P.flame) { const f = .85 + Math.sin(t * 13) * .1; P.flame.scale.set(.26 * f, .5 * (2 - f), 1); }
}
// Free a villager's GPU buffers when it leaves the scene (geometries + its own materials; shared textures such as the torch flame stay).
export function disposeVillager(P) { if (!P || !P.g) return; if (P.g.parent) P.g.parent.remove(P.g); const ms = new Set(); P.g.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => ms.add(m)); }); ms.forEach(m => m.dispose()); }
