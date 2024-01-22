import Section from "../Section";
import portrait from "../../public/assets/images/portrait.webp";
import Image from "next/image";
import MaskElement from "../libs/MaskElement";
import { Transitions, bezierSharp } from "../libs/Transitions";

const Intro = () => {
	return (
		<Section>
			<div className="relative mb-10 z-[10]">
				<p className="text-background z-[11] relative pt-[30px] pb-[20px] mr-[-30px] pl-[30px] text-2xl md:text-3xl text-right">
					I'm a Front-end developer and UI/UX designer. With a focus on crafting
					sophisticated web applications, I specialize in working with various popular
					frameworks and technologies.
				</p>
				<MaskElement
					parentClass="absolute w-[120vw] h-full top-0 left-[-100px] z-[9]"
					childClass="w-full h-full bg-midground"
					startMask="polygon(0% 93.95%, 0% 100%, 0% 100%, 0% 93.95%, 0% 93.95%, 0% 0%, 0% 0%, 0% 7.56%, 0% 7.56%, 0% 0%, 0% 0%, 0% 7.56%)"
					endMask="polygon(100% 93.95%, 98.08% 100%, 40% 100%, 38.79% 93.95%, 0% 93.95%, 0% 0%, 20% 0%, 21.51% 7.56%, 76.18% 7.56%, 77.75% 0%, 98.08% 0%, 100% 7.56%)"
					transition={new Transitions(0.7, bezierSharp, 1).transition}
				/>
			</div>
			<div className="relative right-0 bottom-0 w-full flex justify-end pr-5">
				<Image src={portrait} alt="portrait" width={319} height={449} />
			</div>
		</Section>
	);
};

export default Intro;
