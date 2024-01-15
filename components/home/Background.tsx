import MotionSvg from "../libs/MotionSvg";
import { NameDesignPath } from "../../public/assets/icons/SVGPaths";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";

const Background = () => {
	return (
		<>
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
