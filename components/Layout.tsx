import { AnimatePresence } from "framer-motion";
import NavBar from "../components/navigation/NavBar";
import Loading from "./Loading";
import { layoutProps } from "./interfaces";
import { useEffect, useState } from "react";

const Layout = (props: layoutProps) => {
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		console.log(props.pageLoad);
		if (props.pageLoad == true) {
			setLoading(true);
		}
	}, [props.pageLoad]);
	return (
		<div>
			<NavBar key={"nav"} />
			<AnimatePresence mode="wait">
				{loading ? <Loading setLoading={setLoading} /> : props.children}
			</AnimatePresence>
		</div>
	);
};

export default Layout;
