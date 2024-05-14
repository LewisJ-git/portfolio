import Section from "../Section";
import BioNavigations from "../../pages/api/bio_navigations.json";
import git_logo from "../../public/assets/icons/others/git-logo.svg";
import figma_logo from "../../public/assets/icons/others/figma-logo.svg";
import framer_logo from "../../public/assets/icons/others/framer-logo-alt.svg";
import javascript_logo from "../../public/assets/icons/others/javascript-logo.svg";
import next_logo from "../../public/assets/icons/others/next-logo-alt.svg";
import npm_logo from "../../public/assets/icons/others/npm-logo.svg";
import react_logo from "../../public/assets/icons/others/react-logo.svg";
import sass_logo from "../../public/assets/icons/others/sass-logo.svg";
import tailwind_logo from "../../public/assets/icons/others/tailwind-logo-alt.svg";
import typescript_logo from "../../public/assets/icons/others/typescript-logo.svg";
import Image from "next/image";
import MotionElement from "../libs/MotionElement";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import { bezierCurved, bezierSharp, Transitions } from "../libs/Transitions";
import { rectBar } from "../libs/Masks";

const Skills = () => {
	const iconList: Array<any> = [
		javascript_logo,
		typescript_logo,
		react_logo,
		next_logo,
		npm_logo,
		sass_logo,
		tailwind_logo,
		framer_logo,
		figma_logo,
		git_logo,
	];
	return (
		<>
			<Section>
				<div className="xs:text-xl text-2xl md:text-3xl text-left mx-[1rem] md:mx-[10rem]">
					<h1>{BioNavigations[1].name}</h1>
				</div>
				<MotionElement
					animation={
						new Animate({
							initialClip: rectBar.start,
							finalClip: rectBar.end,
							transition: new Transitions(1.0, bezierCurved, 0.5)
								.transition,
						}).variant
					}
					animateOnce={true}
				>
					<ul className="flex flex-row flex-wrap my-10 px-5 gap-5 md:gap-10 w-full justify-center relative z-[10]">
						{iconList.map((item, index) => (
							<li
								key={index}
								className="md:w-[100px] md:h-[100px] w-[80px] h-[80px]"
							>
								<Image src={item} alt={`${item}`} />
							</li>
						))}
					</ul>
				</MotionElement>

				<div className="relative flex w-full">
					<MotionElement
						animation={
							new Animate({
								initialX: -200,
								opacity: new Fading(0.2, "slow").opacity,
								transition: new Transitions(
									1.0,
									bezierSharp,
									0.5
								).transition,
							}).variant
						}
						animateOnce={true}
						scrollMove={{ scrollAxis: "x", range: [500, 0] }}
						classname="relative font-badfennec text-[9rem] sm:text-[10rem] md:text-[12rem] text-accent1 w-full text-left"
					>
						<h1>technology</h1>
					</MotionElement>
					<MotionElement
						animation={
							new Animate({
								initialX: -200,
								opacity: new Fading(0.2, "slow").opacity,
								transition: new Transitions(
									1.0,
									bezierSharp,
									0.5
								).transition,
							}).variant
						}
						animateOnce={true}
						scrollMove={{ scrollAxis: "x", range: [-650, 0] }}
						classname="absolute font-badfennec text-[3rem] sm:text-[4rem] md:text-[6rem] text-accent2 w-full text-center"
					>
						<h1>design</h1>
					</MotionElement>
				</div>
			</Section>
		</>
	);
};

export default Skills;
