import BackgroundImage from "./decos/BackgroundImage";
import nameLogo from "../public/name-logo.svg";
import Diamond from "./decos/Diamond";
import Background from "./decos/Background";
import { animate_clip, bezier_curved } from "./libs/Animations";
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
				duration={0.8}
				isSharp={false}
				borderColor="rgb(16, 185, 129)"
				mixBlendMode="color-dodge"
			/>
			<Diamond
				initialX={400}
				size={1000}
				top={-800}
				right={-20}
				zIndex={2}
				isSharp={false}
				borderWidth={8}
				duration={1.1}
				borderColor="rgba(206, 255, 0, 0.8)"
				mixBlendMode="color-dodge"
			/>
			<div className="w-full absolute top-[100px] left-[-20vw] z-[6] filter hue-rotate-[-30deg] h-[80%] overflow-hidden">
				<BackgroundImage
					initialX={-400}
					isSharp={false}
					duration={1}
					opacity={0.2}
					slowFlicker={true}
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
