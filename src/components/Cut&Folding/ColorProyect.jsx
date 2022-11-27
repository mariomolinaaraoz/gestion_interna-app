import React from 'react'

function ColorProyect() {
  return (
    <div>
        <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(27, 37, 54)"}}>Primary - rgb(27, 37, 54)</div>
        <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(19, 25, 38)"}}>Secondary - bg - rgb(19, 25, 38)</div>
        <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(54, 154, 126)"}}>Enfasis - rgb(54, 154, 126)</div>
        <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(212, 217, 220)", color:"black"}}>Text - rgb(212, 217, 220)</div>        
    </div>
  )
}

export default ColorProyect;
