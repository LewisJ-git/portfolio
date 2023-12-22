import Background from "./Background";
import { motion } from "framer-motion";
import { animate_clip, bezier_curved } from "../libs/Animations";
import Diamond from "./Diamond";

const Quotes = () => {
	return (
		<div className="relative top-0 h-[700px] w-full">
			<div className="absolute top-0 rotate-[180deg] filter hue-rotate-[-190deg] h-[700px] w-full">
				<Background src="site-bg-1.png" />
			</div>

			<motion.div
				variants={animate_clip(
					"polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
					"polygon(0 0, 100% 0, 100% 100%, 0 100%, 26% 79%)",
					bezier_curved(0.8)
				)}
				initial="initial"
				animate="animate"
				exit="exit"
				className="absolute bottom-0 w-full h-full z-[2] bg-black"
			/>
			<div className="absolute bottom-0 w-full h-full z-[1] bg-gradient-to-b from-black to-transparent" />
		</div>
	);
};

export default Quotes;
