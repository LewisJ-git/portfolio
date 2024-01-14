import { CSSProperties } from "react";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MotionElement from "../libs/MotionElement";
import { Transitions, bezierCurved } from "../libs/Transitions";

interface afImageInterface {
	amount: number;
	text?: string;
}

const AfterImage = (props: afImageInterface) => {
	const evenStyle = (isEven: boolean): CSSProperties => {
		return isEven
			? {
					color: "#00000000",
					WebkitTextStrokeWidth: 3,
					WebkitTextStrokeColor: "#ff4365ff"
			  }
			: { color: "inherit" };
	};
	return (
		<div className={`relative left-0 z-[10]`}>
			{Array.from({ length: props.amount }).map((_, index) => (
				<MotionElement
					key={index}
					animation={
						new Animate({
							initialY: -50,
							opacity: new Fading(0.4, "immediate").opacity,
							transition: new Transitions(0.4, bezierCurved, 1).staggerChildren(
								0.01,
								index
							)
						}).variant
					}
					forceAnimate={true}
					animateOnce={true}>
					<h1 style={evenStyle(index % 2 == 0)}>{props.text ?? props.text}</h1>
				</MotionElement>
			))}
		</div>
	);
};

export default AfterImage;
