import navbarStyles from '../styles/Navbar.module.css'
import { motion } from 'framer-motion'
import NavItem from './NavItem'

const NavBar = () => {
    const bezier = { duration: 0.8, ease: [0, 1, 1, 1] }
    const fadeUp = {
        initial: { opacity: 0, translateY: -50 },
        enter: { opacity: 1, translateY: 0 }
    }
    return (
        <div className={navbarStyles.navbar}>
        <div className={navbarStyles.container}>
            <ul>
                <motion.li variants={fadeUp} initial='initial' animate='enter' transition={{ delay: 0, ...bezier }}>
                    <motion.svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="40.000000pt" height="40.000000pt" viewBox="0 0 1000.000000 1000.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <motion.defs>
                            <motion.linearGradient id="gradient">
                                <motion.stop transition={{ duration: 2, delay: 0.5 }}
                                    animate={{ stopColor: ["#00000000", "#ffffff"]}}
                                />
                            </motion.linearGradient>
                        </motion.defs>

                        <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
                        fill="url(#gradient)" stroke="none">
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={bezier}
                            strokeWidth="200"
                            stroke="rgba(255, 255, 255, 1)"
                            strokeLinecap="round"
                            d="M1400 8015 c0 -696 -3 -1265 -8 -1265 -4 0 -183 176 -397 390 -214
                                215 -393 390 -397 390 -5 0 -8 -588 -8 -1307 l0 -1307 405 -406 405 -406 0
                                -1762 0 -1762 1040 0 1040 0 0 722 0 723 723 -723 722 -722 1315 0 1315 0
                                -2038 2038 -2037 2037 0 2313 0 2312 -1040 0 -1040 0 0 -1265z"/>
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.3, ...bezier }}
                            strokeWidth="200"
                            stroke="rgba(255, 255, 255, 1)"
                            strokeLinecap="round"
                            d="M6370 7963 l0 -1318 -793 793 c-436 436 -796 790 -800 786 -4 -4 -7
                                -563 -7 -1243 l0 -1236 2250 -2250 2250 -2250 0 1250 0 1250 -438 440 -438
                                440 1 2328 1 2327 -1013 0 -1013 0 0 -1317z"/>
                        </g>
                    </motion.svg>
                </motion.li>
                <motion.li variants={fadeUp} initial='initial' animate='enter' transition={{ delay: 0.1, ...bezier }}><NavItem title={'Home'} linkURL={'/'} /></motion.li>
                <li></li>
                <motion.li variants={fadeUp} initial='initial' animate='enter' transition={{ delay: 0.3, ...bezier }}><NavItem title={'About'} linkURL={'/about'} /></motion.li>
                <motion.li variants={fadeUp} initial='initial' animate='enter' transition={{ delay: 0.4, ...bezier }}><NavItem title={'Résumé'} linkURL={'/resume'} /></motion.li>
                <motion.li variants={fadeUp} initial='initial' animate='enter' transition={{ delay: 0.5, ...bezier }}><NavItem title={'Contact'} linkURL={'/contact'} /></motion.li>
            </ul>
        </div>
        </div>
    )
}

export default NavBar
