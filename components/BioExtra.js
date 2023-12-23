import ForegroundImage from "./decos/ForegroundImage";
import roman1 from "../public/roman-1.png";
import roman2 from "../public/roman-2.png";
import roman3 from "../public/roman-3.png";
import {
	flicker_immediate,
	bezier_curved,
	flicker_fast,
} from "./libs/Animations";
import AnimatedText from "./decos/AnimatedText";

const BioExtra = () => {
	return (
		<div className="m-10 p-10 flex flex-col">
			<div className="w-full h-auto place-self-end flex flex-col items-end relative">
				<ForegroundImage
					source={roman3}
					initialX={200}
					opacity={flicker_immediate(0.3)}
					transition={bezier_curved(1.6, 1.6)}
					className="w-auto h-auto"
				/>
				<div className="absolute bottom-[5%] left-0 px-10 w-[40%]">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={-200}
						text="Art is a method of communication, a medium for story telling."
					/>
				</div>
			</div>
			<div className="w-auto h-auto items-center relative">
				<div className="absolute top-[5%] right-0 px-10 w-[40%] text-end">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={200}
						text="And I believe that websites are another form of art that we can use to illustrate our story, our vision to others."
					/>
				</div>
				<ForegroundImage
					source={roman2}
					initialY={200}
					opacity={flicker_immediate(0.3)}
					transition={bezier_curved(1.9, 1.4)}
					className="w-full h-auto"
				/>
				<div className="absolute bottom-[10%] left-0 px-10 w-[40%]">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={-200}
						text="I love to create more complex, energetic, and dynamic visuals that work seamlessly with user interfaces to really enhance the user experiences in websites."
					/>
				</div>
			</div>
			<div className="w-auto h-auto items-start relative">
				<div className="absolute top-[5%] right-0 px-10 w-[40%] text-end">
					<AnimatedText
						duration={1}
						delay={1.2}
						initialX={200}
						text="This makes
					websites more engaging for user and thus, get users more
					invested in our stories rather than a boring and soulless
					UI."
					/>
				</div>
				<ForegroundImage
					source={roman1}
					initialX={-200}
					opacity={flicker_immediate(0.3)}
					transition={bezier_curved(1.6, 1.6)}
					className="w-auto h-auto place-self-start"
				/>
			</div>
		</div>
	);
};

export default BioExtra;
