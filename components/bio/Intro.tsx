import Section from "../Section";
import portrait from "../../public/assets/images/portrait.webp";
import Image from "next/image";
import MaskElement from "../libs/MaskElement";
import { Transitions, bezierCurved, bezierSharp } from "../libs/Transitions";
import { bioCard } from "../libs/Masks";
import BioNav from "../navigation/BioNav";
import { useState } from "react";
import BioNavigations from "../../pages/api/bio_navigations.json";

const Intro = () => {
	const [contentIndex, setContentIndex] = useState<number>(0);
	return (
		<Section>
			<div className="relative flex flex-row w-full justify-end">
				<div className="lg:w-1/2 w-full relative flex flex-col">
					<div className="pl-10 pr-5 md:py-5 py-2 relative z-10">
						<p className="text-background xs:text-xl text-2xl md:text-3xl text-right relative z-10">
							{BioNavigations[contentIndex].content}
						</p>
						<MaskElement
							parentClass="absolute w-[1700px] h-full top-0 left-0 z-[9]"
							childClass="w-full h-full bg-midground"
							startMask={bioCard.start}
							endMask={bioCard.end}
							transition={new Transitions(1, bezierCurved, 0.6).transition}
						/>
						<MaskElement
							parentClass="absolute w-[500px] h-[50px] top-[50px] md:top-[30px] right-[-520px] z-[10]"
							childClass="w-full h-full bg-background"
							startMask={bioCard.start}
							endMask={bioCard.end}
							transition={new Transitions(1.2, bezierCurved, 1).transition}
						/>
					</div>
					<BioNav contentIndex={contentIndex} setContentIndex={setContentIndex} />
				</div>
			</div>
			<div className="relative right-0 bottom-0 w-full flex justify-center pr-5">
				<Image src={portrait} alt="portrait" width={319} height={449} />
			</div>
		</Section>
	);
};

export default Intro;
