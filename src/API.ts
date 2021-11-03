import axios from 'axios';
import Structures from './Interfaces/Index';

export namespace Wrapper {
	export class NekosLife {
		BaseURL: Structures.Nekos_Base;
		endpoints: Structures.NekosLife_Endpoints;
		vars: Structures.NekosLife_Vars;
		constructor() {
			this.BaseURL.v1 = 'https://nekos.life/api';
			this.BaseURL.v2 = 'https://nekos.life/api/v2';
			this.BaseURL.img = `https://nekos.life/api/v2/img`;
			this.endpoints = {
				sfw: {
					hug: `${this.BaseURL.v1}/hug`,
					kiss: `${this.BaseURL.v1}/kiss`,
					lizard: `${this.BaseURL.v1}/lizard`,
					neko: `${this.BaseURL.v1}/neko`,
					pat: `${this.BaseURL.v1}/pat`,
					'8ball': `${this.BaseURL.v2}/8ball`,
					cat: `${this.BaseURL.v2}/cat`,
					fact: `${this.BaseURL.v2}/fact`,
					name: `${this.BaseURL.v2}/name`,
					owoify: `${this.BaseURL.v2}/owofiy`,
					spoiler: `${this.BaseURL.v2}/spoiler`,
					why: `${this.BaseURL.v2}/why`,
				},
			};
			this.vars = {
				hug: [],
				kiss: [],
				lizard: [],
				neko: [],
				pat: [],
				['8ball']: [],
				cat: [],
				fact: [],
				name: [],
				owoify: ['text'],
				spoiler: ['text'],
				why: [],
			};
		}
		async Hug() {
			try {
				const res = await axios(this.endpoints.sfw.hug);

				return res.data;
			} catch (error) {
				throw error;
			}
		}
		async Kiss() {}
		async Lizard() {}
		async Neko() {}
		async Pat() {}
		async ['8ball']() {}
		async Cat() {}
		async Fact() {}
		async Name() {}
		async OwOify() {}
		async Spoiler() {}
		async Why() {}
		/**
		 * This is a tool to get the link for an endpoint that is not already listed
		 * @param
		 * @param endpoint
		 * @example
		 * formatURL("v1", "hug")
		 * formatURL("v2", "why")
		 */
		formatURL(
			version: 'v1' | 'v2' | 'img',
			endpoint: string,
			...vars: Structures.Vars
		) {
			const endpoint_vars = this.vars[endpoint];

			if (
				(endpoint_vars as Array<string>).length == vars.length &&
				vars.length > 0
			) {
				const var1 = vars[0];

				let url = `${this.BaseURL[version]}/${endpoint}?${var1.name}=${var1.value}`;

				if ((endpoint_vars as Array<string>).length == 1) {
					return url;
				}

				for (let variable of vars) {
					url += `&${variable.name}=${variable.value}`;
				}
			}
			// if (!vars) return `${this.BaseURL[version]}/${endpoint}`;

			// if (vars.length > 1) {
			// 	const base = `${this.BaseURL[version]}/${endpoint}?${}`
			// }
		}
	}
	export class NekosFun {
		BaseURL: string;
		endpoints: Structures.NekosFun_Endpoints;
		constructor() {
			this.BaseURL = `http://api.nekos.fun:8080/api`;
			this.endpoints = {
				sfw: {
					kiss: `${this.BaseURL}/kiss`,
					lick: `${this.BaseURL}/lick`,
					hug: `${this.BaseURL}/hug`,
					baka: `${this.BaseURL}/baka`,
					cry: `${this.BaseURL}/cry`,
					poke: `${this.BaseURL}/poke`,
					smug: `${this.BaseURL}/smug`,
					slap: `${this.BaseURL}/slap`,
					tickle: `${this.BaseURL}/tickle`,
					pat: `${this.BaseURL}/pat`,
					laugh: `${this.BaseURL}/laugh`,
					feed: `${this.BaseURL}/feed`,
					cuddle: `${this.BaseURL}/cuddle`,
					foxgirl: `${this.BaseURL}/foxgirl`,
					neko: `${this.BaseURL}/neko`,
					waifu: `${this.BaseURL}/waifu`,
				},
			};
		}
		async Kiss() {}
		async Lick() {}
		async Hug() {}
		async Baka() {}
		async Cry() {}
		async Poke() {}
		async Smug() {}
		async Slap() {}
		async Tickle() {}
		async Pat() {}
		async Laugh() {}
		async Feed() {}
		async Cuddle() {}
		async Foxgirl() {}
		async Neko() {}
		async Waifu() {}
		formatURL() {}
	}
	export class SomeRandomApi {
		BaseURL: string;
		endpoints: [];
		constructor() {}
		formatURL() {}
	}
	export class NekoBot {
		BaseURL: string;
		endpoints: [];
		constructor() {
			this.BaseURL = 'http://api.nekos.fun:8080/api/';
		}
		formatURL() {}
	}
	export class NekoLove {
		BaseURL: string;
		endpoints: [];
		constructor() {
			this.BaseURL = 'https://neko-love.xyz/api/v1/';
		}
		formatURL() {}
	}
}
