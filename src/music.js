// Music, all played on recorded samples: J. S. Bach's Toccata in D minor, BWV 565 (public domain) in our own short
// arrangement for the lever moment, plus our own D-minor lab grooves (pizzicato, contrabass, organ, timpani, claves).
import { note, play } from './audio.js';
// ---- Toccata opening: the famous mordent, the falling run, the D-minor chord over the pedal ----
export function toccataEvents(v = .6) {
  const E = []; const o = (t, m, d, vol = v) => { E.push([t, () => { note('org', m, vol, d, 0, .6); note('org', m - 12, vol * .8, d, 0, .6); }]); };
  o(0, 81, .09); o(.09, 79, .09); o(.18, 81, 1.25);
  o(1.6, 79, .1); o(1.71, 77, .1); o(1.82, 76, .1); o(1.93, 74, .14); o(2.12, 73, .5);
  E.push([2.75, () => { note('org', 74, v, 1.9, 0, .7); note('org', 62, v * .8, 1.9, 0, .7); note('org', 65, v * .7, 1.9, 0, .7); note('org', 69, v * .7, 1.9, 0, .7); note('ped', 26, v * 1.1, 2.1, 0, .6); note('ped', 38, v * .8, 2.1, 0, .6); }]);
  return E.sort((a, b) => a[0] - b[0]);
}
const CH = { Dm: { b: 38, p: [62, 65, 69, 74], o: [62, 65, 69] }, Bb: { b: 34, p: [58, 62, 65, 70], o: [58, 62, 65] }, Gm: { b: 31, p: [55, 58, 62, 67], o: [55, 58, 62] }, A: { b: 33, p: [57, 61, 64, 69], o: [57, 61, 64] }, F: { b: 29, p: [57, 60, 65, 69], o: [57, 60, 65] }, C: { b: 36, p: [60, 64, 67, 72], o: [60, 64, 67] } };
// a groove = function(bar) -> list of [beat, fn]; Player steps it on the game clock
const GROOVES = {
  lab: { bpm: 84, prog: ['Dm', 'Bb', 'Gm', 'A'], bar(b, c, k) { const E = [], p = c.p; const arp = [0, 1, 2, 1, 3, 1, 2, 1];
    arp.forEach((i, j) => E.push([j * .5, () => note('pz', p[i], (j === 0 ? .32 : .2) * k, 0, 0, .45, (i - 1.5) * .2)]));
    E.push([0, () => note('cb', c.b, .42 * k, 0, 0, .35)]); E.push([2, () => note('cb', c.b, .3 * k, 0, 0, .35)]);
    if (b % 2 === 0) E.push([0, () => c.o.forEach(m => note('org', m, .07 * k, 3.4, 0, .7))]);
    if (b % 4 === 3) E.push([3.5, () => note('xy', 84, .14 * k, 0, 0, .5)]); return E; } },
  order: { bpm: 108, prog: ['F', 'C', 'Dm', 'A'], bar(b, c, k) { const E = [], p = c.p; [0, 2, 1, 3].forEach((i, j) => E.push([j, () => note('pz', p[i], .26 * k, 0, 0, .4, (i - 1.5) * .2)]));
    E.push([.5, () => note('pz', p[1] + 12, .12 * k, 0, 0, .4)]); E.push([2.5, () => note('pz', p[2] + 12, .12 * k, 0, 0, .4)]);
    E.push([0, () => note('cb', c.b, .4 * k, 0, 0, .3)]); E.push([2, () => note('cb', c.b + 7, .3 * k, 0, 0, .3)]);
    for (let q = 0; q < 4; q++) E.push([q, () => play(q % 2 ? 'cl_2' : 'cl_1', .1 * k, 1.4, 0, .1)]);
    if (b % 4 === 3) E.push([3, () => note('xy', 79, .16 * k, 0, 0, .5)]); return E; } },
  show: { bpm: 120, prog: ['Dm', 'Dm', 'Bb', 'A'], bar(b, c, k) { const E = []; const bass = [0, 0, 3, 0, 5, 3, 7, 5];
    bass.forEach((d, j) => E.push([j * .5, () => note('cb', c.b + d, (j % 2 ? .3 : .42) * k, 0, 0, .3)]));
    E.push([0, () => { play('bd', .5 * k, 1, 0, .3); timp(c.b, .45 * k); }]); E.push([2, () => play('bd', .4 * k, 1, 0, .3)]);
    for (const q of [1, 3]) E.push([q, () => { c.o.forEach(m => note('org', m + 12, .11 * k, .22, 0, .5)); play('cl_1', .16 * k, 1, 0, .2); }]);
    for (const q of [.5, 1.5, 2.5, 3.5]) E.push([q, () => play('cl_2', .08 * k, 1.3, 0, .15)]);
    if (b % 8 === 7) E.push([3, () => play('crash', .18 * k, 1, 0, .4)]); return E; } }
};
function timp(m, v) { const tgt = 50 + ((m - 38) % 12 + 12) % 12 * 0; play('tp_4', v, Math.pow(2, (tgt - 52.5) / 12), 0, .4); }
export class Player {
  constructor() { this.g = null; this.on = false; this.vol = 1; }
  start(name, t0) { this.g = GROOVES[name]; this.name = name; this.t0 = t0; this.spb = 60 / this.g.bpm; this.bar = -1; this.q = []; this.on = true; }
  stop() { this.on = false; this.q = []; }
  beat(t) { return this.on ? (t - this.t0) / this.spb : 0; }
  step(t) { if (!this.on) return; const bt = this.beat(t); const b = Math.floor(bt / 4);
    while (this.bar < b + 1) { this.bar++; if (this.bar < 0) continue; const ch = CH[this.g.prog[this.bar % this.g.prog.length]]; for (const [be, f] of this.g.bar(this.bar, ch, this.vol)) this.q.push([this.t0 + (this.bar * 4 + be) * this.spb, f]); this.q.sort((a, b2) => a[0] - b2[0]); }
    while (this.q.length && this.q[0][0] <= t) { const [, f] = this.q.shift(); f(); } }
}
// one-shot sequences (the Toccata) on the game clock
export class Seq { constructor() { this.q = []; } add(events, t0) { for (const [dt, f] of events) this.q.push([t0 + dt, f]); this.q.sort((a, b) => a[0] - b[0]); } step(t) { while (this.q.length && this.q[0][0] <= t) this.q.shift()[1](); } clear() { this.q = []; } }
