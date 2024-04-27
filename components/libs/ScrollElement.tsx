import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { containerInterface } from "../interfaces";

interface motionProp extends containerInterface {
	direction: "left" | "right" | "up" | "down";
}

const ScrollElement = (props: motionProp) => {
	const ref = useRef(null);
	const { scrollY } = useScroll({
		target: ref,
		// offset: ["start end", "end end"],
	});
	const scrollDirection = {
		...(props.direction == "left" && {
			left: useSpring(scrollY, {
				stiffness: 300,
				damping: 200,
			}),
		}),
		...(props.direction == "right" && {
			right: useSpring(scrollY, {
				stiffness: 300,
				damping: 200,
			}),
		}),
	};

	return (
		<motion.div
			ref={ref}
			style={scrollDirection}
			className={props.classname}
		>
			{props.children}
		</motion.div>
	);
};

export default ScrollElement;
