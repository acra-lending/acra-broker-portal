import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    
      <Component {...pageProps} />    
    
    )
    
}
export default MyApp
