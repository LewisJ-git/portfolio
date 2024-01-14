import { Transition } from "framer-motion";
import { ReactNode } from "react";
import MotionElement from "./MotionElement";
import { Animate } from "./Animations";

interface maskInterface {
	children: ReactNode;
	startMask: string;
	endMask: string;
	transition: Transition;
	childClass?: string;
	parentClass?: string;
	filterClass?: string;
}

const MaskElement = (props: maskInterface) => {
	return (
		<div className={props.parentClass}>
			{props.children}
			<MotionElement
				animation={
					new Animate({
						initialClip: props.startMask,
						finalClip: props.endMask,
						transition: props.transition
					}).variant
				}
				classname={props.childClass}
			/>
			{props.filterClass ? <div className={props.filterClass} /> : <></>}
		</div>
	);
};

export default MaskElement;
