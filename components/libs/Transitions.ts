import { EasingFunction, cubicBezier, Transition } from "framer-motion";

export const bezierSharp: EasingFunction = cubicBezier(0, 1, 0, 1);
export const bezierCurved: EasingFunction = cubicBezier(0, 1, 1, 1);

export class Transitions {
	transition: Transition;

	constructor(duration: number, ease: EasingFunction | string, delay?: number | any) {
		this.transition = {
			duration: duration ?? 0,
			ease: ease ?? "linear",
			delay: delay ?? 0
		};
	}
	staggerChildren = (multiplier: number, index: number): Transition => {
		if (this.transition.delay || this.transition.delay == 0) {
			this.transition.delay = this.transition.delay + multiplier * index;
		}
		return this.transition;
	};
	playInf = (type: "loop" | "reverse" | "mirror"): Transition => {
		this.transition = { ...{ repeat: Infinity, repeatType: type } };
		return this.transition;
	};
}
