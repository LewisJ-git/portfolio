import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { bezier_curved, animate } from "./libs/Animations";
import Logo from "./svgs/Logo";

const NavBar = () => {
	const navigations = [
		{ title: "Home", url: "/" },
		{ title: "About", url: "/about" },
		{ title: "Résumé", url: "/resume" },
		{ title: "Contact", url: "/contact" },
	];
	return (
		<div className="absolute top-0 w-full">
			<div className="text-[1.4rem] relative z-[9] font-semibold flex 600:text-[1.2rem]">
				<ul className="inline-flex flex-1 items-center px-[1.5rem] my-[1.3rem] 600:px-[0px]">
					{Array.from({ length: 6 }).map((_, index) => {
						switch (index) {
							case 0:
								return (
									<motion.li
										variants={animate(
											0,
											-50,
											1,
											0,
											bezier_curved(0.8)
										)}
										initial="initial"
										animate="animate"
										exit="exit"
										key={index}
										className="flex-auto flex-grow-0 flex-shrink-[2] mx-[1.1rem] 600:mx-[0.8rem] relative z-10">
										<Logo />
									</motion.li>
								);
								break;
							case 2:
								return (
									<li
										key={index}
										className="flex-auto flex-grow-[2] flex-shrink-0 mx-[1.1rem] 600:mx-[0px] 600:flex-shrink-[2] 600:flex-grow-0 relative z-10"
									/>
								);
								break;
							case 1:
							case 3:
							case 4:
							case 5:
								const indexOffset =
									index == 1 ? index - 1 : index - 2;
								return (
									<motion.li
										variants={animate(
											0,
											-50,
											1,
											0,
											bezier_curved(0.8, 0.1 * index)
										)}
										initial="initial"
										animate="animate"
										exit="exit"
										key={index}
										className="flex-auto flex-grow-0 flex-shrink-[2] mx-[1.1rem] 600:mx-[0.8rem] relative z-10">
										<NavItem
											title={
												navigations[indexOffset].title
											}
											linkURL={
												navigations[indexOffset].url
											}
										/>
									</motion.li>
								);
						}
					})}
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
