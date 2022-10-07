import { useState } from 'react'
import { motion } from 'framer-motion'
import navbarStyles from '../styles/Navbar.module.css'
import Link from 'next/link'

const NavItem = ({ title, linkURL }) => {
    const [hovered, hoveredState] = useState(false)
    const fade = {
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.7, ease: [0, 1, 0, 1] }
    }
    return (
        <div onMouseEnter={() => hoveredState(true)} onMouseLeave={() => hoveredState(false)}><Link href={linkURL}>{title}</Link>
            {hovered &&
                <motion.div className={navbarStyles.dupes_container}>
                    <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={fade} viewport={{ once: false }} className={navbarStyles.dupes}>{title}</motion.div>
                    <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={fade} viewport={{ once: false }} className={navbarStyles.dupes}>{title}</motion.div>
                    <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={fade} viewport={{ once: false }} className={navbarStyles.dupes}>{title}</motion.div>
                </motion.div>
            }
        </div>
    )
}

export default NavItem
