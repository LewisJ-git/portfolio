const bezier_sharp = (duration, delay = 0) => {
	return {
		duration,
		ease: [0, 1, 0, 1],
		delay,
	};
};
const bezier_curved = (duration, delay = 0) => {
	return {
		duration,
		ease: [0, 1, 1, 1],
		delay,
	};
};
const flicker_fast = (endOpacity = 1) => {
	return new Array(0, 0.6, 0, 0.4, 0, 0.8, 0.1, endOpacity);
};
const flicker_slow = (endOpacity = 1) => {
	return new Array(0, 0.4, 0.6, 0.1, 0.7, 0, 0, 0.8, 0.4, 0.8, endOpacity);
};
const flicker_immediate = (endOpacity = 1) => {
	return new Array(0, endOpacity);
};
const animate = (initialX, initialY, opacity, rotate, transition) => {
	return {
		initial: {
			translateX: initialX,
			translateY: initialY,
			opacity: 0,
			rotate: `${rotate}deg`,
		},
		animate: {
			translateX: 0,
			translateY: 0,
			opacity,
			rotate: `${rotate}deg`,
			transition,
		},
		exit: {
			translateX: initialX,
			translateY: initialY,
			opacity: 0,
			rotate: `${rotate}deg`,
		},
	};
};
const animate_size = (width, height, transition) => {
	return {
		initial: {
			width: 0,
			height: 0,
		},
		animate: {
			width,
			height,
			transition,
		},
		exit: {
			width: 0,
			height: 0,
		},
	};
};
const animate_clip = (initialPath = "", finalPath = "", transition) => {
	return {
		initial: {
			clipPath: initialPath,
		},
		animate: {
			clipPath: finalPath,
			transition,
		},
		exit: {
			clipPath: initialPath,
		},
	};
};
const animate_path = (transition) => {
	return {
		initial: {
			pathLength: 0,
		},
		animate: {
			pathLength: 1,
			transition,
		},
		exit: {
			pathLength: 0,
		},
	};
};
const animate_path_stroke = (transition, initialStroke, finalStroke) => {
	return {
		initial: {
			pathLength: 0,
			stroke: initialStroke,
		},
		animate: {
			pathLength: 1,
			opacity: flicker_slow,
			stroke: finalStroke,
			transition,
		},
		exit: {
			pathLength: 0,
			stroke: initialStroke,
		},
	};
};
const hiddenMask = `repeating-linear-gradient(225deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(225deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export {
	bezier_sharp,
	bezier_curved,
	flicker_fast,
	flicker_slow,
	flicker_immediate,
	animate,
	animate_size,
	animate_clip,
	animate_path,
	animate_path_stroke,
	hiddenMask,
	visibleMask,
};
