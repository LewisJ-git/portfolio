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
import MotionElement from "../libs/MotionElement";

const Portrait = () => {
	return (
		<Section>
			<div className="relative flex md:flex-row flex-col">
				<div className="relative my-[5rem] w-full">
					<MotionElement
						animation={
							new Animate({
								opacity: new Fading(1, "slow").opacity,
								transition: new Transitions(
									1,
									bezierCurved,
									0.4
								).transition,
							}).variant
						}
						animateOnce={true}
						classname="relative z-[10]"
					>
						<Image
							src={portrait}
							alt="portrait"
							className="w-[500px] p-[3rem] relative z-[2]"
						/>

						<MaskElement
							parentClass="absolute w-[550px] h-full top-0 left-0 z-[1]"
							childClass="h-full bg-midground"
							startMask={nameCard.start}
							endMask={nameCard.end}
							forceAnimate={false}
							transition={
								new Transitions(1, bezierCurved, 0.6).transition
							}
						/>
					</MotionElement>
				</div>
				<div className="absolute top-0 md:relative w-full h-full">
					<MotionElement
						scrollMove={{ scrollAxis: "x", range: [500, 0] }}
						classname="absolute left-[-300px] w-[1299px] h-[678px] md:ml-[-500px] ml-[-1000px] py-10"
						animation={
							new Animate({
								initialX: -800,
								transition: new Transitions(0.7, bezierSharp)
									.transition,
							}).variant
						}
						animateOnce={true}
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
					</MotionElement>
				</div>
			</div>
		</Section>
	);
};

export default Portrait;
