import { Animate, animateParam } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MotionElement from "../libs/MotionElement";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import AfterImage from "./AfterImage";
import MaskElement from "../libs/MaskElement";
import Line from "../decorations/Line";
import { corner1, nameCard } from "../libs/Masks";

function Home() {
	const animateName = (initialX: number, i: number): animateParam => {
		return {
			initialX,
			opacity: new Fading(1, "fast").opacity,
			transition: new Transitions(0.7, bezierSharp).staggerChildren(
				0.2,
				i
			),
		};
	};
	return (
		<div className="w-full flex flex-row flex-wrap py-10 md:py-[2rem] pl-[4rem] md:gap-[8rem] gap-[5rem] text-4xl md:text-6xl font-badfennec md:rotate-[-15deg] relative z-[10]">
			<MotionElement
				animation={new Animate(animateName(-200, 0)).variant}
				classname="place-self-start relative md:leading-[3.5rem] leading-[2.5rem] text-accent2"
				forceAnimate={true}
				animateOnce={true}
			>
				<MaskElement
					parentClass="absolute left-[-150px] top-[-50px] md:left-[-200px] md:top-[-95px]"
					childClass="bg-midground w-[400px] h-[250px] md:w-[600px] md:h-[400px] z-[5]"
					startMask={nameCard.start}
					endMask={nameCard.end}
					forceAnimate={true}
					transition={new Transitions(0.7, bezierSharp, 1).transition}
				>
					<div className="font-barcode absolute text-background z-10 md:text-4xl text-2xl rotate-90 md:right-[-30px] md:top-[120px] right-[-20px] top-[110px]">
						PER ARDUA AD ALTA
					</div>
					<MaskElement
						parentClass="absolute md:left-[120px] left-[100px] bottom-[30px] z-[10]"
						childClass="bg-background w-[200px] h-[150px] md:w-[300px] md:h-[200px] "
						startMask={corner1.start}
						endMask={corner1.end}
						transition={
							new Transitions(0.8, bezierCurved, 1.3).transition
						}
					/>
				</MaskElement>
				<h1 className="relative z-[11]">LONG</h1>
				<AfterImage amount={3} text="LONG" />
			</MotionElement>
			<MotionElement
				animation={new Animate(animateName(200, 1)).variant}
				classname="place-self-end relative z-[16] w-[50%]"
				forceAnimate={true}
				animateOnce={true}
			>
				<h1 className="relative z-[16]">NGUYEN</h1>
			</MotionElement>
			<MotionElement
				classname="w-[1000px] relative h-[5px] bg-midground left-[-200px] opacity-50 z-[1]"
				forceAnimate={true}
				animateOnce={true}
				animation={
					new Animate({
						width: 600,
						transition: new Transitions(1, bezierSharp).transition,
					}).variant
				}
			>
				<div className="text-4xl py-2 pr-[100px] relative text-right font-sans">
					Artist
				</div>
			</MotionElement>
		</div>
	);
}

export default Home;
