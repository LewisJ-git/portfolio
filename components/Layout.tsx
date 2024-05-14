import { AnimatePresence } from "framer-motion";
import { containerInterface } from "./interfaces";

const Layout = (props: containerInterface) => {
	return (
		<div className={props.classname}>
			<AnimatePresence mode="wait">{props.children}</AnimatePresence>
		</div>
	);
};

export default Layout;
