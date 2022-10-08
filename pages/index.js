import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import nameLogo from '../public/name-logo.svg'
import { useState } from 'react'

export default function Home() {
    const bezier1 = { duration: 0.7, ease: [0, 1, 0, 1] }
    const bezier2 = { duration: 1, ease: [0, 1, 1, 1] }
    const flicker1 = [0, 0.6, 0, 0.4, 0, 0.8, 0.1, 1]
    const flicker2 = [0, 0.4, 0.6, 0.1, 0.7, 0, 0, 0.8, 0.4, 0.8, 1]
    const fadeDown = {
        initial: {
            translateY: -50,
            opacity: 0
        },
        animate: {
            translateY: 0,
            opacity: 1
        }
    }
    const slideLeft = {
        initial: {
            translateX: 200,
            opacity: 0
        },
        animate: {
            translateX: 0,
            opacity: flicker1
        }
    }
    const hiddenMask = `repeating-linear-gradient(225deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(225deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const [isInView, setIsInView] = useState(false);
    return (
        <div className='h-auto overflow-hidden min-h-screen'>
            <Header directory={'Home'}/>
            <motion.div
                className='h-full w-full absolute right-0'
                initial={false}
                animate={
                    isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ delay: 0.6, ...bezier1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
            >
                <div className='w-full h-full bg-[url("/site-bg.png")] bg-cover bg-no-repeat'/>
            </motion.div>
            <motion.div
                initial={{ translateY: -300, opacity: 0, rotate: '90deg' }}
                animate={{ translateY: 0, opacity: flicker2, rotate: '90deg' }}
                transition={bezier2}
                className='h-[452px] w-[866px] absolute top-[200px] left-[250px] z-[2] rotate-90 filter opacity-filter-40'
            >
                <Image src={nameLogo} alt="Name Logo" width={866} height={452} />
            </motion.div>
            <motion.div
                initial={{ translateX: -900 }}
                animate={{ translateX: 0 }}
                transition={bezier1}
                className='h-full w-full relative'>
                <div className='w-[1500px] h-[1500px] bg-black absolute top-[-220px] left-[-900px] z-[1] rotate-45' />
            </motion.div>
            <motion.div
                initial={{ translateY: -300 }}
                animate={{ translateY: 0 }}
                transition={bezier2}
                className='h-full w-full relative'>
                <div className='w-[1500px] h-[1500px] bg-transparent absolute top-[-1200px] right-[-350px] z-[0] rotate-45 border-8 border-orange-400 border-opacity-60' />
            </motion.div>
            <motion.div 
                initial={{ translateY: -300 }}
                animate={{ translateY: 0 }}
                transition={bezier2}
                className='h-full w-full relative'>
                <div className='w-[1500px] h-[1500px] bg-transparent absolute top-[-1400px] right-[-350px] z-[0] rotate-45 border-8 border-orange-400 border-opacity-60' />
            </motion.div>
            <motion.div
                initial={{ translateX: 1900 }}
                animate={{ translateX: 0 }}
                transition={bezier1}
                className='h-full w-full relative'>
                <div className='w-[1500px] h-[1500px] bg-black absolute top-[-600px] right-[-1500px] z-[0] rotate-45' />
            </motion.div>
            <motion.h1
                initial={{ translateY: 300, opacity: 0.5, rotate: '90deg' }}
                animate={{ translateY: 0, opacity: flicker1, rotate: '90deg' }}
                transition={bezier2}
                className='select-none text-[14rem] absolute z-[1] rotate-90 right-[-320px] top-[-300px] overflow-clip whitespace-nowrap leading-[12rem] opacity-filter-40'
            >
                VERA SCIENTIA<br />DE FUTURO
            </motion.h1>
            <div className='mt-[100px] mx-8'>
                <main className='h-[780px] py-16 mx-8 flex flex-row flex-wrap items-center 600:m-0'>
                    <div className='m-0 text-[5rem] 600:text-[3.5rem] font-display font-medium grow-[3] shrink-0 basis-auto'>
                        <div className='m-0 leading-[3rem] relative z-[3]'>
                            <h1>Long</h1>
                            <div className='absolute text-[5rem] z-[2] 600:text-[3.5rem]'>
                                <motion.h1 className='top-[10%] text-transparent text-stroke-white' variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.03, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 className='top-[20%] opacity-filter-40' variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.04, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 className='top-[30%] text-transparent text-stroke-white' variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.05, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 className='top-[40%] opacity-filter-40' variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.06, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 className='top-[50%] text-transparent text-stroke-white' variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.07, ...bezier1 }}>Long</motion.h1>
                            </div>
                        </div>
                        <motion.h1
                            variants={slideLeft}
                            initial='initial'
                            animate='animate'
                            transition={bezier2}
                            className='relative z-10 leading-[3rem] mx-[2rem] my-[4rem] pt-[4rem] pl-[15rem] 600:pl-0 600:pt-0'
                        >
                            Nguyen
                        </motion.h1>
                    </div>
                    <div className='relative leading-[6rem] text-[2rem] font-normal grow-0 shrink-[1] basis-auto text-right z-[10]'>
                        <motion.p className='my-[20px] 1025:text-left font-medium' initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay:0.2, ...bezier2 }}>Front-end developer</motion.p>
                        <motion.p className='my-[20px] 1025:text-left font-medium' initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay:0.3, ...bezier2 }}>Artist</motion.p>
                        <motion.p className='my-[20px] 1025:text-left font-medium' initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay:0.4, ...bezier2 }}>UI/UX Designer</motion.p>
                    </div>
                </main>
            </div>
            <div className='h-full w-full relative'>
                <motion.div
                    initial={{ translateX: -300, rotate: '45deg' }}
                    animate={{ translateX: 0, rotate: '45deg' }}
                    transition={bezier2}
                    className='w-[400px] h-[400px] bg-transparent absolute bottom-[200px] left-0 z-[1] rotate-45 border-8 border-teal-500 border-opacity-60' />
            </div>
            <div className='h-full w-full relative'>
                <motion.div
                    initial={{ translateY: 300, rotate: '45deg' }}
                    animate={{ translateY: 0, rotate: '45deg' }}
                    transition={bezier2}
                    className='w-[600px] h-[600px] bg-transparent absolute bottom-[-140px] left-[450px] z-[1] rotate-45 border-8 border-cyan-400 mix-blend-color-dodge border-opacity-60' />
            </div>
            <motion.h1
                initial={{ translateX: 300, opacity: 0 }}
                animate={{ translateX: 0, opacity: flicker2 }}
                transition={bezier2}
                className='select-none text-[14rem] absolute z-[1] right-[50px] top-[650px] overflow-clip leading-[12rem] opacity-filter-40'
            >
                EX
            </motion.h1>
            <motion.div
                initial={{ translateX: 200 }}
                animate={{ translateX: 0 }}
                transition={bezier2}
                className='absolute h-[900px] w-[400px] bg-black bg-opacity-20 overflow-hidden z-[1] top-0 right-0 backdrop-blur-sm' />
            <Footer />
        </div>
    )
}
