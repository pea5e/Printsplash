import React from 'react'
import Tshirts from './tshirts'

export default function Magasin() {
  return(
    <>
      <h1 id="closetrod"></h1>
      <div id="show">
            <h1 id="describe"></h1>
            <img className="model" id="model1" src="tshirt1.png"/>
            <img className="model" id="model2" src="tshirt2.png"/>
            <img className="model" id="model3" src="tshirt3.png"/>
            <img className="model" id="model4" src="tshirt4.png"/>
            <img className="model" id="model5" src="tshirt5.png"/>
      </div>
      <Tshirts/>
    </>
  );
}