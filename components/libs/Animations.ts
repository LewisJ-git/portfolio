import { Variants, Transition } from "framer-motion";

export interface animateParam {
	opacity?: number | Array<number>;
	transition?: Transition;
	initialX?: number;
	initialY?: number;
	width?: number;
	height?: number;
	initialClip?: string;
	finalClip?: string;
	rotate?: number;
	animatePath?: boolean;
	initialStroke?: string;
	finalStroke?: string;
}

export class Animate {
	variant: Variants;
	constructor(param: animateParam) {
		this.variant = { initial: {}, animate: {}, exit: {} };
		this.variant.initial = this.variant.exit = {
			...(param.opacity && { opacity: 0 }),
			...(param.initialX && { translateX: param.initialX }),
			...(param.initialY && { translateY: param.initialY }),
			...(param.width && { width: 0 }),
			...(param.height && { height: 0 }),
			...(param.initialClip && param.finalClip && { clipPath: param.initialClip }),
			...(param.rotate && { rotate: "0deg" }),
			...(param.animatePath && { pathLength: 0 }),
			...(param.initialStroke && param.finalStroke && { stroke: param.initialStroke })
		};
		this.variant.animate = {
			...(param.opacity && { opacity: param.opacity }),
			...(param.transition && { transition: param.transition }),
			...(param.initialX && { translateX: 0 }),
			...(param.initialY && { translateY: 0 }),
			...(param.width && { width: param.width }),
			...(param.height && { height: param.height }),
			...(param.initialClip && param.finalClip && { clipPath: param.finalClip }),
			...(param.rotate && { rotate: `${param.rotate}deg` }),
			...(param.animatePath && { pathLength: 1 }),
			...(param.initialStroke && param.finalStroke && { stroke: param.finalStroke })
		};
	}
}
