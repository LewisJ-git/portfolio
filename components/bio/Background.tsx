import Line from "../decorations/Line";

const Background = () => {
	return (
		<>
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="relative w-full h-full left-[-50px]">
					{Array.from({ length: 15 }, (_, index) => index + 1).map(
						(i) => (
							<Line
								key={i}
								top={`${Math.random() * 100}%`}
								width={`${Math.random() * 100 + 5}%`}
								delay={Math.random() * 1 + 0.5}
								rotate="-15deg"
							/>
						)
					)}
				</div>
			</div>

			<div className="absolute top-0 left-0 w-full h-full">
				<div className="relative w-full h-full">
					{Array.from({ length: 12 }, (_, index) => index + 1).map(
						(i) => (
							<Line
								key={i}
								top={`${Math.random() * 100}%`}
								width={`${Math.random() * 100 + 5}%`}
								delay={Math.random() * 1 + 0.5}
								rotate="75deg"
							/>
						)
					)}
				</div>
			</div>
		</>
	);
};

export default Background;
