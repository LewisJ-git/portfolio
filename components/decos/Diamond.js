import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
	bezier_sharp,
	bezier_curved,
	animate,
	flicker_immediate,
} from "../libs/Animations";

const Diamond = ({
	initialX = 0,
	initialY = 0,
	top = null,
	left = null,
	right = null,
	bottom = null,
	isSharp = true,
	duration = 0,
	rotate = 0,
	size = 0,
	zIndex = 0,
	borderWidth = 0,
	borderColor = "rgba(0, 0, 0, 0)",
	backgroundColor = "rgba(0, 0, 0, 0)",
	mixBlendMode = null,
	onViewEnter = false,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.div
			ref={ref}
			variants={animate(
				initialX,
				initialY,
				flicker_immediate,
				rotate,
				isSharp ? bezier_sharp(duration) : bezier_curved(duration)
			)}
			initial="initial"
			animate={onViewEnter ? (isInView ? "animate" : "") : "animate"}
			exit="exit"
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
