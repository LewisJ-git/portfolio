import { motion } from "framer-motion";
import { animate } from "../libs/Animations";

const Diamond = ({
	initialX = 0,
	initialY = 0,
	top = null,
	left = null,
	right = null,
	bottom = null,
	transition,
	opacity,
	rotate = 0,
	size = 0,
	zIndex = 0,
	borderWidth = 0,
	borderColor = "rgba(0, 0, 0, 0)",
	backgroundColor = "rgba(0, 0, 0, 0)",
	mixBlendMode = "",
}) => {
	return (
		<motion.div
			variants={animate(initialX, initialY, opacity, rotate, transition)}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ once: true }}
			style={{ zIndex, mixBlendMode }}
			className="h-full w-full relative">
			<div
				style={{
					top,
					left,
					right,
					bottom,
					width: size,
					height: size,
					backgroundColor,
					borderWidth,
					borderColor,
				}}
				className="absolute rotate-45"
			/>
		</motion.div>
	);
};

export default Diamond;
