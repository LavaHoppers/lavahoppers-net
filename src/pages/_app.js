import Link from 'next/link';
import '../styles/global.css'
import style from '../styles/navbar.module.css'

/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
function App({ Component, pageProps }) {
  return <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
}

function NavBar({ state }) {
  return (
    <ul class={style.list}>
      <li><Link class={style.link} href="default.asp">Home</Link></li>
      <li><Link class={style.link} href="news.asp">News</Link></li>
      <li><Link class={style.link} href="contact.asp">Contact</Link></li>
      <li><Link class={style.link} href="about.asp">About</Link></li>
    </ul>
  );
}
  
export default App