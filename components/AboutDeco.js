import BackgroundImage from "./decos/BackgroundImage";
import nameLogo from "../public/name-logo.svg";
import Diamond from "./decos/Diamond";
import Background from "./decos/Background";
import {
	animate_clip,
	bezier_sharp,
	bezier_curved,
	flicker_slow,
} from "./libs/Animations";
import { motion } from "framer-motion";

const AboutDeco = () => {
	return (
		<>
			<Diamond
				initialX={300}
				size={600}
				top={-670}
				right={0}
				zIndex={2}
				borderWidth={8}
				transition={bezier_curved(0.8)}
				opacity={flicker_slow(1)}
				borderColor="rgb(16, 185, 129)"
				mixBlendMode="color-dodge"
			/>
			<Diamond
				initialX={400}
				size={1000}
				top={-800}
				right={-20}
				zIndex={2}
				transition={bezier_sharp(1.1)}
				opacity={flicker_slow(1)}
				borderWidth={8}
				borderColor="rgba(206, 255, 0, 0.8)"
				mixBlendMode="color-dodge"
			/>
			<div className="w-full h-full absolute top-[125px] left-[-20vw] z-[6] filter hue-rotate-[-30deg] overflow-hidden">
				<BackgroundImage
					initialX={-400}
					transition={bezier_curved(1)}
					opacity={flicker_slow(0.2)}
					source={nameLogo}
				/>
			</div>
			<div className="filter hue-rotate-[-190deg] h-[125px] w-full brightness-75 relative">
				<Background src="/site-bg-2.png" />
				<motion.div
					variants={animate_clip(
						"polygon(100% 0, 100% 60%, 100% 60%, 100% 100%, 0 100%, 0 0)",
						"polygon(40% 0, 40% 60%, 100% 60%, 100% 100%, 0 100%, 0 0)",
						bezier_curved(1, 0.4)
					)}
					initial="initial"
					animate="animate"
					exit="exit"
					className="absolute bottom-0 w-full h-[125px] z-[6] bg-black"
				/>
				<div className="absolute bottom-0 w-full h-full z-[1] bg-gradient-to-r from-black to-transparent" />
			</div>
			<div className="filter hue-rotate-[-80deg] h-[125px] w-full brightness-75 relative">
				<Background src="/site-bg-2.png" />
				<motion.div
					variants={animate_clip(
						"polygon(100% 0, 100% 60%, 100% 60%, 100% 100%, 0 100%, 0 0)",
						"polygon(60% 0, 60% 60%, 100% 60%, 100% 100%, 0 100%, 0 0)",
						bezier_curved(1, 0.4)
					)}
					initial="initial"
					animate="animate"
					exit="exit"
					className="absolute bottom-0 w-full h-[125px] z-[6] bg-black"
				/>
				<div className="absolute bottom-0 w-full h-full z-[1] bg-gradient-to-l from-black to-transparent" />
			</div>
		</>
	);
};

export default AboutDeco;
