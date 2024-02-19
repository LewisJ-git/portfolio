import { motion } from "framer-motion";
import { containerInterface } from "../interfaces";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MaskElement from "../libs/MaskElement";
import { bioNavTab } from "../libs/Masks";
import MotionElement from "../libs/MotionElement";
import { Transitions, bezierCurved } from "../libs/Transitions";
import { useState } from "react";

interface bioNavInterface extends containerInterface {
	index: number;
	selectedIndex: number;
}

const BioNavItem = (props: bioNavInterface) => {
	const [hovered, setHovered] = useState<boolean>(false);
	return (
		<MotionElement
			animation={
				new Animate({
					initialY: -100,
					opacity: new Fading(1, "slow").opacity,
					transition: new Transitions(1.2, bezierCurved, 1.2).staggerChildren(
						0.08,
						props.index
					)
				}).variant
			}
			keyName={String(props.index)}
			onHover={{
				scale: 1.1,
				color: "#ff4365ff",
				marginLeft: 10,
				marginRight: 10
			}}
			animateOnce={true}
			forceAnimate={true}
			classname="md:px-5 py-1 px-3 xs:my-[7px] my-[13px] flex items-end relative">
			<div className="relative z-10">{props.children}</div>
			{props.index == props.selectedIndex && (
				<motion.div
					className="absolute bottom-0 left-0 w-full h-[1px] bg-midground"
					layoutId="bioNav"
				/>
			)}
		</MotionElement>
	);
};

export default BioNavItem;
