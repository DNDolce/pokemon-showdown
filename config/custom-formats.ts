// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	// Cube Draft
	{
		section: "Cube Draft",
		name: "temp",
	},
	{
		name: "[Gen 9] National Dex OTL Cube",
		mod: "gen9",
		bestOfDefault: true,
		ruleset: [
			"Standard NatDex",
			"Terastal Clause",
			"Cube Pokedex",
			// "-all pokemon, + Froslass, + Archeops, + Fezandipiti, + Sigilyph, + Marowak-Alola, + Lanturn, + Decidueye, + Bewear, + Camerupt-Mega, +Duraludon, +Ribombee, +Qwilfish-Hisui, +Audino-Mega, +Claydol, +Morpeko, +Cradily, +Veluza, +Noivern, +Pinsir, +Lucario, +Crabominable, +Houndoom, +Zygarde-10%, +Weezing-Galar, +Avalugg-Hisui, +Golisopod, +Arboliva, +Togedemaru, +Vullaby, +Dachsbun, +Rotom-Frost, +Salazzle, +Calyrex, +Zoroark-Hisui, +Stunfisk-Galar, +Simipour, +Illumise, +Virizion, +Druddigon, +Dragalge, +Gligar, +Coalossal, +Vikavolt, +Empoleon, +Articuno, +Zangoose",
			// "-scald, +Simipour + scald",
			// "-toxic, +Salazzle + toxic",
			// "-defog, +Whimsicott + defog, +Vespiquen + defog, +Vullaby + defog, +Illumise + defog",
			// "-rapid spin, +Claydol+rapid spin, +Coalossal+rapid spin, +Tatsugiri+rapid spin, +Morpeko+rapid spin",
			// "-stickyweb",
			// "-stealthrock, +Stunfisk-Galar + stealthrock, +Mawile + stealthrock, +Cradily + stealthrock",
			// "-spikes, +Golisopod + spikes",
			// "-toxicspikes, +Cofagrigus+toxicspikes, +Garbodor+toxicspikes",
			// "-Eviolite, +Vullaby+Eviolite, +Gligar+Eviolite",
			// "-Heavy-Duty Boots, +Centiskorch+Heavy-Duty Boots",
		],
	},
];

// otlcube: {
// 	effectType: "ValidatorRule",
// 	name: "OTL Cube",
// 	desc: "Applies the rules for the OTL Cube Draft format.",
// 	ruleset: [
// 		"Obtainable",
// 		"Team Preview",
// 		"HP Percentage Mod",
// 		"Cancel Mod",
// 		"Endless Battle Clause",
// 	],
// 	ruleset: [
// 		"Sleep Clause Mod",
// 		"Species Clause",
// 		"Nickname Clause",
// 		"OHKO Clause",
// 		"Evasion Items Clause",
// 		"Evasion Moves Clause",
// 		"-Released",
// 		"-Unreleased",
// 		"-Unobtainable",
// 		"-Nonexistent",
// 		"-terastallization",
// 		"-toxic",
// 		"-scald",
// 		"-defog",
// 		"-rapidspin",
// 		"-stickyweb",
// 		"-stealthrock",
// 		"-spikes",
// 		"-toxicspikes",
// 		"-Eviolite",
// 		"-Heavy-duty boots",
// 		"+Salazzle + toxic",
// 		"+Simipour + scald",
// 		"+Vullaby + defog",
// 		"+Illumise + defog",
// 		"+Whimsicott + defog",
// 		"+Vespiquen + defog",
// 		"+Claydol + rapidspin",
// 		"+Morpeko + rapidspin",
// 		"+Coalossal + rapidspin",
// 		"+Tatsugiri + rapidspin",
// 		"+Cradily + stealthrock",
// 		"+Stunfisk-Galar + stealthrock",
// 		"+Mawile + stealthrock",
// 		"+Golisopod + spikes",
// 		"+Cofagrigus + toxicspikes",
// 		"+Garbodor + toxicspikes",
// 		"+Vullaby + Eviolite",
// 		"+Gligar + Eviolite",
// 		"+Centiskorch + Heavy-Duty Boots",

