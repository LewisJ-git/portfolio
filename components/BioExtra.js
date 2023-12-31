import ForegroundImage from "./decos/ForegroundImage";
import roman1 from "../public/roman-1.png";
import roman2 from "../public/roman-2.png";
import roman3 from "../public/roman-3.png";
import {
	flicker_immediate,
	bezier_curved,
	flicker_slow,
	bezier_sharp,
	flicker_fast,
} from "./libs/Animations";
import AnimatedText from "./decos/AnimatedText";
import AnimatedMask from "./decos/AnimatedMask";
import Background from "./decos/Background";
import Diamond from "./decos/Diamond";
import ForegroundText from "./decos/ForegroundText";

const BioExtra = () => {
	return (
		<div className="my-10 py-10 flex flex-col flex-wrap relative">
			<ForegroundText
				text="PER"
				initialX={-200}
				opacity={flicker_fast(0.1)}
				transition={bezier_curved(1.2, 2.5)}
				classname="absolute top-[15%] left-0 text-[300px] leading-[0.8] z-[0] text-right opacity-10"
			/>
			<ForegroundText
				text="ARDUA"
				initialX={200}
				opacity={flicker_fast(0.1)}
				transition={bezier_curved(1.2, 2.5)}
				classname="absolute top-[30%] right-[-100px] text-[250px] leading-[0.8] z-[0] text-right opacity-10"
			/>
			<ForegroundImage
				source={roman3}
				initialX={200}
				opacity={flicker_immediate(0.3)}
				transition={bezier_curved(1.6, 1.6)}
				className="w-auto h-auto place-self-end"
			/>
			<div className="relative flex flex-col mx-20 px-20">
				<div className="place-self-start">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={-200}
						text="Art is a method of communication, a medium for story telling."
					/>
				</div>
				<div className="text-end">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={200}
						text="And I believe that websites are another form of art that we can use to illustrate our story, our vision to others."
					/>
				</div>
				<div className="bottom-0 filter hue-rotate-[-190deg] h-[150px] w-full brightness-75 z-[-1] absolute mx-[-10rem]">
					<Background src="/site-bg-2.png" />
					<AnimatedMask
						startMask="polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
						endMask="polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
						classname="absolute bottom-0 w-full h-[150px] z-[6] bg-black"
						transition={bezier_curved(1, 1.4)}
					/>
					<div className="absolute bottom-0 w-full h-full z-[0] bg-gradient-to-l from-black to-transparent" />
				</div>
				<Diamond
					initialY={300}
					size={250}
					right={-100}
					bottom={-100}
					zIndex={-1}
					borderWidth={8}
					transition={bezier_curved(0.8, 2.2)}
					opacity={flicker_slow(1)}
					borderColor="rgba(185, 16, 92, 0.4)"
					mixBlendMode="color-burn"
				/>
			</div>
			<ForegroundImage
				source={roman2}
				initialY={200}
				opacity={flicker_immediate(0.3)}
				transition={bezier_curved(1.9, 1.4)}
				className="w-full h-auto"
			/>
			<div className="relative flex flex-col mx-20 px-20">
				<div className="place-self-start">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={-200}
						text="I love to create more complex, energetic, and dynamic visuals that work seamlessly with user interfaces to really enhance the user experiences in websites."
					/>
				</div>
				<div className="bottom-0 filter hue-rotate-[-90deg] h-[100px] w-full brightness-75 z-[-1] absolute">
					<Background src="/site-bg-1.png" />
					<AnimatedMask
						startMask="polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
						endMask="polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
						classname="absolute bottom-0 w-full h-[100px] z-[6] bg-black"
						transition={bezier_curved(1, 1.3)}
					/>
					<div className="absolute bottom-0 w-full h-full z-[0] bg-gradient-to-r from-black to-transparent" />
				</div>
				<Diamond
					initialY={-400}
					size={300}
					bottom={0}
					left={20}
					zIndex={-1}
					transition={bezier_sharp(1.1, 2.1)}
					opacity={flicker_slow(1)}
					borderWidth={8}
					borderColor="rgba(93, 162, 253, 0.4)"
					mixBlendMode="color-burn"
				/>
			</div>
			<div className="w-auto h-auto place-self-start flex flex-row relative">
				<ForegroundImage
					source={roman1}
					initialX={-200}
					opacity={flicker_immediate(0.3)}
					transition={bezier_curved(1.6, 1.6)}
					className="w-full h-full"
				/>
				<div className="place-self-center">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={200}
						text="This makes websites more engaging for user and thus, get users more invested in our stories rather than a boring and soulless UI."
					/>
				</div>
				<div className="absolute w-full h-full">
					<Diamond
						initialY={-400}
						size={600}
						bottom={0}
						right={0}
						zIndex={-1}
						transition={bezier_sharp(1.1, 2.0)}
						opacity={flicker_slow(1)}
						borderWidth={16}
						borderColor="rgba(245, 93, 253, 0.4)"
						mixBlendMode="overlay"
					/>
				</div>
			</div>
			<ForegroundText
				text="AD"
				initialX={-200}
				opacity={flicker_fast(0.1)}
				transition={bezier_curved(1.2, 2.5)}
				classname="absolute p-10 bottom-[26%] left-[25%] text-[300px] leading-[0.8] filter z-[0] opacity-10"
			/>
			<ForegroundText
				text="ALTA"
				initialX={200}
				opacity={flicker_fast(0.1)}
				transition={bezier_curved(1.2, 2.5)}
				classname="absolute p-10 bottom-[6%] right-0 text-[270px] leading-[0.8] filter z-[0] opacity-10"
			/>
			<div className="bottom-[-150px] filter hue-rotate-[-210deg] h-[200px] w-full brightness-75 z-[-1] relative">
				<Background src="/site-bg-2.png" />
				<AnimatedMask
					startMask="polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 35%)"
					endMask="polygon(75% 0, 100% 0, 100% 100%, 75% 100%, 90% 50%)"
					classname="absolute bottom-0 w-full h-[200px] z-[6] bg-black"
					transition={bezier_curved(1, 1.3)}
				/>
				<div className="absolute bottom-0 w-full h-full z-[0] bg-gradient-to-r from-black to-transparent" />
			</div>
		</div>
	);
};

export default BioExtra;
