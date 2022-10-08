import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const NavItem = ({ title, linkURL }) => {
    const [hovered, hoveredState] = useState(false)
    const fade = {
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.7, ease: [0, 1, 0, 1] }
    }
    return (
        <div
            onMouseEnter={() => hoveredState(true)}
            onMouseLeave={() => hoveredState(false)}
        >
            <Link href={linkURL}>{title}</Link>
            {hovered &&
                <motion.div className='relative'>
                    <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={fade} viewport={{ once: false }} className='absolute text-transparent text-stroke-white z-0 cursor-pointer select-none top-[-15px] 600:top-[-15px]'><Link href={linkURL}>{title}</Link></motion.div>
                    <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={fade} viewport={{ once: false }} className='absolute text-transparent text-stroke-white z-0 cursor-pointer select-none top-[0px] 600:top-[-5px]'><Link href={linkURL}>{title}</Link></motion.div>
                    <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={fade} viewport={{ once: false }} className='absolute text-transparent text-stroke-white z-0 cursor-pointer select-none top-[20px] 600:top-[10px]'><Link href={linkURL}>{title}</Link></motion.div>
                </motion.div>
            }
        </div>
    )
}

export default NavItem