// 		"+Froslass",
// 		"+Archeops",
// 		"+Fezandipiti",
// 		"+Sigilyph",
// 		"+Marowak-Alola",
// 		"+Lanturn",
// 		"+Decidueye",
// 		"+Bewear",
// 		"+Mega Camerupt",
// 		"+Duraludon",
// 		"+Ribombee",
// 		"+Qwilfish-Hisui",
// 		"+Mega Audino",
// 		"+Claydol",
// 		"+Morpeko",
// 		"+Cradily",
// 		"+Veluza",
// 		"+Noivern",
// 		"+Pinsir",
// 		"+Lucario",
// 		"+Crabominable",
// 		"+Houndoom",
// 		"+Zygarde-10%",
// 		"+Weezing-Galar",
// 		"+Avalugg-Hisui",
// 		"+Golisopod",
// 		"+Arboliva",
// 		"+Togedemaru",
// 		"+Vullaby",
// 		"+Dachsbun",
// 		"+Rotom-Frost",
// 		"+Salazzle",
// 		"+Calyrex",
// 		"+Zoroark-Hisui",
// 		"+Stunfisk-Galar",
// 		"+Simipour",
// 		"+Illumise",
// 		"+Virizion",
// 		"+Druddigon",
// 		"+Dragalge",
// 		"+Gligar",
// 		"+Coalossal",
// 		"+Vikavolt",
// 		"+Empoleon",
// 		"+Articuno",
// 		"+Zangoose",
// 		"+Palossand",
// 		"+Slowbro-Galar",
// 		"+Pangoro",
// 		"+Klawf",
// 		"+Sableye",
// 		"+Centiskorch",
// 		"+Gallade",
// 		"+Tatsugiri",
// 		"+Golem-Alola",
// 		"+Mawile",
// 		"+Tsareena",
// 		"+Glaceon",
// 		"+Tyrantrum",
// 		"+Heliolisk",
// 		"+Delphox",
// 		"+Quagsire",
// 		"+Whimsicott",
// 		"+Magneton",
// 		"+Sneasel",
// 		"+Toxicroak",
// 		"+Vespiquen",
// 		"+Cofagrigus",
// 		"+Braviary",
// 		"+Garbodor",
// 		"+Lokix",
// 		"+Lunatone",
// 		"+Poliwrath",
// 		"+Entei",
// 		"+Dugtrio-Alola",
// 		"+Mimikyu",
// 		"+Drampa",
// 		"+Mega Abomasnow",
// 	],
// 	// Mostly hardcoded in team-validator.ts
// 	onValidateTeam(team, format) {
// 		let kyuremCount = 0;
// 		for (const set of team) {
// 			if (set.species === 'Kyurem-White' || set.species === 'Kyurem-Black') {
// 				if (kyuremCount > 0) {
// 					return [
// 						`You cannot have more than one Kyurem-Black/Kyurem-White.`,
// 						`(It's untradeable and you can only make one with the DNA Splicers.)`,
// 					];
// 				}
// 				kyuremCount++;
// 			}
// 			if (set.moves.includes('defog') && !['Vullaby', 'Illumise', 'Whimsicott', 'Vespiquen'].includes(set.species)) {
// 				return [`Only Vullaby, Illumise, Whimsicott, and Vespiquen can use Defog.`];
// 			}
// 			if (set.moves.includes('rapidspin') && !['Claydol', 'Morpeko', 'Coalossal', 'Tatsugiri'].includes(set.species)) {
// 				return [`Only Claydol, Morpeko, Coalossal, and Tatsugiri can use Rapid Spin.`];
// 			}
// 			if (set.moves.includes('stickyweb')) {
// 				return ['Sticky Web is banned.']
// 			}
// 			if (set.moves.includes('stealthrock') && !['Cradily', 'Stunfisk-Galar', 'Mawile'].includes(set.species)) {
// 				return [`Only Cradily, Stunfisk-Galar, and Mawile can use Stealth Rock.`];
// 			}
// 			if (set.moves.includes('spikes') && !['Golisopod'].includes(set.species)) {
// 				return [`Only Golisopod can use Spikes.`];
// 			}
// 			if (set.moves.includes('toxicspikes') && !['Cofagrigus', 'Garbodor'].includes(set.species)) {
// 				return [`Only Cofagrigus and Garbodor can use Toxic Spikes.`];
// 			}
// 			if (set.moves.includes('toxic') && !['Salazzle'].includes(set.species)) {
// 				return [`Only Salazzle can use Toxic.`];
// 			}
// 			if (set.moves.includes('scald') && !['Simipour'].includes(set.species)) {
// 				return [`Only Simipour can use Scald.`];
// 			}
// 			if (set.item === 'Eviolite' && !['Vullaby', 'Gligar'].includes(set.species)) {
// 				return [`Only Vullaby and Gligar can use Eviolite.`];
// 			}
// 			if (set.item === 'Heavy-Duty Boots' && !['Centiskorch'].includes(set.species)) {
// 				return [`Only Centiskorch can use Heavy-Duty Boots.`];
// 			}
// 		}
// 		return [];
// 	},
// },
