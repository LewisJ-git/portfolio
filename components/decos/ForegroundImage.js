import { motion } from "framer-motion";
import Image from "next/image";
import { animate, flicker_immediate } from "../libs/Animations";

const ForegroundImage = ({
	source,
	initialX = 0,
	initialY = 0,
	opacity = flicker_immediate(1),
	rotate = 0,
	transition,
	className = "",
}) => {
	return (
		<motion.div
			variants={animate(initialX, initialY, opacity, rotate, transition)}
			whileInView="animate"
			initial="initial"
			viewport={{ once: true }}
			exit="exit"
			className={className}>
			<Image src={source} alt="foreground-image" />
		</motion.div>
	);
};

export default ForegroundImage;
