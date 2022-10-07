import Footer from '../components/Footer'
import Header from '../components/Header'
import homeStyles from '../styles/Home.module.css'
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
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    return (
        <div className={homeStyles.home}>
            <Header directory={'Home'}/>
            <motion.div
                className={homeStyles.bg}
                initial={false}
                animate={
                    isLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ delay: 0.6, ...bezier1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
            >
                <Image src="/site-bg.png" alt="site_background" width={1440} height={900} onLoad={() => setIsLoaded(true)} />
            </motion.div>
            <motion.div initial={{ translateY: -300, opacity: 0, rotate: '90deg' }} animate={{ translateY: 0, opacity: flicker2, rotate: '90deg' }} transition={bezier2} className={homeStyles.name_logo_plate}>
                <Image src={nameLogo} alt="Name Logo" width={866} height={452} />
            </motion.div>
            <motion.div initial={{ translateX: -900 }} animate={{ translateX: 0 }} transition={bezier1} className={homeStyles.plate_container}>
                <div className={homeStyles.plate} />
            </motion.div>
            <motion.div initial={{ translateY: -300 }} animate={{ translateY: 0 }} transition={bezier2} className={homeStyles.plate_container_2}>
                <div className={homeStyles.plate_2} />
            </motion.div>
            <motion.div initial={{ translateY: -300 }} animate={{ translateY: 0 }} transition={bezier2} className={homeStyles.plate_container_3}>
                <div className={homeStyles.plate_3} />
            </motion.div>
            <motion.div initial={{ translateX: 1900 }} animate={{ translateX: 0 }} transition={bezier1} className={homeStyles.plate_container_4}>
                <div className={homeStyles.plate_4} />
            </motion.div>
            <motion.h1 initial={{ translateY: 300, opacity: 0, rotate: '90deg' }} animate={{ translateY: 0, opacity: flicker1, rotate: '90deg' }} transition={bezier2} className={homeStyles.slogan_plate}>VERA SCIENTIA<br />DE FUTURO</motion.h1>
            <div className={homeStyles.container}>
                <main className={homeStyles.main}>
                    <div className={homeStyles.title}>
                        <div className={homeStyles.firstname}>
                            <h1>Long</h1>
                            <div className={homeStyles.duplicates}>
                                <motion.h1 variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.03, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.04, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.05, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.06, ...bezier1 }}>Long</motion.h1>
                                <motion.h1 variants={fadeDown} initial='initial' animate='animate' transition={{ delay: 1.07, ...bezier1 }}>Long</motion.h1>
                            </div>
                        </div>
                        <motion.h1 variants={slideLeft} initial='initial' animate='animate' transition={bezier2} className={homeStyles.lastname}>Nguyen</motion.h1>
                    </div>
                    <div className={homeStyles.description}>
                        <motion.p initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay:0.2, ...bezier2 }}>Front-end developer</motion.p>
                        <motion.p initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay:0.3, ...bezier2 }}>Artist</motion.p>
                        <motion.p initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay:0.4, ...bezier2 }}>UI/UX Designer</motion.p>
                    </div>
                </main>
            </div>
            <div className={homeStyles.plate_container_5}>
                <motion.div initial={{ translateX: -300, rotate: '45deg' }} animate={{ translateX: 0, rotate: '45deg' }} transition={bezier2} className={homeStyles.plate_5} />
            </div>
            <motion.div initial={{ translateY: 300 }} animate={{ translateY: 0 }} transition={bezier2} className={homeStyles.plate_container_6}>
                <div className={homeStyles.plate_6} />
            </motion.div>
            <motion.h1 initial={{ translateX: 300, opacity: 0 }} animate={{ translateX: 0, opacity: flicker2 }} transition={bezier2} className={homeStyles.slogan_plate_2}>EX</motion.h1>
            <motion.div initial={{ translateX: 200 }} animate={{ translateX: 0 }} transition={bezier2} className={homeStyles.cover} />
            <Footer />
        </div>
    )
}
