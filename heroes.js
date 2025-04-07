import defaultImage from './assets/default.jpg';
import tonystark from './assets/tonystark.jpg';
import ironman from './assets/ironman.png';
import steverogers from './assets/steve-rogers-and-sam-wilson.jpg';
import captainamerica from './assets/captain_america.jpeg';
import thor1 from './assets/thor.webp';
import thor2 from './assets/thor.jpeg';
import spiderman1 from './assets/spiderman1.jpg';
import spiderman2 from './assets/spiderman2.jpeg';
import blackwidow1 from './assets/natashaRomanoff.jpeg';
import blackwidow2 from './assets/blackWidow.avif';
import hulk1 from './assets/bruceBanner.webp';
import hulk2 from './assets/hulk.avif';
import scarletwitch1 from './assets/wanda_maximoff.webp';
import scarletwitch2 from './assets/scarlet_witch.jpg';
import antman1 from './assets/scott_lang.webp';
import antman2 from './assets/antman.jpg';
import wolverine1 from './assets/logan.webp';
import wolverine2 from './assets/wolverine.avif';
import captainmarvel1 from './assets/carol_danvers.jpeg';
import captainmarvel2 from './assets/captain_marvel1.jpeg';
import hawkeye1 from './assets/hawkeye1.jpeg';
import hawkeye2 from './assets/hawkeye2.jpeg';

export const heroBackgrounds = {
  "Iron Man": [tonystark, ironman],
  "Captain America": [steverogers, captainamerica],
  "Thor": [thor1, thor2],
  "Spider-Man": [spiderman1, spiderman2],
  "Black Widow": [blackwidow1, blackwidow2],
  "Hulk": [hulk1, hulk2],
  "Scarlet Witch": [scarletwitch1, scarletwitch2],
  "Ant-Man": [antman1, antman2],
  "Wolverine": [wolverine1, wolverine2],
  "Captain Marvel": [captainmarvel1, captainmarvel2],
  "Hawkeye": [hawkeye1, hawkeye2],
};

export const superheroes = [
  { name: "Iron Man", alias: "Tony Stark", superpower: "genius-level intellect", partner: "War Machine", weapon: "Powered Armor", birthYear: 1970, powerLevel: 85 },
  { name: "Captain America", alias: "Steve Rogers", superpower: "super strength", partner: "Bucky Barnes", weapon: "Vibranium Shield", birthYear: 1918, powerLevel: 80 },
  { name: "Thor", alias: "Thor Odinson", superpower: "control over lightning", partner: "Loki (sometimes)", weapon: "Mjolnir/Stormbreaker", birthYear: 964, powerLevel: 95 },
  { name: "Spider-Man", alias: "Peter Parker", superpower: "spider-sense", partner: "Miles Morales", weapon: "Web-shooters", birthYear: 2001, powerLevel: 75 },
  { name: "Black Widow", alias: "Natasha Romanoff", superpower: "expert martial artist", partner: "Hawkeye", weapon: "Batons & Firearms", birthYear: 1984, powerLevel: 70 },
  { name: "Hulk", alias: "Bruce Banner", superpower: "super strength", partner: "She-Hulk", weapon: "His fists", birthYear: 1969, powerLevel: 90 },
  { name: "Scarlet Witch", alias: "Wanda Maximoff", superpower: "reality warping", partner: "Vision", weapon: "Chaos Magic", birthYear: 1989, powerLevel: 92 },
  { name: "Ant-Man", alias: "Scott Lang", superpower: "size manipulation", partner: "Wasp", weapon: "Pym Particles", birthYear: 1979, powerLevel: 78 },
  { name: "Wolverine", alias: "Logan", superpower: "regeneration", partner: "X-23", weapon: "Adamantium Claws", birthYear: 1882, powerLevel: 88 },
  { name: "Captain Marvel", alias: "Carol Danvers", superpower: "energy absorption", partner: "Monica Rambeau", weapon: "Photon Blasts", birthYear: 1968, powerLevel: 95 },
  { name: "Hawkeye", alias: "Clint Barton", superpower: "master archer", partner: "Kate Bishop", weapon: "Bow & Arrows", birthYear: 1971, powerLevel: 70 }
];

export default defaultImage;