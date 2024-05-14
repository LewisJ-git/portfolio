import Section from "../Section";
import MaskElement from "../libs/MaskElement";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import { bioHeading, navBullets, rectBar } from "../libs/Masks";
import BioNavigations from "../../pages/api/bio_navigations.json";
import MotionElement from "../libs/MotionElement";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";

const Intro = () => {
	return (
		<Section>
			<div className="relative w-full">
				<MotionElement
					animation={
						new Animate({
							initialX: -200,
							opacity: new Fading(0.4, "fast").opacity,
							transition: new Transitions(0.7, bezierSharp)
								.transition,
						}).variant
					}
					forceAnimate={true}
					animateOnce={true}
					scrollMove={{ scrollAxis: "x", range: [300, 0] }}
					classname="font-badfennec text-[3rem] sm:text-[4rem] md:text-[6rem] text-center relative text-accent1 pl-[4rem]"
				>
					<h1>inspiration</h1>
				</MotionElement>
				<MotionElement
					animation={
						new Animate({
							initialY: 200,
							opacity: new Fading(0.2, "fast").opacity,
							transition: new Transitions(0.7, bezierSharp)
								.transition,
						}).variant
					}
					classname="absolute font-badfennec text-[9rem] sm:text-[10rem] md:text-[12rem] text-center text-accent1"
					forceAnimate={true}
					animateOnce={true}
					scrollMove={{ scrollAxis: "y", range: [-600, 0] }}
					style={{ rotate: "90deg" }}
				>
					<h1>vision</h1>
				</MotionElement>
				<MotionElement
					animation={
						new Animate({
							initialY: -200,
							opacity: new Fading(0.2, "fast").opacity,
							transition: new Transitions(0.7, bezierSharp)
								.transition,
						}).variant
					}
					classname="absolute right-[-400px] font-badfennec text-[9rem] sm:text-[10rem] md:text-[12rem] text-center text-[#00000000]"
					forceAnimate={true}
					animateOnce={true}
					scrollMove={{ scrollAxis: "y", range: [600, 0] }}
					style={{ rotate: "90deg" }}
				>
					<h1
						style={{
							WebkitTextStrokeWidth: 3,
							WebkitTextStrokeColor: "#ff4365ff",
						}}
					>
						creativity
					</h1>
				</MotionElement>
				<div className="flex flex-col w-full justify-end items-center">
					<div className="flex flex-row relative z-[5] gap-3 left-[-60vw] md:left-[-15vw] items-center my-[3rem]">
						<MaskElement
							parentClass="w-[700px] h-[50px] top-[20%] md:top-[20%] left-[95vw] md:left-[50vw] z-[5]"
							childClass="w-full h-full bg-midground"
							startMask={navBullets[3].start}
							endMask={navBullets[3].end}
							transition={
								new Transitions(1, bezierCurved, 0.1).transition
							}
							forceAnimate={true}
						>
							<div className="absolute text-[2rem] left-[50%] font-barcode text-background z-[5] whitespace-nowrap">
								{BioNavigations[0].name}
							</div>
						</MaskElement>
						<MotionElement
							animation={
								new Animate({
									opacity: new Fading(1, "fast").opacity,
									transition: new Transitions(
										1.0,
										bezierSharp,
										0.2
									).transition,
								}).variant
							}
							classname="whitespace-nowrap text-[1.4rem]"
							forceAnimate={true}
							animateOnce={true}
						>
							<h1>{BioNavigations[0].name}</h1>
						</MotionElement>
						<MaskElement
							parentClass="w-[70px] h-[50px] top-[20%] md:top-[20%] left-[95vw] md:left-[50vw] z-[5]"
							childClass="w-full h-full bg-midground"
							startMask={bioHeading.start}
							endMask={bioHeading.end}
							transition={
								new Transitions(1, bezierCurved, 0.5).transition
							}
							forceAnimate={true}
						/>
					</div>
					<div className="md:w-1/2 w-full relative flex justify-center items-center ml-[5rem]">
						<div className="pl-10 pr-5 md:py-10 py-7 relative z-10">
							<p className="text-background xs:text-xl text-2xl md:text-3xl text-left relative z-10">
								{BioNavigations[0].content}
							</p>
							<MaskElement
								parentClass="absolute w-full h-full top-0 left-0 z-[9]"
								childClass="w-full h-full bg-midground"
								startMask={rectBar.start}
								endMask={rectBar.end}
								transition={
									new Transitions(1, bezierCurved, 0.6)
										.transition
								}
							/>
						</div>
						<MaskElement
							parentClass="absolute w-[700px] h-[50px] top-[20%] md:top-[20%] left-[95vw] md:left-[50vw] z-[5]"
							childClass="w-full h-full bg-midground"
							startMask={navBullets[3].start}
							endMask={navBullets[3].end}
							transition={
								new Transitions(1.2, bezierCurved, 1).transition
							}
						/>
					</div>
					<MotionElement
						animation={
							new Animate({
								initialX: -200,
								opacity: new Fading(0.4, "slow").opacity,
								transition: new Transitions(
									1.0,
									bezierSharp,
									0.5
								).transition,
							}).variant
						}
						forceAnimate={true}
						animateOnce={true}
						scrollMove={{ scrollAxis: "x", range: [-1200, 0] }}
						classname="self-end font-badfennec text-[3rem] sm:text-[4rem] md:text-[5.5rem] relative text-accent2 text-right"
					>
						<h1>passion</h1>
					</MotionElement>
				</div>
			</div>
		</Section>
	);
};

export default Intro;
