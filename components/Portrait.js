import PortraitImg from "../public/portrait.jpg";
import AnimatedText from "./decos/AnimatedText";
import {
	animate,
	bezier_curved,
	bezier_sharp,
	flicker_fast,
	flicker_immediate,
} from "./libs/Animations";
import ForegroundImage from "./decos/ForegroundImage";
import { motion } from "framer-motion";
import AnimatedContainer from "./decos/AnimatedContainer";

const Portrait = () => {
	return (
		<span className="h-auto w-full flex justify-center content-center flex-col items-center">
			<div className="relative">
				<AnimatedContainer
					initialX={100}
					initialY={-100}
					opacity={flicker_fast(0.4)}
					transition={bezier_sharp(0.8, 0.9)}
					classname="w-full h-full bg-gray-600 absolute bottom-[-40px] left-[-40px] z-[-2]"
				/>
				<ForegroundImage
					initialX={-100}
					initialY={100}
					opacity={flicker_immediate(1)}
					transition={bezier_curved(1, 0.8)}
					source={PortraitImg}
					classname="w-full h-auto absolute z-[10] top-0 right-0"
				/>
			</div>
			<div className="p-5 text-xl font-mono text-center">
				<AnimatedText
					text="My self-portrait using pencil that won a gold medal from the 2018 Texas High School Visual Art Scholastic Event (VASE)"
					staggerDelay={0.005}
					duration={1}
					delay={1}
				/>
			</div>
		</span>
	);
};

export default Portrait;
