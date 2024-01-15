import Name from "../components/home/Name";
import Background from "../components/home/Background";
import NavBar from "../components/navigation/NavBar";

export default function Home() {
	return (
		<div className="overflow-hidden relative h-screen w-full">
			<NavBar />
			<Background />
			<Name />
		</div>
	);
}
