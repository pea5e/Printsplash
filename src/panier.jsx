import React from 'react'
import Tshirts from './tshirts'

export default function Panier() {
  var Form;
  if(tshirt.length>0)
    Form = <div id="paying">
        <input type="text"   placeholder="Nom"/>
        <input type="text"   placeholder="Lieu"/><i onClick={locateme} className="fa-solid fa-location-arrow"></i>
        <input type="text" onKeyPress={creditnumber}  placeholder="Carte de Paiment"/><i className="fa-solid fa-credit-card"></i>
        <button onClick={pay}>Terminez la Commande</button>
      </div>
  
  return(
    <>
      <div id="pan">
        <h1>Votre Panier</h1>
        <h2>Total <span id="items2">{tshirt.length}</span></h2>
        <h4 onClick={clearall}></h4>
        <Tshirts/>
      </div>
      {Form}
    </>
  );
}


function locateme()
{
  
        navigator.geolocation.getCurrentPosition(position => {
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`).then(res => res.json()).then( data => {
                    document.getElementById("paying").getElementsByTagName('input')[1].value =  data.address.city;
                });
        });
}
function clearall(){
  clearCookies();
  location.reload();
}

function creditnumber(e)
{
  var element = e.currentTarget;
  if (e.which-48 > 9 || e.which-48 < 0)
  {
    e.preventDefault();
  }
  else if(element.value.length > 24){
    element.value = element.value.substring(0,24);
  }
  else if (element.value.replaceAll(' ','').length%4===0){
    element.value += ' ';
  }
}

function pay(e)
{
  var input = e.currentTarget.parentElement.getElementsByTagName('input');

  var nom = input[0].value;
  var lieu = input[1].value; 
  var carte = input[2].value.replaceAll(' ','');
  var qte = Array.from(document.getElementsByClassName('qte')).map((ele)=>ele.value)

  if (nom === '' || lieu === '' || carte === '')
  {
    e.currentTarget.style.border = "1px solid red";
    setInterval(()=>{
    e.currentTarget.style.border = "1px solid black";
    },3000)
    return;
  }
  else
  {
    fetch("https://api.printsplash.repl.co/pay",{
             method: "POST", 
              mode: "cors", 
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "lieu" : lieu,
                "nom" : nom,
                "carte" : carte,
                "products" :tshirt,
                "qte": qte
              })
      }).then(res=>res.json()).then(resp=>{
              clearCookies();
              location.href = '/';
          });
  }
  
}