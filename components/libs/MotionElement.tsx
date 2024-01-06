import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface motionProp {
	children?: ReactNode;
	animation: Variants;
	classname?: string;
	forceAnimate?: boolean;
	animateOnce?: boolean;
	key?: string;
}

const MotionElement = (props: motionProp) => {
	const conditionalArgs = {
		...(props.forceAnimate && { animate: "animate" }),
		...(props.animateOnce && { viewport: { once: true } }),
		...(props.key && { key: props.key })
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
