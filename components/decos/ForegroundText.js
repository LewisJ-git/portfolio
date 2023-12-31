import { motion } from "framer-motion";
import { animate } from "../libs/Animations";

const ForegroundText = ({
	text = "",
	classname = "",
	initialX = 0,
	initialY = 0,
	opacity,
	rotation = 0,
	transition,
}) => {
	return (
		<motion.h1
			variants={animate(
				initialX,
				initialY,
				opacity,
				rotation,
				transition
			)}
			className={classname}>
			{text}
		</motion.h1>
	);
};

export default ForegroundText;
