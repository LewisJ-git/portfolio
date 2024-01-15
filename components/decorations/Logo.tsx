import MotionSvg from "../libs/MotionSvg";
import { LogoPath } from "../../public/assets/icons/SVGPaths";
import { Animate, animateParam } from "../libs/Animations";
import { Transitions, bezierCurved } from "../libs/Transitions";

interface logoInterface {
	fallbackFunc: () => void;
}

const Logo = (props: logoInterface) => {
	const animateLogo: animateParam = {
		animatePath: true,
		transition: new Transitions(1, bezierCurved).transition
	};
	return (
		<MotionSvg
			paths={LogoPath}
			width={512}
			height={512}
			fill="#485768ff"
			gradTransition={new Transitions(1, bezierCurved, 0.8).transition}
			stroke="#485768ff"
			strokeWidth={2}
			aspectRatio="xMidYMid meet"
			animation={new Animate(animateLogo).variant}
			onCompleteFallback={props.fallbackFunc}
		/>
	);
};

export default Logo;
