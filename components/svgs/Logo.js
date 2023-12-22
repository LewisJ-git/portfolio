import { motion } from "framer-motion";
import { animate_path, bezier_curved } from "../libs/Animations";
import { logo_paths } from "./Paths";

const Logo = () => {
	return (
		<motion.svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="40.000000pt"
			height="40.000000pt"
			viewBox="0 0 1000.000000 1000.000000"
			preserveAspectRatio="xMidYMid meet">
			<motion.defs>
				<motion.linearGradient id="gradient">
					<motion.stop
						transition={{ duration: 2, delay: 0.5 }}
						animate={{
							stopColor: ["#00000000", "#ffffff"],
						}}
					/>
				</motion.linearGradient>
			</motion.defs>

			<g
				transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
				fill="url(#gradient)"
				stroke="none">
				{logo_paths.map((path, index) => {
					return (
						<motion.path
							key={index}
							variants={animate_path(
								bezier_curved(0.8, 0.1 * 2 * index)
							)}
							initial="initial"
							animate="animate"
							exit="exit"
							strokeWidth="200"
							stroke="rgba(255, 255, 255, 1)"
							strokeLinecap="round"
							d={path}
						/>
					);
				})}
			</g>
		</motion.svg>
	);
};

export default Logo;
