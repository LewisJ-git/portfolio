import NavItem from "./NavItem";
import Navigations from "../../pages/api/navigations.json";
import { Transitions, bezierCurved } from "../libs/Transitions";
import { Animate, animateParam } from "../libs/Animations";
import GlowText from "../decorations/GlowText";
import { Fading } from "../libs/Fading";

const NavBar = () => {
	const animateChild = (index: number): animateParam => {
		return {
			initialY: -100,
			opacity: new Fading(0.9, "slow").opacity,
			transition: new Transitions(1, bezierCurved).staggerChildren(0.08, index)
		};
	};
	return (
		<div className="grid grid-flow-col justify-items-center py-[30px]">
			{Navigations.map((item, index) => (
				<NavItem
					key={index}
					link={item.url}
					classname="text-lg md:text-2xl"
					animation={new Animate(animateChild(index)).variant}>
					<GlowText intensity={10} color="#ff8c009a" size={5}>
						{item.name}
					</GlowText>
				</NavItem>
			))}
		</div>
	);
};

export default NavBar;
