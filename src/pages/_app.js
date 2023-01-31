import '@/styles/globals.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
    <Footer/>
    </>

  )
}
