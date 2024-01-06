import { Transition, Variants, motion } from "framer-motion";

export interface svgInterface {
	paths: string;
	width: number;
	height: number;
	fill: string;
	gradTransition?: Transition;
	animation: Variants;
	aspectRatio: "xMidYMid meet" | "none";
	isGradient?: boolean;
	forceAnimate?: boolean;
	animateOnce?: boolean;
	stroke?: string;
	strokeLinecap?: "inherit" | "round" | "butt" | "square";
	strokeWidth?: number;
	onCompleteFallback?: () => void;
}

const MotionSvg = (props: svgInterface) => {
	const conditionalArgs = {
		...(props.forceAnimate && { animate: "animate" }),
		...(props.animateOnce && { viewport: { once: true } }),
		...(props.stroke && { stroke: props.stroke }),
		...(props.strokeWidth && { strokeWidth: `${props.strokeWidth}` }),
		...(props.strokeLinecap && { strokeLinecap: props.strokeLinecap })
	};
	return (
		<motion.svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox={`0 0 ${props.width} ${props.height}`}
			preserveAspectRatio={props.aspectRatio ? props.aspectRatio : "none"}>
			{props.isGradient ?? (
				<motion.defs>
					<motion.linearGradient id="gradient">
						<motion.stop
							transition={props.gradTransition}
							animate={{
								stopColor: ["#00000000", `${props.fill}`]
							}}
							{...(props.onCompleteFallback && {
								onAnimationComplete: props.onCompleteFallback
							})}
						/>
					</motion.linearGradient>
				</motion.defs>
			)}
			<g fill="url(#gradient)">
				{props.paths.split(/(?=M)/g).map((path, index) => {
					return (
						<motion.path
							key={index}
							variants={props.animation}
							whileInView="animate"
							initial="initial"
							exit="exit"
							{...conditionalArgs}
							d={path}
						/>
					);
				})}
			</g>
		</motion.svg>
	);
};

export default MotionSvg;
