import { motion, TargetAndTransition, Variants } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface motionProp {
	children?: ReactNode;
	animation: Variants;
	classname?: string;
	forceAnimate?: boolean;
	animateOnce?: boolean;
	keyName?: string;
	style?: CSSProperties;
	onHover?: TargetAndTransition;
}

const MotionElement = (props: motionProp) => {
	const conditionalArgs = {
		...(props.forceAnimate && { animate: "animate" }),
		...(props.animateOnce && { viewport: { once: true } }),
		...(props.keyName && { key: props.keyName }),
		...(props.style && { style: props.style }),
		...(props.onHover && { whileHover: props.onHover })
	};
	return (
		<motion.div
			variants={props.animation}
			className={props.classname}
			whileInView="animate"
			initial="initial"
			exit="exit"
			{...conditionalArgs}>
			{props.children}
		</motion.div>
	);
};

export default MotionElement;
