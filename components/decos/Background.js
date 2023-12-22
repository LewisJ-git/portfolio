import { motion } from "framer-motion";
import { bezier_sharp, visibleMask, hiddenMask } from "../libs/Animations";
import { useState } from "react";

const Background = ({ children, src = "" }) => {
	const [isInView, setIsInView] = useState(false);

	return (
		<motion.div
			className="h-full w-full absolute right-0"
			initial={false}
			animate={
				isInView
					? {
							WebkitMaskImage: visibleMask,
							maskImage: visibleMask,
					  }
					: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
			}
			transition={{ delay: 0.6, ...bezier_sharp(0.7) }}
			exit={{ opacity: 0 }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsInView(true)}>
			<div
				style={{ backgroundImage: `url(${src})` }}
				className="w-full h-full bg-cover bg-no-repeat">
				{children}
			</div>
		</motion.div>
	);
};

export default Background;
