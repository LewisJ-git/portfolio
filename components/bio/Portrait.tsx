import MaskElement from "../libs/MaskElement";
import { nameCard, rectBar } from "../libs/Masks";
import { bezierCurved, bezierSharp, Transitions } from "../libs/Transitions";
import Image from "next/image";
import portrait from "../../public/assets/images/portrait.webp";
import Section from "../Section";
import MotionSvg from "../libs/MotionSvg";
import { NameDesignPath } from "../../public/assets/icons/SVGPaths";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import ScrollElement from "../libs/ScrollElement";
import MotionElement from "../libs/MotionElement";

const Portrait = () => {
	return (
		<Section>
			<div className="flex flex-row">
				<div className="relative my-[5rem] w-full">
					<MotionElement
						animation={
							new Animate({
								initialClip: rectBar.start,
								finalClip: rectBar.end,
								transition: new Transitions(
									1.2,
									bezierCurved,
									1.4
								).transition,
							}).variant
						}
						animateOnce={true}
						classname="relative z-[10] flex flex-row"
					>
						<Image
							src={portrait}
							alt="portrait"
							className="sm:w-[400px] w-[300px] p-[2rem] md:p-[3rem]"
						/>
						<h1 className="font-barcode text-background text-[2rem] md:text-[4rem] rotate-[-90deg] whitespace-nowrap mt-[1rem] relative md:left-[2.5rem] left-[4.5rem] sm:left-[8.5rem]">
							Self-portrait
						</h1>
					</MotionElement>

					<MaskElement
						parentClass="absolute w-[350px] sm:w-[450px] md:w-[500px] h-full top-0 left-0 z-[1]"
						childClass="h-full bg-midground"
						startMask={nameCard.start}
						endMask={nameCard.end}
						forceAnimate={false}
						transition={
							new Transitions(1, bezierCurved, 0.6).transition
						}
					/>
				</div>
				<div className="relative">
					<ScrollElement
						direction="left"
						classname="fixed w-[1299px] h-[678px] md:ml-[-500px] ml-[-1000px] py-10"
					>
						<MotionSvg
							paths={NameDesignPath}
							width={866}
							height={452}
							fill="#00d9c0ff"
							aspectRatio="none"
							stroke="#00d9c0ff"
							strokeWidth={7}
							isGradient={true}
							animateOnce={true}
							gradTransition={
								new Transitions(0.5, bezierCurved).transition
							}
							animation={
								new Animate({
									initialX: -800,
									opacity: new Fading(1, "fast").opacity,
									animatePath: true,
									transition: new Transitions(
										1,
										bezierCurved,
										1
									).transition,
								}).variant
							}
							transform="translate(0.000000,452.000000) scale(0.100000,-0.100000)"
						/>
					</ScrollElement>
				</div>
			</div>
		</Section>
	);
};

export default Portrait;
