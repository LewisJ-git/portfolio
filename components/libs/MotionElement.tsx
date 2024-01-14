import { motion, Variants } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface motionProp {
	children?: ReactNode;
	animation: Variants;
	classname?: string;
	forceAnimate?: boolean;
	animateOnce?: boolean;
	keyName?: string;
	style?: CSSProperties;
}

const MotionElement = (props: motionProp) => {
	const conditionalArgs = {
		...(props.forceAnimate && { animate: "animate" }),
		...(props.animateOnce && { viewport: { once: true } }),
		...(props.keyName && { key: props.keyName }),
		...(props.style && { style: props.style })
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
