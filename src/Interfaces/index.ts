namespace Structures {
	export interface Nekos_Base {
		v1: string;
		v2: string;
		img: string;
	}
	export interface NekosLife_Endpoints {
		sfw: NekosSFW;
	}
	export interface NekosSFW {
		hug: string;
		kiss: string;
		lizard: string;
		neko: string;
		pat: string;
		'8ball': string;
		cat: string;
		fact: string;
		name: string;
		owoify: string;
		spoiler: string;
		why: string;
	}
	export interface NekosLife_Vars {
		hug: [];
		kiss: [];
		lizard: [];
		neko: [];
		pat: [];
		['8ball']: [];
		cat: [];
		fact: [];
		name: [];
		owoify: ['text'];
		spoiler: ['text'];
		why: [];
	}
	export interface NekosFunSFW {
		kiss: string;
		lick: string;
		hug: string;
		baka: string;
		cry: string;
		poke: string;
		smug: string;
		slap: string;
		tickle: string;
		pat: string;
		laugh: string;
		feed: string;
		cuddle: string;
		foxgirl: string;
		neko: string;
		waifu: string;
	}
	export interface NekosFun_Endpoints {
		sfw: NekosFunSFW;
	}
	interface vars {
		name: string;
		value: string;
	}
	export type Vars = vars[];
}

export default Structures;
