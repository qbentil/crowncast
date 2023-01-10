import { StateProvider } from '../context/StateProvider'
import { initialState } from '../context/initialState'
import reducer from '../context/reducer'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  )
}
