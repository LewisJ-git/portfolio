import { AnimatePresence } from "framer-motion";
import NavBar from "../components/navigation/NavBar";
import Loading from "./Loading";
import { containerInterface } from "./interfaces";
import { useEffect, useState } from "react";

export interface layoutProps extends containerInterface {
	pageLoad: boolean;
}

const Layout = (props: layoutProps) => {
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		if (props.pageLoad == true) {
			setLoading(true);
		}
	}, [props.pageLoad]);
	return (
		<div className={props.classname}>
			<AnimatePresence mode="wait">
				{loading ? (
					<Loading setLoading={setLoading} />
				) : (
					<div className="">{props.children}</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Layout;
