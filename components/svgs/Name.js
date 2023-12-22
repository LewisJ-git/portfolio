import { motion } from "framer-motion";
import { animate_path_stroke, bezier_curved } from "../libs/Animations";
import { name_paths } from "./Paths";

const Name = () => {
	return (
		<svg
			width="434px"
			height="236px"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="141.97999877929686 16.3800048828125 216.04000244140624 117.239990234375"
			preserveAspectRatio="xMidYMid">
			<filter
				id="editing-glowing"
				x="-100%"
				y="-100%"
				width="300%"
				height="300%">
				<feGaussianBlur
					in="SourceGraphic"
					result="blur"
					stdDeviation="10"></feGaussianBlur>
				<feMerge>
					<feMergeNode in="blur"></feMergeNode>
					<feMergeNode in="SourceGraphic"></feMergeNode>
				</feMerge>
			</filter>
			<g filter="url(#editing-glowing)">
				<g transform="translate(176.84499883651733, 102.7750015258789)">
					<g
						id="fontsvg1698266518534"
						fillRule="evenodd"
						fill="#00000000">
						{name_paths.map((path, index) => {
							return (
								<motion.path
									key={index}
									variants={animate_path_stroke(
										bezier_curved(0.8, 0.2 * 1.5 * index),
										"#00000000",
										"#bef264"
									)}
									initial="initial"
									animate="animate"
									exit="exit"
									strokeWidth="2"
									strokeLinecap="round"
									d={path}
								/>
							);
						})}
					</g>
				</g>
			</g>
		</svg>
	);
};

export default Name;
