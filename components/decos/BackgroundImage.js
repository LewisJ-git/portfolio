import { motion } from "framer-motion";
import {
	bezier_sharp,
	bezier_curved,
	animate,
	flicker_fast,
	flicker_slow,
} from "../libs/Animations";
import Image from "next/image";

const BackgroundImage = ({
	initialX = 0,
	initialY = 0,
	isSharp = true,
	duration = 0,
	slowFlicker = false,
	rotate = 0,
	opacity,
	zIndex,
	source,
	fit = "cover",
	size = "100vw",
	top = null,
	left = null,
	right = null,
	bottom = null,
}) => {
	return (
		<motion.div
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
				top,
				left,
				right,
				bottom,
				zIndex,
				transform: `rotate(${rotate})`,
				filter: `opacity(${opacity})`,
			}}
			className="w-full h-full fixed left-0 top-0">
			<Image
				src={source}
				alt="bgimg"
				layout="fill"
				objectFit={fit}
				sizes={size}
			/>
		</motion.div>
	);
};

export default BackgroundImage;
