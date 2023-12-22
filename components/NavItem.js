import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { animate, bezier_sharp } from "./libs/Animations";

const NavItem = ({ title, linkURL }) => {
	const [hovered, hoveredState] = useState(false);
	return (
		<div
			onMouseEnter={() => hoveredState(true)}
			onMouseLeave={() => hoveredState(false)}>
			<Link href={linkURL}>{title}</Link>
			{hovered && (
				<motion.div className="relative">
					{Array.from([-20, -10, 10]).map((arr, index) => {
						return (
							<motion.div
								variants={animate(
									0,
									-50,
									1,
									0,
									bezier_sharp(0.7)
								)}
								key={index}
								initial="initial"
								whileInView="animate"
								exit="exit"
								viewport={{ once: false }}
								style={{
									top: `${arr}px`,
								}}
								className="absolute text-transparent text-stroke-white z-[-1] cursor-pointer select-none">
								<Link href={linkURL}>{title}</Link>
							</motion.div>
						);
					})}
				</motion.div>
			)}
		</div>
	);
};

export default NavItem;
