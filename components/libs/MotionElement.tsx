import {
	motion,
	TargetAndTransition,
	useScroll,
	useSpring,
	useTransform,
	Variants,
} from "framer-motion";
import { CSSProperties, ReactNode, useRef } from "react";

interface motionProp {
	children?: ReactNode;
	animation: Variants;
	classname?: string;
	forceAnimate?: boolean;
	animateOnce?: boolean;
	keyName?: string;
	style?: CSSProperties;
	onHover?: TargetAndTransition;
	onClick?: any | undefined;
	layoutID?: string;
	scrollDirection?: "left" | "right" | "up" | "down";
	scrollMove?: {
		scrollAxis: "x" | "y";
		range: Array<Number>;
	};
}

const MotionElement = (props: motionProp) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	const translate = props.scrollMove
		? useTransform(scrollYProgress, [0, 1], props.scrollMove?.range)
		: 0;
	const spring = useSpring(translate, {
		stiffness: 300,
		damping: 200,
	});
	const scrollAnimate = {
		...(props.scrollMove?.scrollAxis == "x" && {
			translateX: spring,
		}),
		...(props.scrollMove?.scrollAxis == "y" && {
			translateY: spring,
		}),
	};
	const conditionalArgs = {
		...(props.forceAnimate && { animate: "animate" }),
		...(props.animateOnce && { viewport: { once: true } }),
		...(props.keyName && { key: props.keyName }),
		...(props.onHover && { whileHover: props.onHover }),
		...(props.onClick && { onClick: props.onClick }),
		...(props.layoutID && { layoutID: props.layoutID }),
	};
	return (
		<motion.div
			ref={ref}
			style={{ ...props.style, ...scrollAnimate }}
			variants={props.animation}
			className={props.classname}
			whileInView="animate"
			initial="initial"
			exit="exit"
			{...conditionalArgs}
		>
			{props.children}
		</motion.div>
	);
};

export default MotionElement;
