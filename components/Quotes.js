import Background from "./decos/Background";
import { motion } from "framer-motion";
import {
	animate_clip,
	bezier_curved,
	bezier_sharp,
	flicker_fast,
	flicker_immediate,
	flicker_slow,
} from "./libs/Animations";
import Diamond from "./decos/Diamond";
import AnimatedText from "./decos/AnimatedText";
import hand1 from "../public/hand-1.png";
import hand2 from "../public/hand-2.png";
import ForegroundImage from "./decos/ForegroundImage";

const Quotes = () => {
	return (
		<div className="relative h-[700px] w-full">
			<div className="absolute top-0 rotate-[180deg] filter hue-rotate-[-190deg] h-[700px] w-full z-[-4]">
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
				className="absolute bottom-0 w-full h-full z-[-3] bg-black"
			/>
			<div className="absolute bottom-0 w-full h-full z-[-2] bg-gradient-to-b from-black to-transparent" />
			<div className="flex justify-center content-center w-full h-full flex-col">
				<h2 className="relative z-[2] text-4xl p-10 m-2 leading-loose text-center font-display">
					<q className="font-serif">
						<i>
							<AnimatedText
								staggerDelay={0.03}
								duration={0.5}
								delay={0.4}
								text="Art is a language, an instrument of knowledge, and instrument of communication."
							/>
						</i>
					</q>
					<br />
					<AnimatedText
						text="- Jean Dubuffet"
						duration={2}
						delay={1.5}
						initialY={300}
					/>
				</h2>
			</div>
			<div className="absolute top-0 right-0 h-full w-full z-[-1] flex flex-row justify-between">
				<ForegroundImage
					source={hand1}
					initialX={-400}
					opacity={flicker_immediate(0.4)}
					transition={bezier_curved(2, 1.6)}
					classname="absolute left-0 top-0 w-full h-[50%]"
				/>
				<ForegroundImage
					source={hand2}
					initialX={400}
					opacity={flicker_immediate(0.4)}
					transition={bezier_curved(2, 1.6)}
					classname="absolute right-0 top-0 w-full h-[50%]"
				/>
			</div>
		</div>
	);
};

export default Quotes;
