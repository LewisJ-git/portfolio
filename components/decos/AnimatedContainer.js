import { motion } from "framer-motion";
import { animate } from "../libs/Animations";

const AnimatedContainer = ({
	initialX = 0,
	initialY = 0,
	transition,
	opacity,
	rotate = 0,
	classname = "",
}) => {
	return (
		<motion.div
			variants={animate(initialX, initialY, opacity, rotate, transition)}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ once: true }}
			className={classname}
		/>
	);
};

export default AnimatedContainer;
