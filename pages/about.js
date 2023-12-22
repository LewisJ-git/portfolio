import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Portrait from "../public/portrait.jpg";
import AboutDeco from "../components/AboutDeco";
import Hello from "../components/Hello";
import Quotes from "../components/Quotes";

export default function about() {
	return (
		<div className="overflow-hidden">
			<Header directory={"About"} />
			<Hello />
			<AboutDeco />
			<div className="relative z-[2] my-[100px]">
				<main>
					<div className="h-full w-full">
						<Quotes />

						<span className="h-auto w-full flex justify-end">
							<Image
								src={Portrait}
								alt="portrait"
								height={649}
								width={519}
							/>
						</span>
						<section className="py-[50px] text-3xl leading-relaxed ">
							<p>
								I&apos;m a computer science undergraduate at the
								University of Houston.
							</p>

							<p>
								I love designing and developing web apps,
								primarily working with Reactjs. And as a
								passionate front-end developer, I really enjoy
								exploring its&apos; ecosystem, spending time
								discovering about the ever-expanding new
								Javascript frameworks, or learning web design
								principles.
							</p>

							<p>
								Art is a communication, a medium for story
								telling. And I believe that websites are another
								form of canvases that we can use to illustrate
								our story, our vision to others. Moreover, I
								love to create more complex, energetic, and
								dynamic visuals that work seamlessly with user
								interfaces to really enhance the user
								experiences in websites. This makes websites
								more engaging for user and thus, get users more
								invested in our stories rather than a boring and
								soulless UI.
							</p>
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
