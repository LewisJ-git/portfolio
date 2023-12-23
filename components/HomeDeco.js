import Background from "./decos/Background";
import BackgroundImage from "./decos/BackgroundImage";
import Diamond from "./decos/Diamond";
import BackgroundText from "./decos/BackgroundText";
import nameLogo from "../public/name-logo.svg";
import {
	bezier_curved,
	bezier_sharp,
	flicker_fast,
	flicker_slow,
} from "./libs/Animations";

const HomeDeco = () => {
	return (
		<>
			<Background src="/site-bg-1.png" />
			<BackgroundImage
				initialY={-300}
				transition={bezier_curved(1)}
				opacity={flicker_slow(0.4)}
				rotate={90}
				source={nameLogo}
			/>
			<BackgroundText
				transition={bezier_curved(1)}
				rotate={-90}
				slowFlicker={true}
				text="ASTRA"
				size={180}
				opacity={flicker_slow(0.25)}
				bottom={140}
				right={80}
				initialX={-300}
			/>
			<BackgroundText
				transition={bezier_curved(1.2)}
				rotate={0}
				text="AD"
				size={160}
				opacity={0.25}
				bottom={10}
				right={50}
				initialY={-100}
			/>
			<Diamond
				initialX={-900}
				transition={bezier_sharp(0.7)}
				opacity={flicker_fast(1)}
				size={1500}
				backgroundColor="rgb(0, 0, 0)"
				top={-200}
				left={-900}
				zIndex={1}
			/>
			<Diamond
				initialY={-300}
				transition={bezier_sharp(1)}
				opacity={flicker_slow(1)}
				size={1500}
				top={-1200}
				right={-350}
				borderWidth={8}
				borderColor="rgba(251, 146, 60, 0.6)"
			/>
			<Diamond
				initialY={-300}
				transition={bezier_curved(1.2)}
				opacity={flicker_fast(1)}
				size={1500}
				top={-1400}
				right={-350}
				borderWidth={8}
				borderColor="rgba(251, 146, 60, 0.4)"
				zIndex={1}
			/>
			<Diamond
				initialX={1900}
				transition={bezier_sharp(0.8)}
				opacity={flicker_slow(1)}
				size={650}
				top={-100}
				right={-230}
				backgroundColor="rgb(0, 0, 0)"
			/>
			<Diamond
				initialX={-300}
				size={400}
				transition={bezier_sharp(1)}
				opacity={flicker_fast(1)}
				top={200}
				zIndex={1}
				borderWidth={8}
				borderColor="rgb(20, 184, 166)"
			/>
			<Diamond
				initialY={300}
				size={600}
				transition={bezier_curved(1)}
				opacity={flicker_fast(1)}
				top={400}
				left={450}
				zIndex={1}
				borderWidth={8}
				borderColor="rgb(20, 184, 166)"
				mixBlendMode="color-dodge"
			/>
		</>
	);
};

export default HomeDeco;
