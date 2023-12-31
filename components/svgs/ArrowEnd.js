import { motion } from "framer-motion";
import { animate_path, bezier_curved } from "../libs/Animations";
import { arrow_paths } from "./Paths";

const ArrowEnd = ({ classname = "", delay }) => {
	return (
		<motion.svg
			className={classname}
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="100"
			viewBox="0 0 50 100"
			preserveAspectRatio="none">
			<g>
				{arrow_paths.map((path, index) => {
					return (
						<motion.path
							key={index}
							variants={animate_path(
								bezier_curved(0.8, delay + 0.1 * index)
							)}
							initial="initial"
							whileInView="animate"
							exit="exit"
							strokeWidth="25"
							stroke="rgba(255, 255, 255, 1)"
							d={path}
						/>
					);
				})}
			</g>
		</motion.svg>
	);
};

export default ArrowEnd;
