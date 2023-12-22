import { motion } from "framer-motion";
import {
	bezier_sharp,
	bezier_curved,
	animate,
	flicker_slow,
	flicker_fast,
} from "../libs/Animations";

const BackgroundText = ({
	text = "",
	size = 1,
	rotate = 0,
	initialX = 0,
	initialY = 0,
	isSharp = "true",
	duration = 0,
	zIndex = 0,
	slowFlicker = false,
	opacity = 1,
	top = null,
	left = null,
	right = null,
	bottom = null,
}) => {
	return (
		<motion.h1
			variants={animate(
				initialX,
				initialY,
				slowFlicker ? flicker_slow : flicker_fast,
				rotate,
				isSharp ? bezier_sharp(duration) : bezier_curved(duration)
			)}
			initial="initial"
			animate="animate"
			exit="exit"
			style={{
				fontSize: `${size}px`,
				zIndex,
				filter: `opacity(${opacity})`,
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
