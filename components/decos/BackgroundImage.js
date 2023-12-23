import { motion } from "framer-motion";
import { animate } from "../libs/Animations";
import Image from "next/image";

const BackgroundImage = ({
	initialX = 0,
	initialY = 0,
	transition,
	rotate = 0,
	opacity,
	zIndex,
	source,
	top = null,
	left = null,
	right = null,
	bottom = null,
}) => {
	return (
		<motion.div
			variants={animate(initialX, initialY, opacity, rotate, transition)}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ once: true }}
			style={{
				top,
				left,
				right,
				bottom,
				zIndex,
				transform: `rotate(${rotate})`,
			}}
			className="w-full h-full fixed left-0 top-0">
			<Image src={source} alt="background-image" layout="fill" />
		</motion.div>
	);
};

export default BackgroundImage;
