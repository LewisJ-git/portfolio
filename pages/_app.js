import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence mode="wait">
			<NavBar key={"nav"} />
			<Component {...pageProps} key={router.asPath} />
		</AnimatePresence>
	);
}

export default MyApp;
