import { Animate } from "../libs/Animations";
import { rectBar } from "../libs/Masks";
import MotionElement from "../libs/MotionElement";
import { Transitions, bezierCurved } from "../libs/Transitions";

interface lineArgs {
	delay: number;
	width?: string;
	top?: string;
	rotate: string;
}

const Line = (props: lineArgs) => {
	return (
		<MotionElement
			classname="h-[5px] bg-midground opacity-10 absolute z-[1]"
			style={{
				top: props.top,
				width: props.width,
				rotate: props.rotate,
			}}
			animation={
				new Animate({
					initialClip: rectBar.start,
					finalClip: rectBar.end,
					transition: new Transitions(1, bezierCurved, props.delay)
						.transition,
				}).variant
			}
			animateOnce={true}
		/>
	);
};

export default Line;
