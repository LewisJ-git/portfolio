import { Dispatch, SetStateAction } from "react";
import Logo from "./decorations/Logo";
import MotionElement from "./libs/MotionElement";
import { Animate, animateParam } from "./libs/Animations";
import { Fading } from "./libs/Fading";
import { Transitions, bezierSharp } from "./libs/Transitions";

interface loadingInterface {
	setLoading: Dispatch<SetStateAction<boolean>>;
}

const Loading = (props: loadingInterface) => {
	const setLoading = (): void => {
		props.setLoading(false);
	};
	const loadingAnimation: animateParam = {
		opacity: new Fading(1, "fast").opacity,
		transition: new Transitions(0.8, bezierSharp).transition
	};
	return (
		<MotionElement
			keyName="logo"
			animation={new Animate(loadingAnimation).variant}
			classname="fixed top-0 left-0 h-full w-full z-[20]">
			<Logo fallbackFunc={setLoading} />
		</MotionElement>
	);
};

export default Loading;
