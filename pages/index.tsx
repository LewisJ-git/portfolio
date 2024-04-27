import Name from "../components/home/Name";
import Background from "../components/home/Background";
import Footing from "../components/home/Footing";
import NavBar from "../components/navigation/NavBar";

export default function Home() {
	return (
		<div className="overflow-hidden relative w-full h-screen">
			<NavBar />
			<Background />
			<Name />
			<Footing />
		</div>
	);
}
