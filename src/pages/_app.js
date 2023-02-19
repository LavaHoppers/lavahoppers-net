import Link from 'next/link';
import '../styles/global.css'
import style from '../styles/navbar.module.css'
import Image from 'next/image';
import { useState } from 'react';

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
  let t = Array(4).fill(false)
  t[0] = true
  const [whichButton, setWhichButton] = useState(t)

  function handleClick(i) {
    const newArray = Array(4).fill(false)
    newArray[i] = true
    setWhichButton(newArray)
  }
  

  return (
    <ul className={style.list}>
      <NavButton 
        set={whichButton[0]} 
        name="Home" 
        link="/" 
        onClick={()=>handleClick(0)}
      />
      <NavButton 
        set={whichButton[1]} 
        name="Home" 
        link="/" 
        onClick={()=>handleClick(1)}
      />
      <NavButton 
        set={whichButton[2]} 
        name="Home" 
        link="/" 
        onClick={()=>handleClick(2)}
      />
      <NavButton 
        set={whichButton[3]} 
        name="Search" 
        link="/super-search" 
        onClick={()=>handleClick(3)}
      />
      {/*<li><Image src="/logo.png" alt="Logo" width={32} height={32}/></li>*/}
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
export default App