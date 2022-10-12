import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ProSidebarProvider } from 'react-pro-sidebar';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ProSidebarProvider>
      <Component {...pageProps} />
    </ProSidebarProvider>
    )
    
}

export default MyApp
