import MaskElement from "../libs/MaskElement";
import { Transitions, bezierCurved } from "../libs/Transitions";

interface lineArgs {
	delay: number;
	classname: string;
}

const Line = (props: lineArgs) => {
	return (
		<MaskElement
			childClass={props.classname}
			startMask="polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
			endMask="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
			transition={new Transitions(1, bezierCurved, props.delay).transition}
		/>
	);
};

export default Line;
