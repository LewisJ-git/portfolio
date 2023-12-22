import Background from "./decos/Background";
import BackgroundImage from "./decos/BackgroundImage";
import Diamond from "./decos/Diamond";
import BackgroundText from "./decos/BackgroundText";
import nameLogo from "../../public/name-logo.svg";
import statue1 from "../../public/statue-1.png";

const HomeDeco = () => {
	return (
		<>
			<Background src="/site-bg-1.png" />
			<BackgroundImage
				opacity={0.7}
				fit="scale-down"
				size="600px"
				zIndex={2}
				source={statue1}
				left={-300}
				top={100}
			/>
			<BackgroundImage
				initialY={-300}
				isSharp={false}
				duration={1}
				slowFlicker={true}
				rotate={90}
				opacity={0.4}
				source={nameLogo}
			/>
			<BackgroundText
				isSharp={false}
				duration={1}
				rotate={-90}
				slowFlicker={true}
				text="ASTRA"
				size={180}
				opacity={0.25}
				bottom={140}
				right={80}
				initialX={-300}
			/>
			<BackgroundText
				isSharp={false}
				duration={1.2}
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
				duration={0.7}
				size={1500}
				backgroundColor="rgb(0, 0, 0)"
				top={-200}
				left={-900}
				zIndex={1}
			/>
			<Diamond
				initialY={-300}
				duration={1}
				size={1500}
				top={-1200}
				right={-350}
				borderWidth={8}
				borderColor="rgba(251, 146, 60, 0.6)"
			/>
			<Diamond
				initialY={-300}
				duration={1.2}
				size={1500}
				top={-1400}
				right={-350}
				isSharp={false}
				borderWidth={8}
				borderColor="rgba(251, 146, 60, 0.4)"
				zIndex={1}
			/>
			<Diamond
				initialX={1900}
				duration={0.8}
				size={650}
				top={-100}
				right={-230}
				backgroundColor="rgb(0, 0, 0)"
			/>
			<Diamond
				initialX={-300}
				size={400}
				duration={1}
				top={200}
				zIndex={1}
				borderWidth={8}
				borderColor="rgb(20, 184, 166)"
			/>
			<Diamond
				initialY={300}
				size={600}
				isSharp={false}
				duration={1}
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
