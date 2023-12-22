import { motion } from "framer-motion";
import { animate, bezier_curved } from "./libs/Animations";

const NameDesc = () => {
	const desc = ["Front-end developer", "UI/UX Designer", "Artist"];

	return (
		<div className="relative leading-[6rem] text-[2rem] font-normal grow-0 shrink-[1] basis-auto text-right z-[10]">
			{Array.from(desc).map((text, index) => {
				return (
					<motion.p
						key={index}
						className="my-[20px] 1025:text-left font-medium"
						variants={animate(
							200,
							0,
							1,
							0,
							bezier_curved(1, 0.2 + 0.1 * index)
						)}
						initial="initial"
						animate="animate"
						exit="exit">
						{text}
					</motion.p>
				);
			})}
		</div>
	);
};

export default NameDesc;
