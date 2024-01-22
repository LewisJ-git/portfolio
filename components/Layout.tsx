import { AnimatePresence } from "framer-motion";
import { containerInterface } from "./interfaces";
import NavBar from "./navigation/NavBar";

const Layout = (props: containerInterface) => {
	return (
		<div className={props.classname}>
			<NavBar />
			<AnimatePresence mode="wait">{props.children}</AnimatePresence>
		</div>
	);
};

export default Layout;
