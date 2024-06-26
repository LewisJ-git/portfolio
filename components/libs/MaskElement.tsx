import { Transition } from "framer-motion";
import { CSSProperties, ReactNode } from "react";
import MotionElement from "./MotionElement";
import { Animate } from "./Animations";

interface maskInterface {
	startMask: string;
	endMask: string;
	children?: ReactNode;
	transition: Transition;
	childClass?: string;
	parentClass?: string;
	filterClass?: string;
	childStyle?: CSSProperties;
	sharedLayout?: string;
	forceAnimate?: boolean;
}

const MaskElement = (props: maskInterface) => {
	return (
		<div {...(props.parentClass && { className: props.parentClass })}>
			{props.children}
			<MotionElement
				animation={
					new Animate({
						initialClip: props.startMask,
						finalClip: props.endMask,
						transition: props.transition,
					}).variant
				}
				classname={props.childClass}
				style={props.childStyle}
				forceAnimate={props.forceAnimate}
				animateOnce={true}
				{...{
					...(props.sharedLayout && { layoutId: props.sharedLayout }),
				}}
			/>
			{props.filterClass ? <div className={props.filterClass} /> : <></>}
		</div>
	);
};

export default MaskElement;
