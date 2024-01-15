import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

const hrdtkn = localFont({
	src: "../public/fonts/ncof003_hrdtkn_ver1_20/hrdtkn_ver1_20.otf",
	display: "swap",
	variable: "--font-hrdtkn"
});

const badfennec = localFont({
	src: "../public/fonts/ncof005_badfennec_font/BadFennec.otf",
	display: "swap",
	variable: "--font-badfennec"
});

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
			<Layout pageLoad={pageLoading} classname={`${hrdtkn.variable} ${badfennec.variable}`}>
				<Component {...pageProps} key={router.asPath} />
			</Layout>
		</AnimatePresence>
	);
}

export default MyApp;
