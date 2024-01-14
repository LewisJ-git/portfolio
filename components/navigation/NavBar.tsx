import NavItem from "./NavItem";
import Navigations from "../../pages/api/navigations.json";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import { Animate, animateParam } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MotionElement from "../libs/MotionElement";

const NavBar = () => {
	const animateChild = (index: number): animateParam => {
		return {
			initialY: -100,
			opacity: new Fading(0.9, "slow").opacity,
			transition: new Transitions(1.2, bezierCurved).staggerChildren(0.08, index)
		};
	};
	return (
		<div className="flex flex-row py-[3rem] px-[20px] fixed z-[10] justify-center w-full items-center content-evenly">
			{Navigations.map((item, index) => (
				<MotionElement
					key={index}
					classname="w-full"
					animation={new Animate(animateChild(index)).variant}
					forceAnimate={true}
					animateOnce={true}>
					<NavItem
						key={index}
						link={item.url}
						classname="text-2xl md:text-4xl font-sans font-bold text-center"
						animation={
							new Animate({
								opacity: new Fading(1, "random").opacity,
								transition: new Transitions(60, bezierSharp).playInf("reverse")
							}).variant
						}>
						{item.name}
					</NavItem>
				</MotionElement>
			))}
		</div>
	);
};

export default NavBar;
