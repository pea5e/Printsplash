import React,{Component, useEffect, useState} from 'react';


class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      id : props.id,
      qte : 1,
      price:1
    };
    this.changeqte = this.changeqte.bind(this);
    this.change = this.change.bind(this);
    
    fetch("https://api.printsplash.repl.co/getshirt",{
             method: "POST", 
              mode: "cors", 
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "id" : this.state.id
              })
        }).then(res=>res.json()).then(resp=>{
            this.setState({
            price : resp["price"]
            })
      });
  }

  render() {
  
    return (
       <div className="tshirtstock">
        <input type='hidden' className='tshirtid' value={this.state.id}></input>
        <img src={"https://api.printsplash.repl.co/tshirts/tshirt"+this.state.id+".png"} className="tshirt tenter"/>
         <label>Qte:</label>
         <input type="number" onFocus={this.change} value={this.state.qte} min={1} onInput={this.changeqte} className="qte"/>
        <span style={{display:"inline-block",margin:"0 0 0 2vw"}} className="tshirtprix">{this.state.price} MAD</span>
        <span className="tshirtprix">{this.state.price*this.state.qte} MAD</span>
         
        <button className="remove_from_cart" onClick={this.add} onMouseEnter={(e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-ban"></i>Annuler'; }} onMouseLeave = {(e) => { e.currentTarget.innerHTML  = '<i class="fa-solid fa-cart-arrow-down"></i>'; } }><i className="fa-solid fa-cart-arrow-down"></i></button>
      </div>
    );
  }


  add(e) {
        var element = e.currentTarget;
        supprimertshirt(element.parentElement.getElementsByClassName('tshirtid')[0].value)
        element.parentElement.remove()
      
  }

  changeqte(e){
    var val = e.currentTarget.value;
    if (val<0)
    {
      val = 1;
    }
    this.setState({
      qte: val
    })
  }

  change(e){
    this.setState({
      qte: ''
    })
    e.currentTarget.value = '';
  }
}

export default Cart;