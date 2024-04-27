import Background from "../components/bio/Background";
import Intro from "../components/bio/Intro";
import Portrait from "../components/bio/Portrait";
import Footing from "../components/home/Footing";
import NavBar from "../components/navigation/NavBar";

const About = () => {
	return (
		<div className="relative w-full pb-[10rem] min-h-screen h-[200vh] overflow-y-hidden overflow-x-hidden">
			<NavBar />
			<Intro />
			<Portrait />
			<Background />
		</div>
	);
};

export default About;
