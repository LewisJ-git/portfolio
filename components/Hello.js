import Background from "./decos/Background";
import { bezier_curved } from "./libs/Animations";
import Name from "./svgs/Name";
import AnimatedMask from "./decos/AnimatedMask";

const Hello = () => {
	return (
		<div className="h-[500px] relative overflow-hidden">
			<Background src="/site-bg-2.png" />
			<h1 className="absolute bottom-[300px] text-[5rem] z-[5] w-full px-[4rem] text-right leading-[0px]">
				Hello, I&apos;m
				<div className="flex h-10 w-auto justify-end m-[-20px]">
					<Name />
				</div>
			</h1>
			<AnimatedMask
				startMask="polygon(100% 0, 100% 80%, 100% 80%, 100% 100%, 0 100%, 0 0)"
				endMask="polygon(20% 0, 20% 80%, 100% 80%, 100% 100%, 0 100%, 0 0)"
				classname="absolute bottom-0 w-full h-full z-[6] bg-black"
				transition={bezier_curved(0.8)}
			/>
			<div className="absolute bottom-0 w-full h-full z-[1] bg-gradient-to-t from-black to-transparent" />
		</div>
	);
};

export default Hello;
