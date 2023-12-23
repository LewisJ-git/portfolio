import Image from "next/image";
import nextLogo from "../public/next-js-logo.svg";
import tailwindLogo from "../public/tailwind_css_logo.svg";
import framerLogo from "../public/framer_logo.svg";
import { motion } from "framer-motion";
import { animate, bezier_sharp } from "./libs/Animations";

const Footer = () => {
	return (
		<footer className="py-[5px] ml-10 flex relative z-10">
			<motion.div
				variants={animate(0, 50, 1, 0, bezier_sharp(2))}
				initial="initial"
				whileInView="animate"
				exit="exit"
				viewport={{ once: true }}>
				<div className="flex flex-grow items-center justify-center">
					<p className="text-[0.9rem]">Made with </p>
					<a
						href="https://vercel.com/solutions/nextjs"
						target="_blank"
						rel="noopener noreferrer">
						<Image
							src={nextLogo}
							alt="Next.js Logo"
							width={120}
							height={60}
						/>
					</a>
					<p className="text-[0.9rem]">&ensp;&&ensp;</p>
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noopener noreferrer">
						<Image
							src={tailwindLogo}
							alt="Tailwind Logo"
							width={160}
							height={20}
						/>
					</a>
					<p className="text-[0.9rem]">&ensp;&&ensp;</p>
					<a
						href="https://www.framer.com/motion/"
						target="_blank"
						rel="noopener noreferrer">
						<Image
							src={framerLogo}
							alt="Framer Motion Logo"
							width={160}
							height={80}
						/>
					</a>
				</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
