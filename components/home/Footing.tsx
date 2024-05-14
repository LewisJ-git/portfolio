import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import MaskElement from "../libs/MaskElement";
import MotionElement from "../libs/MotionElement";
import Image from "next/image";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import github_logo from "../../public/assets/icons/others/github_logo.svg";
import linkedin_logo from "../../public/assets/icons/others/linkedin-logo.svg";
import { circle, footingCard } from "../libs/Masks";

const Footing = () => {
	return (
		<MaskElement
			parentClass="absolute right-[-50px] bottom-[-30px] md:rotate-[-15deg] z-[10]"
			childClass="bg-midground w-[250px] h-[200px]"
			startMask={footingCard.start}
			endMask={footingCard.end}
			transition={new Transitions(0.7, bezierSharp, 1).transition}
		>
			<MotionElement
				animation={
					new Animate({
						opacity: new Fading(1, "fast").opacity,
						transition: new Transitions(0.7, bezierSharp, 1.6)
							.transition,
					}).variant
				}
				classname="text-background absolute z-10 pt-[10px] pl-[30px] font-barcode rotate-[-90deg] top-[80px] left-[-20px]"
				forceAnimate={true}
				animateOnce={true}
			>
				Let's Get In Touch
			</MotionElement>
			<MotionElement
				animation={
					new Animate({
						initialX: 200,
						opacity: new Fading(1, "fast").opacity,
						transition: new Transitions(0.7, bezierSharp, 1.3)
							.transition,
					}).variant
				}
				classname="text-midground absolute z-10 pt-[10px] font-hrdtkn top-[-40px] text-lg right-[4rem] md:right-[2rem]"
				forceAnimate={true}
				animateOnce={true}
			>
				<span className="font-barcode m-2">©</span>All Rights Reserved
			</MotionElement>
			<MaskElement
				parentClass="absolute z-[11] top-[50px] left-[70px] flex flex-row justify-center items-center"
				childClass="h-[120px] w-[120px] bg-background absolute top-0 left-0"
				startMask={circle.start}
				endMask={circle.end}
				transition={new Transitions(0.8, bezierCurved, 0.7).transition}
			>
				<a
					href="https://linkedin.com/in/longnguyen2000"
					target="_blank"
				>
					<Image
						src={linkedin_logo}
						alt="linkedin logo"
						width={60}
						height={60}
					/>
				</a>
				<a href="https://github.com/LewisJ-git" target="_blank">
					<Image
						src={github_logo}
						alt="github logo"
						width={60}
						height={60}
					/>
				</a>
			</MaskElement>
		</MaskElement>
	);
};

export default Footing;
