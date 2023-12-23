import { motion } from "framer-motion";
import {
	animate,
	bezier_sharp,
	bezier_curved,
	flicker_immediate,
} from "../libs/Animations";

const AnimatedText = ({
	text = "",
	staggerDelay = 0,
	duration = 0,
	delay = 0,
	opacity = flicker_immediate(1),
	initialX = 0,
	initialY = 0,
}) => {
	return (
		<span>
			{staggerDelay == 0 ? (
				<motion.div
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
				</motion.div>
			) : (
				Array.from(text).map((char, index) => {
					return (
						<motion.span
							variants={animate(
								initialX,
								initialY,
								opacity,
								0,
								bezier_sharp(
									duration,
									delay + staggerDelay * index
								)
							)}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							key={index}>
							{char}
						</motion.span>
					);
				})
			)}
		</span>
	);
};

export default AnimatedText;
