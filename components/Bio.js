import Portrait from "../components/Portrait";
import flower1 from "../public/flower-1.png";
import AnimatedText from "./decos/AnimatedText";
import {
	bezier_curved,
	bezier_sharp,
	flicker_fast,
	flicker_immediate,
	flicker_slow,
} from "./libs/Animations";
import ForegroundImage from "./decos/ForegroundImage";
import Diamond from "./decos/Diamond";
import AnimatedContainer from "./decos/AnimatedContainer";

const Bio = () => {
	return (
		<div className="m-10 p-10 flex flex-row relative">
			<div className="p-10 flex flex-col content-between">
				<div className="self-start w-[60%] m-5 p-5 relative">
					<AnimatedText
						text="I'm a computer science undergraduate at the University of Houston. And I love designing and developing web apps, primarily working with React.js."
						duration={0.5}
						delay={0.8}
						initialY={100}
					/>
					<AnimatedContainer
						initialX={-200}
						opacity={flicker_immediate(1)}
						transition={bezier_sharp(0.8, 1)}
						classname="absolute top-0 left-[-20px] w-full h-full z-[-1] bg-[#9e5dff30]"
					/>
					<AnimatedContainer
						initialX={200}
						opacity={flicker_immediate(1)}
						transition={bezier_sharp(0.8, 1)}
						classname="absolute top-[20px] left-0 w-full h-full z-[-1] bg-[#975afa27]"
					/>
				</div>
				<div className="self-end w-[60%] m-5 p-5 text-right relative">
					<AnimatedText
						text="As a passionate front-end developer, I really enjoy exploring its' ecosystem, spending time discovering about the ever-expanding new Javascript frameworks, or learning web design principles."
						duration={0.5}
						delay={1}
						initialY={-100}
					/>
					<AnimatedContainer
						initialX={200}
						opacity={flicker_immediate(1)}
						transition={bezier_sharp(0.8, 1.1)}
						classname="absolute bottom-0 right-[-20px] w-[110%] h-[100%] z-[-1] bg-[#fbb06f38]"
					/>
					<AnimatedContainer
						initialX={-200}
						opacity={flicker_immediate(1)}
						transition={bezier_sharp(0.8, 1.1)}
						classname="absolute bottom-[-20px] right-[0px] w-[110%] h-[100%] z-[-1] bg-[#fb6f6f31]"
					/>
				</div>
			</div>
			<Portrait />
			<ForegroundImage
				source={flower1}
				initialX={-100}
				opacity={flicker_slow(0.3)}
				rotate={45}
				transition={bezier_curved(1, 0.6)}
				className="absolute w-[500px] h-auto left-[-100px] bottom-0 rotate-45"
			/>
			<div className="absolute top-0 right-0 h-full w-full z-[-1]">
				<Diamond
					initialY={300}
					size={950}
					bottom={-600}
					right={-500}
					zIndex={5}
					borderWidth={32}
					transition={bezier_curved(0.8, 1.4)}
					opacity={flicker_slow(1)}
					borderColor="rgba(134, 72, 240, 0.248)"
				/>
			</div>
		</div>
	);
};

export default Bio;
