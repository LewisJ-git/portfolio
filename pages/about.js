import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Portrait from "../public/portrait.jpg";
import AboutDeco from "../components/decos/AboutDeco";
import Hello from "../components/decos/Hello";
import Background from "../components/decos/Background";
import Quotes from "../components/decos/Quotes";

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
						<section className="py-[50px]">
							<h2>
								<q>Art is a language without words.</q>
								<br />
								&#8212; Tsubasa Yamaguchi
							</h2>
							<h2>
								I&apos;m a computer science undergraduate at the
								University of Houston.
							</h2>

							<p>
								I love designing and developing web apps,
								primarily working with Reactjs. And as a
								passionate front-end developer, I really enjoy
								exploring its&apos; ecosystem, spending time
								learning new Javascript frameworks, or
								discovering the development of web development
								as a whole.
							</p>
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
