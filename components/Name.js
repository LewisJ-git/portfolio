import { motion } from "framer-motion";
import {
	bezier_sharp,
	bezier_curved,
	animate,
	flicker_immediate,
	flicker_fast,
} from "./libs/Animations";

const Name = () => {
	const firstName = "Long";
	const lastName = "Nguyen";

	return (
		<div className="m-0 text-[5rem] 600:text-[3.5rem] font-display font-medium grow-[3] shrink-0">
			<div className="m-0 leading-[3rem] relative z-[3]">
				<motion.h1
					variants={animate(
						-200,
						0,
						flicker_immediate,
						0,
						bezier_sharp(1)
					)}
					initial="initial"
					animate="animate"
					exit="exit">
					{firstName}
				</motion.h1>
				<div className="absolute text-[5rem] z-[-1] 600:text-[3.5rem]">
					{Array.from({ length: 5 }).map((_, index) => {
						return (
							<motion.h1
								key={index}
								className={
									index % 2 == 0
										? "text-transparent text-stroke-white"
										: "opacity-filter-40"
								}
								variants={animate(
									0,
									-50,
									1,
									0,
									bezier_sharp(0.7, 1.03 + 0.02 * index)
								)}
								initial="initial"
								animate="animate"
								exit="exit">
								{firstName}
							</motion.h1>
						);
					})}
				</div>
			</div>
			<motion.h1
				variants={animate(200, 0, flicker_fast, 0, bezier_curved(1))}
				initial="initial"
				animate="animate"
				exit="exit"
				className="relative z-10 leading-[3rem] mx-[2rem] my-[4rem] pt-[4rem] pl-[15rem] 600:pl-0 600:pt-0">
				{lastName}
			</motion.h1>
		</div>
	);
};

export default Name;
