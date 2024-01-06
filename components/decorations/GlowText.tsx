import { ReactNode } from "react";
import MotionElement from "../libs/MotionElement";
import { Animate, animateParam } from "../libs/Animations";
import { Transitions, bezierSharp } from "../libs/Transitions";
import { Fading } from "../libs/Fading";

interface glowTextInterface {
	children: ReactNode;
	intensity: number;
	color: string;
	size: number;
}

const GlowText = (props: glowTextInterface) => {
	const glow = (): string => {
		let glowStr: string = "";
		for (let i = 0; i < props.intensity; i++) {
			glowStr += `0 0 ${i * (props.size + 1)}px ${
				i < props.intensity / 3 ? "#ffffffcf" : props.color
			}${i < props.intensity - 1 ? "," : ""}`;
		}
		return glowStr;
	};
	const animateGlow: animateParam = {
		opacity: new Fading(1, "random").opacity,
		transition: new Transitions(60, bezierSharp).playInf("reverse")
	};
	return (
		<MotionElement
			animation={new Animate(animateGlow).variant}
			forceAnimate={true}
			animateOnce={true}>
			<span style={{ textShadow: glow() }}>{props.children}</span>
		</MotionElement>
	);
};

export default GlowText;
