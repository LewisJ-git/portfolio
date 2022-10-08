import Image from 'next/image'
import nextLogo from '../public/next-js-logo.svg'
import { motion } from 'framer-motion'

const Footer = () => {
    const bezier = { duration: 2, ease: [0, 1, 0, 1] }
    return (
        <footer className='py-[2rem] flex justify-center items-center relative z-10 bg-black border-t-[#eaeaea] border-t-2'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: bezier }}
                viewport={{ once: true }}
            >
                <a
                    href="https://vercel.com/solutions/nextjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex flex-grow items-center justify-center'
                >
                    <p className='text-[1.5rem]'>Made in {' '}</p>
                    <span>
                        <Image src={nextLogo} alt="Next.js Logo" width={120} height={60} />
                    </span>
                </a>
            </motion.div>
        </footer>
    )
}

export default Footer
