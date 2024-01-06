import { motion } from "framer-motion";
import { animate_clip } from "../libs/Animations";

const AnimatedMask = ({
	children,
	transition,
	startMask = "",
	endMask = "",
	parentClass = "",
	childClass = "",
}) => {
	return (
		<div className={parentClass}>
			{children}
			<motion.div
				variants={animate_clip(startMask, endMask, transition)}
				initial="initial"
				whileInView="animate"
				exit="exit"
				viewport={{ once: true }}
				className={childClass}
			/>
		</div>
	);
};

export default AnimatedMask;
