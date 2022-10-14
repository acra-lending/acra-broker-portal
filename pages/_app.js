import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />    
    </>
    )
    
}

export default MyApp
