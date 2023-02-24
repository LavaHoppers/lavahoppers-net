import style from '../styles/navbar.module.css'
import Link from 'next/link';
import { useState } from 'react';

/**
 * A navigation bar that displays at the top of the screen. Support for all kinds of links!
 * @param {*} pages a list of classes that all have a name and route.
 * @returns a navigation bar component
 */
export function NavBar({pages}) {

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
  
/**
 * A button that is either depressed or not. 
 */
function NavButton({set, name, link, onClick }) {
  if (!set) {
    return <li><Link onClick={onClick} href={link}>{name}</Link></li>
  }
  else {
    return <li><div className={style.set} href={link}>{name}</div></li>
  }
      
}