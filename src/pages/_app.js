import '../styles/global.css'
import { NavBar } from '../lib/navigation-bar'

/**
 * Every page gets the navigation bar
 */
export default ({ Component, pageProps }) => {
  return <div>
    <NavBar pages={[
      {name: "Home", route: "/"},
      {name: "Contact", route: "/contact"},
      {name: "Projects", route: "/projects"},
      {name: "Sandbox", route: "/sandbox"},
    ]} />
    <Component {...pageProps} />
  </div>
}


