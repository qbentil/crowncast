import { StateProvider } from '../context/StateProvider'
import { initialState } from '../context/initialState'
import reducer from '../context/reducer'
import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence>
        <ToastContainer position='top-center' />
        <Component {...pageProps} />
      </AnimatePresence>
    </StateProvider>
  )
}
