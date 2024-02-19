import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import localFont from "next/font/local";
import Head from "next/head";
import Loading from "../components/Loading";

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
	return (
		<>
			<Head>
				<title>Long Nguyen's portfolio website</title>
			</Head>
			<Suspense fallback={<Loading />}>
				<Layout
					classname={`${hrdtkn.variable} ${badfennec.variable} overflow-hidden relative h-screen w-full select-none`}>
					<Component {...pageProps} key={router.asPath} />
				</Layout>
			</Suspense>
		</>
	);
}

export default MyApp;
