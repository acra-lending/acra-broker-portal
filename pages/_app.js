import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import NavBar from './components/NavBar';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
      <NavBar />
      <Component {...pageProps} />    
    </>
    )
    
}
export default MyApp
