import { Transition, motion } from "framer-motion";
import { useState } from "react";
import { hiddenMask, visibleMask } from "./Masks";
import { StaticImageData } from "next/image";

interface bgInterface {
	src: StaticImageData;
	transition: Transition;
	classname?: string;
}

const MotionBG = (props: bgInterface) => {
	const [isInView, setIsInView] = useState(false);

	return (
		<motion.div
			className={props.classname}
			initial={false}
			animate={
				isInView
					? {
							WebkitMaskImage: visibleMask,
							maskImage: visibleMask
					  }
					: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
			}
			transition={props.transition}
			exit={{ opacity: 0 }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsInView(true)}>
			<div
				style={{ backgroundImage: `url(${props.src.src})` }}
				className="w-full h-full bg-cover bg-no-repeat bg-clip-border"
			/>
		</motion.div>
	);
};

export default MotionBG;
