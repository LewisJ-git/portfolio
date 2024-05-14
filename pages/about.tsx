import Background from "../components/bio/Background";
import Bio_Why from "../components/bio/Bio_Why";
import Intro from "../components/bio/Intro";
import Portrait from "../components/bio/Portrait";
import Skills from "../components/bio/Skills";
import Footing from "../components/bio/Footing";
import NavBar from "../components/navigation/NavBar";

const About = () => {
	return (
		<div className="relative w-full pb-[25vh] min-h-screen overflow-y-hidden overflow-x-hidden">
			<NavBar />
			<Intro />
			<Portrait />
			<Skills />
			<Bio_Why />
			<Footing />
			<Background />
		</div>
	);
};

export default About;
