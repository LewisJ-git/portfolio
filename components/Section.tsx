import { containerInterface } from "./interfaces";

const Section = (props: containerInterface) => {
	return (
		<section className="mx-5 px-5 rotate-[-15deg]">
			{props.children}
		</section>
	);
};

export default Section;
