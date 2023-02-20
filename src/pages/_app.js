import Link from 'next/link';
import '../styles/global.css'
import style from '../styles/navbar.module.css'
import Image from 'next/image';
import { useState } from 'react';

/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
export default ({ Component, pageProps }) => {
  return <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
}

function NavBar() {

  const pages = [
    {name: "Home", route: "/"},
    {name: "Contact", route: "/contact"},
    {name: "Projects", route: "/projects"},
    {name: "Search", route: "/super-search"},
  ]

  // init the state
  let t = Array(pages.length).fill(false); t[0] = true;
  const [currentPage, setCurrentPage] = useState(t)

  function handleClick(i) {
    let t = Array(pages.length).fill(false); t[i] = true;
    setCurrentPage(t)
  }

  return (
    <ul className={style.list}>
      {pages.map( x => {
        const i = pages.indexOf(x)
        return <NavButton key={i} set={currentPage[i]} name={x.name} link={x.route} onClick={()=>handleClick(i)} />
      })}
    </ul>
  );
}
  

function NavButton({set, name, link, onClick }) {
  if (!set) {
    return <li><Link onClick={onClick} href={link}>{name}</Link></li>
  }
  else {
    return <li><div className={style.set} href={link}>{name}</div></li>
  }
      
}
