export interface fadeInterface {
	opacity: number | Array<number>;
}

const randomOpacity = (): Array<number> => {
	let arr: Array<number> = [];
	for (let i = 0; i < 10; i++) {
		arr.push(Math.random() * 10 < 9 ? 1 : 0.7);
	}
	return arr;
};

export class Fading implements fadeInterface {
	opacity: number | Array<number>;
	constructor(endOpacity: number, fadeType?: string) {
		switch (fadeType) {
			case "fast":
				this.opacity = [0, 0.6, 0, 0.4, 0, 0.8, 0.1, endOpacity];
				break;
			case "slow":
				this.opacity = [0, 0.4, 0.6, 0.1, 0.7, 0, 0.8, 0.4, 0.8, endOpacity];
				break;
			case "immediate":
				this.opacity = [0, endOpacity];
				break;
			case "random":
				this.opacity = randomOpacity();
				break;
			default:
				this.opacity = endOpacity;
		}
	}
}
