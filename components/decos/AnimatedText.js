import { motion } from "framer-motion";
import { animate, bezier_sharp, flicker_immediate } from "../libs/Animations";

const AnimatedText = ({
	text = "",
	staggerDelay = 0,
	duration = 0,
	delay = 0,
	opacity = flicker_immediate,
}) => {
	return (
		<span>
			{Array.from(text).map((char, index) => {
				return (
					<motion.span
						variants={animate(
							0,
							-100,
							opacity,
							0,
							bezier_sharp(duration, delay + staggerDelay * index)
						)}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						key={index}>
						{char}
					</motion.span>
				);
			})}
		</span>
	);
};

export default AnimatedText;
