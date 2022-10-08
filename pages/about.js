import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Portrait from '../public/portrait.jpg'
import nameLogo from '../public/name-logo.svg'

export default function about() {
    return (
        <div className='overflow-hidden'>
            <Header directory={'About'}/>
            <div className='h-[500px] relative overflow-hidden'>
                <div className='bg-[url("/site-bg-1.png")] bg-cover bg-no-repeat bg-fixed w-full h-full'>
                    <div className='w-[1500px] h-[1500px] bg-transparent absolute top-[-500px] right-[-1000px] z-[2] rotate-45 border-8 border-emerald-500 border-opacity-60' />
                    <div className='w-[1500px] h-[1500px] bg-transparent absolute top-[-500px] right-[-1400px] z-[2] rotate-45 border-8 border-emerald-500 border-opacity-60' />
                </div>
                <h1 className='absolute bottom-[100px] text-[5rem] z-[5] w-full px-[4rem] text-right'>Hello, I&apos;m <span className='text-lime-300'>Long</span>!</h1>
                <div className='absolute bottom-0 w-full h-full z-[3] bg-black clip-square-1' />
                <div className='absolute bottom-0 w-full h-full z-[1] bg-gradient-to-t from-black to-transparent' />
            </div>
            <div className='h-[678px] w-[1299px] absolute top-[100px] left-[-150px] z-[4] filter hue-rotate-[-30deg] opacity-filter-40'>
                <Image src={nameLogo} alt="Name Logo" width={1299} height={600} />
            </div>
            <div className='relative z-[2] my-[300px] mx-[2rem]'>
                <main>
                    <section className='py-[50px]'>
                        <h2 ><q>Art is not what you see, but what you make others see.</q><br />&#8212; Edgar Degas</h2>
                        <h2>I&apos;m a computer science undergraduate at the University of Houston.</h2>
                        <span className='h-auto w-full'>
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

