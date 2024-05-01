import React ,{Component} from 'react';

// class Product extends Component {
//   constructor(props) {
//     super();
//     this.state = {
      
//     };
//     this.changeprix = this.changeprix.bind(this);
//   }

  // render() {
export default function Product(props) {
    var addbutton;
    if(tshirt.includes(props.id.toString()))
    {
      addbutton = <button className="remove_from_cart" onClick={(event) => add(event.currentTarget)} onMouseEnter={(e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-ban"></i>Annuler'; }} onMouseLeave = {(e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-cart-arrow-down"></i>Ajouté'; } }><i className="fa-solid fa-cart-arrow-down"></i>Ajouté</button>
    }
    else 
      addbutton = <button className="add_to_cart" onClick={(event) => add(event.currentTarget)}><i className="fa-solid fa-cart-plus"></i>Ajouter au Panier</button>


  
    return (
       <div className="tshirtstock">
        <input type='hidden' className='tshirtid' value={props.id}></input>
        <img src={"https://api.printsplash.repl.co/tshirts/tshirt"+props.id+".png"} className="tshirt tenter"/>
        <span className="tshirtprix">{props.prix} MAD</span>
         {addbutton}
      </div>
    );
}

//<i class="fa-solid fa-ban"></i>
  // }
  // this.setState({
    //   prix: val
    // })
    // this.changed = true;
/*

<div id="addqte">
          <button className="add_to_cart">+ PANIER</button>
          <input type="number" min="0" className="qte"/>
        </div>
        <button className="add_to_cart">- PANIER</button>
      </div>
      */

function add(element) {
    
    if (element.className == "add_to_cart")
    {
      ajoutertshirt(element.parentElement.getElementsByClassName('tshirtid')[0].value)
      element.className = "remove_from_cart";
      element.innerHTML  = '<i class="fa-solid fa-cart-arrow-down"></i>Ajouté';
      element.onmouseenter = ((e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-ban"></i>Annuler'; } )
      element.onmouseleave = ((e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-cart-arrow-down"></i>Ajouté'; } )
    }
    else{
      supprimertshirt(element.parentElement.getElementsByClassName('tshirtid')[0].value)
      console.log(element)
      element.className = "add_to_cart";
      element.innerHTML  = '<i class="fa-solid fa-cart-plus"></i>Ajouter au Panier';
      element.onmouseenter = ((e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-cart-plus"></i>Ajouter au Panier'} );
      element.onmouseleave = ((e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-cart-plus"></i>Ajouter au Panier'} );
    }
    console.log(element);
  
}