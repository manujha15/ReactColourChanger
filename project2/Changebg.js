import React,{ useState } from 'react'
import "./changebg.css"
function Changebg() {
    const[color, setColor] =useState("#BAFA01")
  return (
    <><h2>Background colour change</h2>
    <div style={{width:"325px",height:"350px" ,backgroundColor:color}}></div>
    <button className="btn btn1" onClick={()=>setColor("red")}>Red</button>
    <button className="btn btn2" onClick={()=>setColor("blue")}>Blue</button>
    <button className="btn btn3" onClick={()=>setColor("green")}>Green</button>
    <button className="btn btn4" onClick={()=>setColor("yellow")}>yellow</button>
    <button className="btn btn5" onClick={()=>setColor("golden")}>Golden</button>
    <button className="btn btn6" onClick={()=>setColor("orange")}>Orange</button>
      
    </>
  )
}

export default Changebg
