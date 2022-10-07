import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Portrait from '../public/portrait.jpg'
import bioStyles from '../styles/Bio.module.css'
import nameLogo from '../public/name-logo.svg'

export default function about() {
    return (
        <div className={bioStyles.bio}>
            <Header directory={'About'}/>
            <div className={bioStyles.parallax_scene_1}>
                <div className={bioStyles.bg_1}>
                    <div className={bioStyles.plate_1} />
                    <div className={bioStyles.plate_2} />
                </div>
                <h1>Hello, I&apos;m <span>Long</span>!</h1>
                <div className={bioStyles.cover} />
                <div className={bioStyles.cover_gradient} />
            </div>
            <div className={bioStyles.name_logo_plate}>
                <Image src={nameLogo} alt="Name Logo" width={1299} height={600} />
            </div>
            <div className={bioStyles.container_main}>
                <main>
                    <section className={bioStyles.sec_1}>
                        <h2 ><q>Art is not what you see, but what you make others see.</q><br />&#8212; Edgar Degas</h2>
                        <h2>I&apos;m a computer science undergraduate at the University of Houston.</h2>
                        <span className={bioStyles.portrait}>
                            <Image src={Portrait} alt='portrait' height={649} width={519} />
                        </span>
                        <p>I love designing and developing web apps, primarily working with Reactjs.
                            And as a passionate front-end developer, I really enjoy exploring its&apos; ecosystem,
                            spending time learning new Javascript frameworks, or discovering
                            the development of web development as a whole.
                        </p>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}

