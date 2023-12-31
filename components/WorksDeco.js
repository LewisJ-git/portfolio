import Background from "./decos/Background";
import AnimatedMask from "./decos/AnimatedMask";
import {
	bezier_curved,
	animate_size,
	flicker_fast,
	flicker_immediate,
} from "./libs/Animations";
import AnimatedContainer from "./decos/AnimatedContainer";
import { motion } from "framer-motion";
import Arrow from "./svgs/Arrow";
import ArrowEnd from "./svgs/ArrowEnd";
import AnimatedTitle from "./decos/AnimatedTitle";
import Bullet from "./svgs/Bullet";
import AnimatedText from "./decos/AnimatedText";

const WorksDeco = () => {
	return (
		<div className="flex flex-row h-auto w-full mx-10">
			<div className="flex flex-row h-[300px]">
				<AnimatedTitle
					initialX={-300}
					opacity={flicker_fast(1)}
					transition={bezier_curved(0.8)}
					text="Works"
					classname="place-self-end text-[100px] px-5"
				/>
				<Arrow
					classname="h-[300px] opacity-30"
					transition={bezier_curved(1.8, 0.5)}
				/>
			</div>

			<div className="filter hue-rotate-[10deg] h-[900px] w-[100px] brightness-75 relative mx-5">
				<Background src="/site-bg-2.png" />
				<AnimatedMask
					startMask="polygon(0 0, 100% 0, 100% 100%, 0 100%)"
					endMask="polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
					classname="absolute bottom-0 w-full h-full z-[6] bg-black"
					transition={bezier_curved(1, 0.4)}
				/>
				<div className="absolute bottom-0 w-full h-full z-[1] bg-gradient-to-t from-black to-transparent" />
			</div>

			<div className="grid grid-cols-2 grid-rows-2 grid-rows-layout1">
				<Arrow
					classname="h-full opacity-60"
					transition={bezier_curved(1.2, 0.4)}
				/>
				<div>image</div>
				<div className="flex flex-row">
					<ArrowEnd classname="opacity-60" delay={1.6} />
					<Bullet classname="opacity-60" delay={2.4} />
				</div>

				<div className="flex text-5xl">
					<AnimatedText
						text="1st project"
						staggerDelay={0.01}
						duration={1}
						delay={2.6}
						opacity={flicker_immediate(1)}
					/>
				</div>
			</div>
		</div>
	);
};

export default WorksDeco;
