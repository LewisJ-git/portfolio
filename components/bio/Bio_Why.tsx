import Section from "../Section";
import BioNavigations from "../../pages/api/bio_navigations.json";
import MaskElement from "../libs/MaskElement";
import { bezierCurved, bezierSharp, Transitions } from "../libs/Transitions";
import { navBullets, rectBar } from "../libs/Masks";
import MotionElement from "../libs/MotionElement";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import Image from "next/image";
import portrait from "../../public/assets/images/drawn-portrait.webp";

const Bio_Why = () => {
	return (
		<>
			<Section>
				<div className="xs:text-xl text-2xl md:text-3xl text-left md:mx-[5rem]">
					<div className="flex flex-row relative left-[-15vw] gap-10">
						<MaskElement
							parentClass="w-[900px] h-[50px] relative"
							childClass="w-full h-full bg-midground rotate-180"
							startMask={navBullets[3].start}
							endMask={navBullets[3].end}
							transition={
								new Transitions(1, bezierCurved, 0.5).transition
							}
							forceAnimate={true}
						/>
						<h1>{BioNavigations[2].name}</h1>
					</div>
					<div className="my-10 flex flex-col relative">
						<div>
							<p>{BioNavigations[2].content[0]}</p>
						</div>
						<MotionElement
							animation={
								new Animate({
									initialY: 200,
									opacity: new Fading(0.3, "fast").opacity,
									transition: new Transitions(
										0.7,
										bezierSharp
									).transition,
								}).variant
							}
							classname="w-full h-full relative font-badfennec text-[9rem] sm:text-[10rem] md:text-[12rem] text-left my-[140px] text-[#00000000]"
							animateOnce={true}
							scrollMove={{ scrollAxis: "x", range: [300, -300] }}
						>
							<h1
								style={{
									WebkitTextStrokeWidth: 3,
									WebkitTextStrokeColor: "#ff4365ff",
								}}
								className="h-full"
							>
								innovation
							</h1>
						</MotionElement>
						<div className="w-full relative flex justify-center items-center">
							<div className="md:py-10 py-7 relative flex md:flex-row flex-col items-center justify-center">
								<Image
									src={portrait}
									alt="portrait"
									className="sm:w-[300px] w-[300px] relative z-10 py-[2rem] pl-10"
								/>
								<p className="text-background xs:text-xl text-2xl md:text-3xl text-left relative z-10 px-10 py-10">
									{BioNavigations[2].content[1]}
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
						</div>
						<MotionElement
							animation={
								new Animate({
									initialY: 400,
									opacity: new Fading(0.2, "fast").opacity,
									transition: new Transitions(
										0.7,
										bezierSharp
									).transition,
								}).variant
							}
							classname="relative w-full h-full left-[-46vw] font-badfennec text-[3rem] sm:text-[4rem] md:text-[6rem] text-center text-accent1 z-[10]"
							forceAnimate={true}
							animateOnce={true}
							scrollMove={{
								scrollAxis: "y",
								range: [-500, -250],
							}}
							style={{ rotate: "90deg" }}
						>
							<h1>improve</h1>
						</MotionElement>
					</div>
				</div>
			</Section>
		</>
	);
};

export default Bio_Why;
