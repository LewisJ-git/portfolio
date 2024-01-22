import NavItem from "./NavItem";
import Navigations from "../../pages/api/navigations.json";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import { Animate, animateParam } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MotionElement from "../libs/MotionElement";
import MaskElement from "../libs/MaskElement";
import { navBulletVariants_end, navBulletVariants_start } from "../libs/Masks";
import { CSSProperties } from "react";

const NavBar = () => {
	const animateChild = (index: number): animateParam => {
		return {
			initialX: -400,
			opacity: new Fading(0.8, "slow").opacity,
			transition: new Transitions(1.2, bezierCurved).staggerChildren(0.08, index)
		};
	};
	return (
		<div className="flex flex-col gap-[0px] md:gap-3 p-[15px] mt-[10px] md:mt-[30px] relative z-[10] w-full text-2xl md:text-4xl font-hrdtkn rotate-[-15deg] md:translate-y-[-50%] translate-y-[-10%]">
			{Navigations.map((item, index) => (
				<MotionElement
					key={index}
					classname="w-full flex flex-row gap-2 items-center"
					animation={new Animate(animateChild(index)).variant}
					forceAnimate={true}
					animateOnce={true}>
					<MaskElement
						childStyle={
							{
								"--sm-w": `${25 + 25 * index}px`,
								"--md-w": `${50 + 150 * index}px`
							} as CSSProperties
						}
						childClass="bg-midground w-[var(--sm-w)] h-[20px] md:w-[var(--md-w)] md:h-[40px] relative"
						startMask={navBulletVariants_start[index]}
						endMask={navBulletVariants_end[index]}
						transition={new Transitions(0.7, bezierSharp, 1).staggerChildren(
							0.2,
							index
						)}
					/>
					<NavItem
						key={index}
						link={item.url}
						classname="relative"
						onHover={{
							scale: 1.2,
							paddingLeft: 20,
							paddingRight: 20,
							color: "#ff4365ff"
						}}
						animation={
							new Animate({
								opacity: new Fading(1, "random").opacity,
								transition: new Transitions(60, bezierSharp).playInf("reverse")
							}).variant
						}>
						{item.name}
					</NavItem>
					<MaskElement
						childClass="bg-midground w-[100vw] h-[20px] md:h-[40px] relative"
						startMask="polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
						endMask="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
						transition={new Transitions(3.2, bezierCurved, 1.4).staggerChildren(
							0.2,
							index
						)}>
						<div className="absolute font-barcode text-background z-[5] pl-[20px] whitespace-nowrap">
							{item.desc}
						</div>
					</MaskElement>
				</MotionElement>
			))}
		</div>
	);
};

export default NavBar;
