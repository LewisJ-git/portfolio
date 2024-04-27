import Line from "../decorations/Line";

const Background = () => {
	return (
		<>
			<Line
				classname="w-[200px] absolute h-[3px] top-[100px] left-[-10px] bg-midground opacity-80 z-[1] rotate-[-15deg] mix-blend-exclusion"
				delay={1.3}
			/>
			<Line
				classname="w-[500px] absolute h-[3px] top-[90vh] left-[-30px] bg-midground opacity-80 z-[1] rotate-[-15deg] mix-blend-exclusion"
				delay={1}
			/>
			<Line
				classname="w-[500px] absolute h-[3px] top-[90vh] left-[-30px] bg-midground opacity-80 z-[1] rotate-[-15deg] mix-blend-exclusion"
				delay={1}
			/>
		</>
	);
};

export default Background;
