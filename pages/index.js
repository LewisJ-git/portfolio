import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeDeco from "../components/decos/HomeDeco";
import Name from "../components/decos/Name";
import NameDesc from "../components/decos/NameDesc";

export default function Home() {
	return (
		<div className="h-full overflow-hidden min-h-screen">
			<Header directory={"Home"} />
			<HomeDeco />
			<div className="h-screen flex flex-col">
				<main className="h-full pt-20 mx-8 flex flex-row flex-wrap items-center 600:m-0">
					<Name />
					<NameDesc />
				</main>
				<Footer />
			</div>
		</div>
	);
}
