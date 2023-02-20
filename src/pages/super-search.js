import { Default } from "../lib/layout"
import { useState } from "react"
import { useEffect } from 'react'
import { useRef } from 'react'

export default () => {
  return <Default 
          title="Super Search"
          content={Content()} />
}

function Content() {
  const [text, setText] = useState(String)
  const textRef = useRef({});
  textRef.current = text;

  function keyDownHandler(event) {
    let text = textRef.current

    console.log(event.key)
    
    if (/^.$/.test(event.key)) {
      setText(text + event.key)
    } else if (event.key === "Backspace") {
      setText(text.slice(0, text.length-1))
    } else if (event.key === "Enter") {
      setText(text + '\n')
    }
    console.log(textRef.current)
  }
  
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {// clean up
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  
  let lines = text.split('\n')
  return (<>{lines.map(x => {
    let words = x.split(' ')
    let colored = words.map(y => {
      if (y==='set')
        return <span style={{ color: "red" }}>{y} </span>
      else
        return <span>{y} </span>
    })
    return <p k={x} style= {{ margin: 0 }}>{colored}</p>
  })}</>)
}