import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutDeco from "../components/AboutDeco";
import Hello from "../components/Hello";
import Quotes from "../components/Quotes";
import Bio from "../components/Bio";
import Background from "../components/decos/Background";
import { motion } from "framer-motion";
import { animate_clip, bezier_curved } from "../components/libs/Animations";
import BioExtra from "../components/BioExtra";

export default function about() {
	return (
		<div className="overflow-hidden">
			<Header directory={"About"} />
			<Hello />
			<AboutDeco />
			<div className="relative z-[2] my-[100px]">
				<main>
					<div className="h-full w-full">
						<section className="py-[50px] text-3xl leading-relaxed relative">
							<Bio />
							<div className="filter hue-rotate-[-60deg] h-[400px] w-full brightness-75 absolute top-[5%] left-0 z-[-5]">
								<Background src="/site-bg-1.png" />
								<motion.div
									variants={animate_clip(
										"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
										"polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
										bezier_curved(1, 1.4)
									)}
									initial="initial"
									whileInView="animate"
									exit="exit"
									viewport={{ once: true }}
									className="w-full h-full z-[6] bg-black"
								/>
								<div className="absolute bottom-0 w-full h-full z-[1] bg-gradient-to-l from-[#000000c2] to-transparent" />
							</div>
							<Quotes />

							<BioExtra />
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
