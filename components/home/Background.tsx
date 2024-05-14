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
			<MotionElement
				classname="w-[600px] absolute h-auto border-b-4 border-midground right-[-30px] opacity-60 rotate-[75deg] bottom-0 bg-background z-[1]"
				forceAnimate={true}
				animateOnce={true}
				animation={
					new Animate({
						width: 600,
						transition: new Transitions(1, bezierCurved, 1)
							.transition,
					}).variant
				}
			>
				<div className="text-4xl py-2 pl-[50px] relative">
					Web Developer
				</div>
			</MotionElement>
			<MotionElement
				classname="w-[800px] absolute h-auto border-b-4 border-midground right-[-200px] opacity-60 rotate-[75deg] top-[50px] bg-background z-[1]"
				forceAnimate={true}
				animateOnce={true}
				animation={
					new Animate({
						width: 600,
						transition: new Transitions(1, bezierCurved, 0.9)
							.transition,
					}).variant
				}
			>
				<div className="text-4xl p-2 relative text-right">
					UI/UX Designer
				</div>
			</MotionElement>

			<div className="absolute top-0 left-0 w-full h-full">
				<div className="relative w-full h-full left-[-50px]">
					{Array.from({ length: 15 }, (_, index) => index + 1).map(
						(i) => (
							<Line
								key={i}
								top={`${Math.random() * 100}vh`}
								width={`${Math.random() * 100 + 5}vw`}
								delay={Math.random() * 1 + 0.5}
								rotate="-15deg"
							/>
						)
					)}
				</div>
			</div>

			<div className="absolute top-0 left-0 w-full h-full">
				<div className="relative w-full h-full">
					{Array.from({ length: 12 }, (_, index) => index + 1).map(
						(i) => (
							<Line
								key={i}
								top={`${Math.random() * 100}vw`}
								width={`${Math.random() * 100 + 5}vw`}
								delay={Math.random() * 1 + 0.5}
								rotate="75deg"
							/>
						)
					)}
				</div>
			</div>

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
					gradTransition={
						new Transitions(0.5, bezierSharp).transition
					}
					animation={
						new Animate({
							initialX: -800,
							opacity: new Fading(1, "fast").opacity,
							animatePath: true,
							transition: new Transitions(1, bezierCurved, 1)
								.transition,
						}).variant
					}
					transform="translate(0.000000,452.000000) scale(0.100000,-0.100000)"
				/>
			</div>
			<div className="absolute bottom-0 right-0 z-[13]">
				<Image
					src={corner_icon}
					alt="corner-icon"
					width={35}
					height={35}
				/>
			</div>
		</>
	);
};

export default Background;
