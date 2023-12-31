import { motion } from "framer-motion";
import { animate_clip } from "../libs/Animations";

const AnimatedMask = ({
	transition,
	startMask = "",
	endMask = "",
	classname = "",
}) => {
	return (
		<motion.div
			variants={animate_clip(startMask, endMask, transition)}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ once: true }}
			className={classname}
		/>
	);
};

export default AnimatedMask;
