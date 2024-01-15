import Link from "next/link";
import MotionElement from "../libs/MotionElement";
import { ReactNode } from "react";
import { TargetAndTransition, Variants } from "framer-motion";

interface navItemProp {
	children: ReactNode;
	classname: string;
	link: string;
	animation: Variants;
	onHover: TargetAndTransition;
}

const NavItem = (props: navItemProp) => {
	return (
		<MotionElement
			animation={props.animation}
			classname={props.classname}
			forceAnimate={true}
			animateOnce={true}
			onHover={props.onHover}>
			<Link href={props.link}>{props.children}</Link>
		</MotionElement>
	);
};

export default NavItem;
