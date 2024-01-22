import { Animate, animateParam } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MotionElement from "../libs/MotionElement";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import AfterImage from "./AfterImage";
import MaskElement from "../libs/MaskElement";
import Line from "../decorations/Line";

function Home() {
	const animateName = (initialX: number, i: number): animateParam => {
		return {
			initialX,
			opacity: new Fading(1, "fast").opacity,
			transition: new Transitions(0.7, bezierSharp).staggerChildren(0.2, i)
		};
	};
	return (
		<div className="w-full flex flex-row flex-wrap py-10 md:py-[2rem] pl-[4rem] md:gap-[8rem] gap-[5rem] text-4xl md:text-6xl font-badfennec rotate-[-15deg] relative z-[10]">
			<MotionElement
				animation={new Animate(animateName(-200, 0)).variant}
				classname="place-self-start relative md:leading-[3.5rem] leading-[2.5rem] text-accent2"
				forceAnimate={true}
				animateOnce={true}>
				<MaskElement
					parentClass="absolute left-[-150px] top-[-50px] md:left-[-200px] md:top-[-95px]"
					childClass="bg-midground w-[400px] h-[250px] md:w-[600px] md:h-[400px] z-[5]"
					startMask="polygon(95% 0%, 95% 0%, 100% 0%, 100% 0%, 0% 0%, 0% 0%, 88% 0%)"
					endMask="polygon(95% 93%, 95% 40%, 100% 35%, 100% 0%, 0% 0%, 0% 100%, 88% 100%)"
					transition={new Transitions(0.7, bezierSharp, 1).transition}>
					<div className="font-barcode absolute text-background z-10 md:text-4xl text-2xl rotate-90 md:right-[-30px] md:top-[120px] right-[-20px] top-[110px]">
						PER ARDUA AD ALTA
					</div>
					<MaskElement
						parentClass="absolute md:left-[120px] left-[100px] bottom-[30px] z-[10]"
						childClass="bg-background w-[200px] h-[150px] md:w-[300px] md:h-[200px] "
						startMask="polygon(0% 100%, 0% 92.14%, 0% 92.14%, 0% 74.27%, 0% 0%, 0% 13.67%, 0% 79.27%, 0% 100%)"
						endMask="polygon(100% 100%, 93.12% 92.14%, 24.16% 92.14%, 12.54% 74.27%, 12.54% 0%, 0% 13.67%, 0% 79.27%, 12.54% 100%)"
						transition={new Transitions(0.8, bezierCurved, 1.3).transition}
					/>
				</MaskElement>
				<h1 className="relative z-[11]">LONG</h1>
				<AfterImage amount={3} text="LONG" />
			</MotionElement>
			<MotionElement
				animation={new Animate(animateName(200, 1)).variant}
				classname="place-self-end relative z-[16] w-[50%]"
				forceAnimate={true}
				animateOnce={true}>
				<h1 className="relative z-[16]">NGUYEN</h1>
			</MotionElement>
			<Line
				classname="w-[1000px] relative h-[5px] bg-midground left-[-200px] md:top-[-20px] top-[-50px] opacity-20 z-[1] mix-blend-multiply"
				delay={1}
			/>
			<MotionElement
				classname="w-[1000px] absolute h-[5px] bg-midground left-[-200px] bottom-[10%] opacity-60 z-[1]"
				forceAnimate={true}
				animateOnce={true}
				animation={
					new Animate({
						width: 600,
						transition: new Transitions(1, bezierSharp, 1.3).transition
					}).variant
				}>
				<div className="text-4xl py-2 pr-[100px] relative text-right font-sans">Artist</div>
			</MotionElement>
		</div>
	);
}

export default Home;
