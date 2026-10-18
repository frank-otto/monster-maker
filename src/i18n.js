// EN / DE texts. No personal names: the player is always "Player".
const P_EN = {
  head: { bolt: 'Bolt-neck', round: 'Round', pumpkin: 'Pumpkin', dragon: 'Dragon', alien: 'Alien', bat: 'Bat' },
  horns: { none: 'None', devil: 'Devil', ram: 'Ram', antennae: 'Antennae', unicorn: 'Unicorn', antlers: 'Antlers' },
  eyes: { two: 'Two', cyclops: 'Cyclops', three: 'Three', many: 'Many', stalks: 'Stalks' },
  mouth: { grin: 'Grin', fangs: 'Fangs', tusks: 'Tusks', stitched: 'Stitched', beak: 'Beak', jaw: 'Big jaw' },
  body: { blob: 'Blob', brute: 'Brute', slim: 'Slim', pear: 'Pear', bug: 'Bug' },
  arms: { claws: 'Claws', muscle: 'Muscle', stubby: 'Stubby', tentacles: 'Tentacles', pincers: 'Pincers' },
  legs: { stompers: 'Stompers', chicken: 'Chicken', spider: 'Spider', stubby: 'Stubby', tentacle: 'Tentacle' },
  tail: { none: 'None', lizard: 'Lizard', devil: 'Devil', fluffy: 'Fluffy', scorpion: 'Scorpion' },
  wings: { none: 'None', bat: 'Bat', dragon: 'Dragon', bug: 'Bug', tiny: 'Tiny' },
  pattern: { plain: 'Plain', spots: 'Spots', stripes: 'Stripes', scales: 'Scales', stitches: 'Stitches', glow: 'Glow' }
};
const P_DE = {
  head: { bolt: 'Bolzenhals', round: 'Rund', pumpkin: 'Kürbis', dragon: 'Drache', alien: 'Alien', bat: 'Fledermaus' },
  horns: { none: 'Keine', devil: 'Teufel', ram: 'Widder', antennae: 'Fühler', unicorn: 'Einhorn', antlers: 'Geweih' },
  eyes: { two: 'Zwei', cyclops: 'Zyklop', three: 'Drei', many: 'Viele', stalks: 'Stielaugen' },
  mouth: { grin: 'Grinsen', fangs: 'Fangzähne', tusks: 'Hauer', stitched: 'Genäht', beak: 'Schnabel', jaw: 'Riesenkiefer' },
  body: { blob: 'Klops', brute: 'Koloss', slim: 'Schlank', pear: 'Birne', bug: 'Käfer' },
  arms: { claws: 'Klauen', muscle: 'Muckis', stubby: 'Stummel', tentacles: 'Tentakel', pincers: 'Scheren' },
  legs: { stompers: 'Stampfer', chicken: 'Huhn', spider: 'Spinne', stubby: 'Stummel', tentacle: 'Tentakel' },
  tail: { none: 'Keiner', lizard: 'Echse', devil: 'Teufel', fluffy: 'Flauschig', scorpion: 'Skorpion' },
  wings: { none: 'Keine', bat: 'Fledermaus', dragon: 'Drache', bug: 'Insekt', tiny: 'Winzig' },
  pattern: { plain: 'Uni', spots: 'Punkte', stripes: 'Streifen', scales: 'Schuppen', stitches: 'Nähte', glow: 'Leuchten' }
};
const COL_EN = { green: 'Green', purple: 'Purple', orange: 'Orange', blue: 'Blue', red: 'Red', teal: 'Teal', pink: 'Pink', bone: 'Bone' };
const COL_DE = { green: 'Grün', purple: 'Lila', orange: 'Orange', blue: 'Blau', red: 'Rot', teal: 'Türkis', pink: 'Pink', bone: 'Knochen' };
const CAT_EN = { head: 'Head', horns: 'Horns', eyes: 'Eyes', mouth: 'Mouth', body: 'Body', arms: 'Arms', legs: 'Legs', tail: 'Tail', wings: 'Wings', color: 'Colour', pattern: 'Pattern' };
const CAT_DE = { head: 'Kopf', horns: 'Hörner', eyes: 'Augen', mouth: 'Mund', body: 'Körper', arms: 'Arme', legs: 'Beine', tail: 'Schwanz', wings: 'Flügel', color: 'Farbe', pattern: 'Muster' };
function flat(P, COL, CAT) { const o = {}; for (const c in P) for (const k in P[c]) o[`p_${c}_${k}`] = P[c][k]; for (const k in COL) o['col_' + k] = COL[k]; for (const k in CAT) o['cat_' + k] = CAT[k]; return o; }
export const T = {
  en: {
    ...flat(P_EN, COL_EN, CAT_EN),
    scoreL: 'Score', sub: 'Build a monster. Pull the lever. Bring it to life!', play: '⚡ Monster Showdown', playSub: 'Build it, zap it, then roar, scare & dance', order: 'Order', orders: 'Orders', orderTitle: 'Monster Orders', orderBtn: '📜 Monster Orders', orderSub: 'Customers want monsters — build them against the clock',
    labBtn: '🧪 Free Lab', labSub: 'No rules, just mad science', easy: 'Easy', medium: 'Medium', hard: 'Hard', kidsMode: '🧸 Kids mode', kidsHint: 'Kids mode: nobody can lose.',
    keysHint: 'Keys: ←→ part · ↑↓ category · R random · Space lever', lab: 'Free Lab', showdown: 'Monster Showdown',
    lever: '⚡ Pull the lever!', zapAgain: '⚡ Zap again', zapOrder: '⚡ Zap & deliver!', random: '🎲 Random', quit: '✕', charging: 'Charging the coils…', alive: "IT'S ALIVE!",
    roar: 'Roar', scare: 'Scare', groove: 'Groove', aRoar: '🦁 Roar', aDance: '💃 Dance', aDone: '✓ Done',
    ch1: 'Challenge 1', ch2: 'Challenge 2', ch3: 'Challenge 3', c_roar: 'Roar Contest', c_scare: 'Scare the Villagers', c_dance: 'Dance-off',
    h_roar: 'Hold SPACE to fill your lungs — let go in the gold zone!', h_roarT: 'Hold the ROAR button — let go in the gold zone!',
    h_scare: 'Villagers sneak in! Press ← ↑ → for the door when they come close.', h_scareT: 'Villagers sneak in! Tap left, middle or right when they come close.',
    h_dance: 'Watch the moves, then copy them on the beat with the arrow keys.', h_danceT: 'Watch the moves, then copy them on the beat with the arrow pads.',
    h_build: 'Pick parts in the dock, drag to look around, then pull the lever!', h_buildT: 'Tap parts, drag to look around, then pull the lever!',
    r_hold: 'Hold!', r_over: 'Fizzle! Too much', r_mon: 'MONSTROUS!', r_great: 'Great roar!', r_ok: 'Not bad', r_weak: 'A squeak…',
    s_boo: 'BOO! Perfect', s_great: 'Scary!', s_ok: 'Boo', s_early: 'Too early!', s_none: 'Nobody there', s_tickle: 'Tickle attack! 😄', s_ouch: 'Ouch! Poked!', mobWins: 'The mob chased you off!',
    d_watch: 'Watch…', d_you: 'Your turn!', d_round: 'Flawless round!', round: 'Round', j_perfect: 'Perfect!', j_good: 'Good', j_miss: 'Miss', j_mon: 'Monstrous!', j_great: 'Great!', j_weak: 'Keep practising!',
    cu_mayor: 'The Mayor', cu_witch: 'The Swamp Witch', cu_count: 'The Count', cu_ghost: 'A lonely Ghost', cu_baker: 'The Baker', cu_pirate: 'The Pirate Captain', cu_gardener: 'The Gardener',
    cs_mayor: '"A fearsome guard for the town hall, please!"', cs_witch: '"I need a pet for my cauldron."', cs_count: '"Something dreadful for my dungeon."', cs_ghost: '"A friend who is not afraid of me…"',
    cs_baker: '"A helper for my midnight bakery!"', cs_pirate: '"A shipmate to scare the seven seas!"', cs_gardener: '"Something to scare the crows away."',
    o_new: 'New order!', o_time: "Time's up!", o_closed: 'The shop is closed!', o_perfect: 'Exactly what I wanted!', o_happy: 'Lovely!', o_meh: 'Hmm… not quite.',
    e_lab: 'What a creation!', e_s: 'Monster legend!', e_a: 'Terrific terror!', e_b: 'Spooky good!', newBest: '🏆 New best!', best: 'Best', yourName: 'Your name',
    again: '↻ Play again', menu: '☰ Menu', card: '🖼️ Save card', share: '📤 Share', by: 'by', cardTag: 'Build your own monster!', saved: 'Card saved ✔', autoQ: 'Quality lowered to',
    q_low: 'Low', q_mid: 'Normal', q_high: 'High', q_ultra: 'Ultra', credit: 'Sounds: CC0 · Organ: VSCO-2 CE (CC0) · Music after J. S. Bach (public domain)', loading: 'Waking the lab…'
  },
  de: {
    ...flat(P_DE, COL_DE, CAT_DE),
    scoreL: 'Punkte', sub: 'Bau ein Monster. Zieh den Hebel. Erweck es zum Leben!', play: '⚡ Monster-Showdown', playSub: 'Bauen, schocken, dann brüllen, erschrecken & tanzen', order: 'Auftrag', orders: 'Aufträge', orderTitle: 'Monster-Aufträge', orderBtn: '📜 Monster-Aufträge', orderSub: 'Kunden wollen Monster – bau sie gegen die Uhr',
    labBtn: '🧪 Freies Labor', labSub: 'Keine Regeln, nur verrückte Wissenschaft', easy: 'Leicht', medium: 'Mittel', hard: 'Schwer', kidsMode: '🧸 Kindermodus', kidsHint: 'Kindermodus: Niemand kann verlieren.',
    keysHint: 'Tasten: ←→ Teil · ↑↓ Kategorie · R Zufall · Leertaste Hebel', lab: 'Freies Labor', showdown: 'Monster-Showdown',
    lever: '⚡ Zieh den Hebel!', zapAgain: '⚡ Nochmal schocken', zapOrder: '⚡ Schocken & liefern!', random: '🎲 Zufall', quit: '✕', charging: 'Die Spulen laden…', alive: 'ES LEBT!',
    roar: 'Brüllen', scare: 'Schrecken', groove: 'Groove', aRoar: '🦁 Brüllen', aDance: '💃 Tanzen', aDone: '✓ Fertig',
    ch1: 'Prüfung 1', ch2: 'Prüfung 2', ch3: 'Prüfung 3', c_roar: 'Brüll-Wettbewerb', c_scare: 'Dorfbewohner erschrecken', c_dance: 'Tanz-Duell',
    h_roar: 'LEERTASTE halten – in der goldenen Zone loslassen!', h_roarT: 'BRÜLL-Taste halten – in der goldenen Zone loslassen!',
    h_scare: 'Dorfbewohner schleichen herein! Drück ← ↑ → für die Tür, wenn sie nah sind.', h_scareT: 'Dorfbewohner schleichen herein! Tippe links, Mitte oder rechts, wenn sie nah sind.',
    h_dance: 'Schau dir die Moves an und tanz sie im Takt mit den Pfeiltasten nach.', h_danceT: 'Schau dir die Moves an und tanz sie im Takt mit den Pfeilfeldern nach.',
    h_build: 'Wähle Teile im Dock, zieh zum Umsehen, dann zieh den Hebel!', h_buildT: 'Tippe Teile an, wische zum Umsehen, dann zieh den Hebel!',
    r_hold: 'Halten!', r_over: 'Verpufft! Zu viel', r_mon: 'MONSTRÖS!', r_great: 'Starkes Brüllen!', r_ok: 'Nicht schlecht', r_weak: 'Ein Piepsen…',
    s_boo: 'BUH! Perfekt', s_great: 'Gruselig!', s_ok: 'Buh', s_early: 'Zu früh!', s_none: 'Da ist niemand', s_tickle: 'Kitzel-Angriff! 😄', s_ouch: 'Autsch! Gepikst!', mobWins: 'Der Mob hat dich verjagt!',
    d_watch: 'Zuschauen…', d_you: 'Du bist dran!', d_round: 'Fehlerfreie Runde!', round: 'Runde', j_perfect: 'Perfekt!', j_good: 'Gut', j_miss: 'Daneben', j_mon: 'Monströs!', j_great: 'Super!', j_weak: 'Weiter üben!',
    cu_mayor: 'Der Bürgermeister', cu_witch: 'Die Sumpfhexe', cu_count: 'Der Graf', cu_ghost: 'Ein einsames Gespenst', cu_baker: 'Der Bäcker', cu_pirate: 'Die Piratenkapitänin', cu_gardener: 'Die Gärtnerin',
    cs_mayor: '„Einen furchterregenden Wächter fürs Rathaus, bitte!“', cs_witch: '„Ich brauche ein Haustier für meinen Kessel.“', cs_count: '„Etwas Schreckliches für mein Verlies.“', cs_ghost: '„Einen Freund, der keine Angst vor mir hat…“',
    cs_baker: '„Einen Helfer für meine Mitternachtsbäckerei!“', cs_pirate: '„Einen Maat, der die sieben Meere erschreckt!“', cs_gardener: '„Etwas, das die Krähen verscheucht.“',
    o_new: 'Neuer Auftrag!', o_time: 'Zeit ist um!', o_closed: 'Der Laden ist zu!', o_perfect: 'Genau so wollte ich es!', o_happy: 'Wunderbar!', o_meh: 'Hmm… nicht ganz.',
    e_lab: 'Was für eine Schöpfung!', e_s: 'Monster-Legende!', e_a: 'Tolles Grauen!', e_b: 'Schaurig gut!', newBest: '🏆 Neuer Rekord!', best: 'Rekord', yourName: 'Dein Name',
    again: '↻ Nochmal', menu: '☰ Menü', card: '🖼️ Karte speichern', share: '📤 Teilen', by: 'von', cardTag: 'Bau dein eigenes Monster!', saved: 'Karte gespeichert ✔', autoQ: 'Qualität gesenkt auf',
    q_low: 'Niedrig', q_mid: 'Normal', q_high: 'Hoch', q_ultra: 'Ultra', credit: 'Sounds: CC0 · Orgel: VSCO-2 CE (CC0) · Musik nach J. S. Bach (gemeinfrei)', loading: 'Das Labor erwacht…'
  }
};
const REQ_EMO = { color: '🎨', any: '', eyes: '👁️', wings: '🪽', legs: '🦵', head: '🗿', pattern: '🐾', mouth: '👄', tentacles: '🐙', horns: '🦌', arms: '💪', body: '🫃', tail: '🦎', stat: '' };
export function REQ(r, lang) { const [k, v] = r.split(':'); const de = lang === 'de';
  if (k === 'any') return { wings: de ? '🪽 Mit Flügeln' : '🪽 Has wings', horns: de ? '🦌 Mit Hörnern' : '🦌 Has horns', tail: de ? '🦎 Mit Schwanz' : '🦎 Has a tail' }[v];
  if (k === 'tentacles') return de ? '🐙 Tentakel' : '🐙 Tentacles';
  if (k === 'stat') return [de ? '🦁 Lautes Brüllen (60+)' : '🦁 Loud roar (60+)', de ? '👻 Sehr gruselig (60+)' : '👻 Very scary (60+)', de ? '💃 Guter Tänzer (60+)' : '💃 Good dancer (60+)'][+v];
  if (k === 'color') return `🎨 ${(de ? COL_DE : COL_EN)[v]}`;
  const P = de ? P_DE : P_EN; const cat = (de ? CAT_DE : CAT_EN)[k]; return `${REQ_EMO[k] || ''} ${cat}: ${P[k][v]}`; }
