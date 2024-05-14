import Link from "next/link";
import Navigations from "../../pages/api/navigations.json";
import MotionElement from "../libs/MotionElement";
import { Animate } from "../libs/Animations";
import { Fading } from "../libs/Fading";
import { bezierSharp, Transitions } from "../libs/Transitions";
import { motion } from "framer-motion";

const Footing = () => {
	return (
		<motion.div
			className="p-[20px] flex flex-col absolute right-[20px] bottom-[20px] md:right-[40px] md:bottom-[40px] md:rotate-[-15deg] font-hrdtkn text-[1.2rem] md:text-[1.8rem] md:leading-[5.2rem] leading-[3rem] z-[20]"
			whileHover={{
				filter: "invert(100%) opacity(0.5)",
			}}
		>
			<Link href={Navigations[3].url}>
				<MotionElement
					animation={
						new Animate({
							initialX: 200,
							opacity: new Fading(0.7, "fast").opacity,
							transition: new Transitions(0.7, bezierSharp)
								.transition,
						}).variant
					}
					forceAnimate={true}
					animateOnce={true}
					scrollMove={{ scrollAxis: "x", range: [-500, 0] }}
					classname="text-center relative text-accent1"
				>
					<h1>Check out</h1>
				</MotionElement>
				<MotionElement
					animation={
						new Animate({
							initialX: -200,
							opacity: new Fading(0.7, "fast").opacity,
							transition: new Transitions(0.7, bezierSharp)
								.transition,
						}).variant
					}
					forceAnimate={true}
					animateOnce={true}
					scrollMove={{ scrollAxis: "x", range: [300, 0] }}
					classname="text-center relative text-[#00000000]"
				>
					<h1
						style={{
							WebkitTextStrokeWidth: 3,
							WebkitTextStrokeColor: "#00d9c0ff",
						}}
					>
						My
					</h1>
				</MotionElement>
				<MotionElement
					animation={
						new Animate({
							initialX: 200,
							opacity: new Fading(0.7, "fast").opacity,
							transition: new Transitions(0.7, bezierSharp)
								.transition,
						}).variant
					}
					forceAnimate={true}
					animateOnce={true}
					scrollMove={{ scrollAxis: "x", range: [-300, 0] }}
					classname="text-center relative text-accent2 text-[1.8rem] md:text-[2.5rem]"
				>
					<h1>Works</h1>
				</MotionElement>
			</Link>
		</motion.div>
	);
};

export default Footing;
