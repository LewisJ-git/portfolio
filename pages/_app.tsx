import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }) {
	const [pageLoading, setPageLoading] = useState<boolean>(false);
	useEffect(() => {
		const handleStart = () => {
			setPageLoading(true);
		};
		const handleComplete = () => {
			setPageLoading(false);
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
	}, [router]);
	return (
		<AnimatePresence mode="wait">
			<Layout pageLoad={pageLoading}>
				<Component {...pageProps} key={router.asPath} />
			</Layout>
		</AnimatePresence>
	);
}

export default MyApp;
