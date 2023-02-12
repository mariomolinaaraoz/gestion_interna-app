import { useState } from 'react'
import { createGlobalStyle } from "styled-components";


function ColorProyect() {

  const [color, setColor] = useState("#1b2536");
  const GlobalStyles = createGlobalStyle`
  :root, html {
    --text-color: ${color} !important;
    --color-background: white;
    --first-color: ${color} !important;
  }
`;

  return (
    <div className="ms-5">
      <h1 className="md-fs mt-5 mb-3"><u>Definir colores del proyecto:</u></h1>
      
      <div className="ms-5">

          <div class="mb-3">
            <label for="primary-color" class="form-label">Color Principal:</label>
            <input type="color" class="form-control form-control-color p-0 w-25" id="primary-color" value={color} title="Choose your color" onChange={e => setColor(e.target.value)}/>
          </div>

          <div class="mb-3">
            <label for="secondary-color" class="form-label">Color Secondary:</label>
            <input type="color" class="form-control form-control-color p-0 w-25" id="secondary-color" value="#131926" title="Choose your color"/>
          </div>

          <div class="mb-3">
            <label for="secondary-color" class="form-label">Color Enfasis:</label>
            <input type="color" class="form-control form-control-color p-0 w-25" id="secondary-color" value="#369a7e" title="Choose your color"/>
          </div>

          <div class="mb-3">
            <label for="secondary-color" class="form-label">Color Texto:</label>
            <input type="color" class="form-control form-control-color p-0 w-25" id="secondary-color" value="#d4d9dc" title="Choose your color"/>
          </div>

          <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(27, 37, 54)"}}>Primary - rgb(27, 37, 54)</div>
          <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(19, 25, 38)"}}>Secondary - bg - rgb(19, 25, 38)</div>
          <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(54, 154, 126)"}}>Enfasis - rgb(54, 154, 126)</div>
          <div className="m-5 px-5 py-2 w-50" style={{backgroundColor: "rgb(212, 217, 220)", color:"black"}}>Text - rgb(212, 217, 220)</div>        
      </div>
    </div>
  )
}

export default ColorProyect;
