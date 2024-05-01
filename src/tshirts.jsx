import React,{Component, useEffect, useState} from 'react';
import Product from './product'
import Cart from './cart'


function Tshirts() {
    const [tshirts,setTshirts] = useState(null);
  
    useEffect(()=>{
            if (location.href == "https://www.printsplash.repl.co/magasin")
              fetch("https://api.printsplash.repl.co/getshirts",{
                   method: "POST", 
                    mode: "cors", 
                    headers: {
                    "Content-Type": "application/json",
                    },
              }).then(res=>res.json()).then(resp=>{
                
                  var produits = resp["tshirts"].map(pro => 
                      <Product
                          id={pro[0]}
                          prix={pro[1]}
                      />)
                  
                  setTshirts(Array(produits));
                });
            else 
            {
              var produits = tshirt.map(pro => 
                      <Cart
                          id={pro}
                      />)
              
              setTshirts(Array(produits));
              
            }
        },[])
    
    return (
        <>
          <div id="tshirts">          
            {tshirts}
          </div>
        </>
    );
}
  
  export default Tshirts;