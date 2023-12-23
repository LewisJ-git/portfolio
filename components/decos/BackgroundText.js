import { motion } from "framer-motion";
import { animate } from "../libs/Animations";

const BackgroundText = ({
	text = "",
	size = 1,
	rotate = 0,
	initialX = 0,
	initialY = 0,
	transition,
	opacity,
	zIndex = 0,
	top = null,
	left = null,
	right = null,
	bottom = null,
}) => {
	return (
		<motion.h1
			variants={animate(initialX, initialY, opacity, rotate, transition)}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ once: true }}
			style={{
				fontSize: `${size}px`,
				zIndex,
				transform: `rotate(${rotate})`,
				top,
				left,
				right,
				bottom,
				textSizeAdjust: "none",
				WebkitTextSizeAdjust: "none",
				MozTextSizeAdjust: "none",
			}}
			className="select-none fixed overflow-clip leading-[12rem] tracking-tighter">
			{text}
		</motion.h1>
	);
};

export default BackgroundText;
