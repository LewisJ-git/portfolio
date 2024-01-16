import MotionSvg from "../libs/MotionSvg";
import { NameDesignPath } from "../../public/assets/icons/SVGPaths";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import MotionElement from "../libs/MotionElement";
import Line from "../decorations/Line";
import MaskElement from "../libs/MaskElement";

const Background = () => {
	return (
		<>
			<MotionElement
				animation={
					new Animate({
						initialX: 200,
						opacity: new Fading(1, "fast").opacity,
						transition: new Transitions(0.7, bezierSharp, 0.8).transition
					}).variant
				}
				classname="absolute bottom-[0px] right-[0px] w-[300px] h-[250px]"
				forceAnimate={true}
				animateOnce={true}>
				<MaskElement
					childClass="bg-midground w-full h-full rotate-[-15deg]"
					startMask="polygon(100% 74%, 100% 100%, 100% 100%, 100% 15%, 100% 0%, 100% 0%, 100% 29.21%, 100% 34.65%, 100% 67.31%)"
					endMask="polygon(0% 74%, 0% 100%, 100% 100%, 100% 8%, 92% 0%, 0% 0%, 0% 29.21%, 7.69% 34.65%, 7.69% 67.31%)"
					transition={new Transitions(0.7, bezierSharp, 1).transition}>
					<h1 className="text-background z-[11]relative">Credits</h1>
				</MaskElement>
			</MotionElement>
			<MotionElement
				classname="w-[600px] absolute h-auto border-b-4 border-midground right-[-30px] opacity-60 rotate-[75deg] bottom-0 bg-background z-[1]"
				forceAnimate={true}
				animateOnce={true}
				animation={
					new Animate({
						width: 600,
						transition: new Transitions(1, bezierCurved, 1).transition
					}).variant
				}>
				<div className="text-4xl p-2 relative">Front-end Developer</div>
			</MotionElement>
			<MotionElement
				classname="w-[800px] absolute h-auto border-b-4 border-midground right-[-200px] opacity-60 rotate-[75deg] top-[50px] bg-background z-[1]"
				forceAnimate={true}
				animateOnce={true}
				animation={
					new Animate({
						width: 600,
						transition: new Transitions(1, bezierCurved, 0.9).transition
					}).variant
				}>
				<div className="text-4xl p-2 relative text-right">UI/UX Designer</div>
			</MotionElement>
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
				classname="w-[140vh] absolute h-[3px] right-[30px] bottom-0 bg-midground opacity-80 z-[1] rotate-[-105deg] mix-blend-exclusion"
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
			<div className="fixed top-[20%] bottom-0 my-auto rotate-[-105deg] w-[1299px] h-[678px] md:right-[-200px] right-[-500px]">
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
		</>
	);
};

export default Background;
