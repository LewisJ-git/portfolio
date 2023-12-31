import { motion } from "framer-motion";
import { animate } from "../libs/Animations";

const AnimatedTitle = ({
	initialX = 0,
	initialY = 0,
	transition,
	opacity,
	classname = "",
	text = "",
	rotate = 0,
}) => {
	return (
		<motion.h1
			variants={animate(initialX, initialY, opacity, rotate, transition)}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ once: true }}
			className={classname}>
			{text}
		</motion.h1>
	);
};

export default AnimatedTitle;
