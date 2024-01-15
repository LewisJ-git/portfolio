import { Animate, animateParam } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MotionElement from "../libs/MotionElement";
import { Transitions, bezierSharp } from "../libs/Transitions";
import AfterImage from "./AfterImage";
import MaskElement from "../libs/MaskElement";

function Home() {
	const animateName = (initialX: number, i: number): animateParam => {
		return {
			initialX,
			opacity: new Fading(1, "fast").opacity,
			transition: new Transitions(0.7, bezierSharp).staggerChildren(0.2, i)
		};
	};
	return (
		<div className="w-full flex flex-row flex-wrap p-10 md:p-[2rem] md:gap-[8rem] gap-[5rem] text-4xl md:text-6xl font-badfennec rotate-[-15deg]">
			<MotionElement
				animation={new Animate(animateName(-200, 0)).variant}
				classname="place-self-start relative md:leading-[3.5rem] leading-[2.5rem] text-accent2 "
				forceAnimate={true}
				animateOnce={true}>
				<MaskElement
					childClass="absolute bg-midground w-[400px] h-[250px] left-[-150px] top-[-50px] md:w-[600px] md:h-[400px] md:left-[-200px] md:top-[-95px]"
					startMask="polygon(95% 0%, 95% 0%, 100% 0%, 100% 0%, 0% 0%, 0% 0%, 88% 0%)"
					endMask="polygon(95% 93%, 95% 40%, 100% 35%, 100% 0%, 0% 0%, 0% 100%, 88% 100%)"
					transition={new Transitions(0.7, bezierSharp, 1).transition}
				/>
				<h1 className="relative z-[2] text-accent2">LONG</h1>
				<AfterImage amount={3} text="LONG" />
			</MotionElement>
			<MotionElement
				animation={new Animate(animateName(200, 1)).variant}
				classname="place-self-end relative z-[16] w-[50%]"
				forceAnimate={true}
				animateOnce={true}>
				<h1 className="relative z-[16]">NGUYEN</h1>
			</MotionElement>
		</div>
	);
}

export default Home;
