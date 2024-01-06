import Link from "next/link";
import MotionElement from "../libs/MotionElement";
import { ReactNode } from "react";
import { Variants } from "framer-motion";

interface navItemProp {
	children: ReactNode;
	classname: string;
	link: string;
	animation: Variants;
}

const NavItem = (props: navItemProp) => {
	return (
		<MotionElement
			animation={props.animation}
			classname={props.classname}
			forceAnimate={true}
			animateOnce={true}>
			<Link href={props.link}>{props.children}</Link>
		</MotionElement>
	);
};

export default NavItem;
