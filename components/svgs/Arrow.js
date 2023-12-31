import { motion } from "framer-motion";
import { animate_path } from "../libs/Animations";

const Arrow = ({ classname = "", transition }) => {
	return (
		<motion.svg
			className={classname}
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 50 50"
			preserveAspectRatio="none">
			<g>
				<motion.path
					variants={animate_path(transition)}
					initial="initial"
					whileInView="animate"
					exit="exit"
					strokeWidth="25"
					stroke="rgba(255, 255, 255, 1)"
					d="M25 0 L25 50"
				/>
			</g>
		</motion.svg>
	);
};

export default Arrow;
