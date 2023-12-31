import { motion } from "framer-motion";
import { animate_path, bezier_curved } from "../libs/Animations";

const Bullet = ({ classname = "", delay }) => {
	return (
		<motion.svg
			className={classname}
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="100"
			viewBox="0 0 50 100"
			preserveAspectRatio="none">
			<motion.path
				variants={animate_path(bezier_curved(0.8, delay))}
				initial="initial"
				whileInView="animate"
				exit="exit"
				strokeWidth="20"
				stroke="rgba(255, 255, 255, 1)"
				d="M-20 100 L50 60 L-10 30"
			/>
		</motion.svg>
	);
};

export default Bullet;
