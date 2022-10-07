import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence mode='wait'>
            <NavBar key={'nav'}/>
            <Component {...pageProps} key={'main'}/>
        </AnimatePresence>
    )
}

export default MyApp
