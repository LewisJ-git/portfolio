import { motion } from "framer-motion";

const AnimatedText = ({
	text = "",
	duration = 0,
	delay = 0,
	opacity = flicker_immediate(1),
	initialX = 0,
	initialY = 0,
}) => {
	return (
		<motion.span
			variants={animate(
				initialX,
				initialY,
				opacity,
				0,
				bezier_curved(duration, delay)
			)}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}>
			{text}
		</motion.span>
	);
};

export default AnimatedText;
