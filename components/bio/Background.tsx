import MotionSvg from "../libs/MotionSvg";
import { NameDesignPath } from "../../public/assets/icons/SVGPaths";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import MotionElement from "../libs/MotionElement";
import Line from "../decorations/Line";
import corner_icon from "../../public/assets/icons/personal/corner.svg";
import Image from "next/image";

const Background = () => {
	return (
		<>
			<Line
				classname="w-[200px] absolute h-[3px] top-[100px] left-[-10px] bg-midground opacity-80 z-[1] rotate-[-15deg] mix-blend-exclusion"
				delay={1.3}
			/>
			<Line
				classname="w-[200vw] absolute h-[3px] top-[-50px] left-[-200px] bg-midground opacity-80 z-[1] rotate-[-15deg] mix-blend-exclusion"
				delay={1.3}
			/>
			<Line
				classname="w-[200vw] absolute h-[3px] left-[-100px] top-0 bg-midground opacity-80 z-[1] rotate-[-15deg] mix-blend-exclusion"
				delay={1.1}
			/>
			<Line
				classname="w-[250vh] absolute h-[3px] right-[-100vh] top-0 bg-midground opacity-80 z-[1] rotate-[75deg] mix-blend-exclusion"
				delay={1.1}
			/>
			<Line
				classname="w-[140vh] absolute h-[3px] right-[30px] bottom-0 bg-midground opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={1.2}
			/>
			<Line
				classname="w-[100vh] absolute h-[3px] left-[-200px] bottom-0 bg-midground opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={0.9}
			/>
			<Line
				classname="w-[500px] absolute h-[3px] left-[-130px] top-0 bg-midground opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={0.9}
			/>
			<Line
				classname="w-[120vh] absolute h-[3px] right-[30px] bottom-0 bg-midground opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={1}
			/>
			<Line
				classname="w-[150vh] absolute h-[3px] right-[-200px]  bg-midground opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={1.6}
			/>
			<Line
				classname="w-[150vh] absolute h-[3px] right-[-160px]  bg-midground opacity-80 z-[1] rotate-[75deg] mix-blend-exclusion"
				delay={1.4}
			/>
			<Line
				classname="w-[100vh] absolute h-[3px] bg-midground left-[-100px] top-[200px] opacity-80 z-[1] rotate-[75deg] mix-blend-exclusion"
				delay={1.2}
			/>
			<Line
				classname="w-[200vh] absolute h-[3px] bg-midground bottom-0 right-[0px] opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={1.1}
			/>
			<Line
				classname="w-[200vh] absolute h-[3px] bg-midground bottom-0 right-[10px] opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={1.5}
			/>
			<Line
				classname="w-[200vh] absolute h-[3px] bg-midground bottom-0 left-[10px] opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
				delay={1.3}
			/>
			<div className="fixed top-[20%] bottom-0 my-auto rotate-[-105deg] w-[1299px] h-[678px] lg:right-[-50px] right-[-500px]">
				<MotionSvg
					paths={NameDesignPath}
					width={866}
					height={452}
					fill="#ff4365ff"
					aspectRatio="none"
					stroke="#ff4365ff"
					strokeWidth={7}
					isGradient={true}
					forceAnimate={true}
					animateOnce={true}
					gradTransition={new Transitions(0.5, bezierSharp).transition}
					animation={
						new Animate({
							initialX: -800,
							opacity: new Fading(1, "fast").opacity,
							animatePath: true,
							transition: new Transitions(1, bezierCurved, 1).transition
						}).variant
					}
					transform="translate(0.000000,452.000000) scale(0.100000,-0.100000)"
				/>
			</div>
			<div className="absolute bottom-0 right-0 z-[13]">
				<Image src={corner_icon} alt="corner-icon" width={35} height={35} />
			</div>
		</>
	);
};

export default Background;
