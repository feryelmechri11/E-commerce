import React, { Component } from "react";
import "./App.css";

import Carte from "./Carte";

let listPhone = [
  {
    id: "1",
    title: "iPhone 11 Pro Max",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567808544078",
    price: 4000,
    description: "L'iPhone 11 Pro et l’iPhone 11 Pro Max incarnent l’engagement durable d’Apple pour la protection de l’environ­nement.",
    quantity: 0,
  },

  {
    id: "2",
    title: "iPhone 11 ",
    image:
      "https://www.tunisianet.com.tn/147091-large/telephone-portable-apple-iphone-11-64-go-silver.jpg",
    price: 3000,
    description: "iphone 11 loooooool ",
    quantity: 0,
  },

  {
    id: "3",
    title: "IPhone 7",
    image:
      "https://images.frandroid.com/wp-content/uploads/2019/04/apple-iphone-7-1.png",
    price: 2500,
    description: "IPhone 7 blabalalalalaal",
    quantity: 0,
  },
];

class App extends Component {
  state = {
    listPhone: listPhone,
    prix : 0,
  };

  /********************************fonction**********************/

  IncrementQuantityAndPrice = (id) => {
    let x = this.state.listPhone[id].quantity++;
    let y =this.state.prix+this.state.listPhone[id].price
    this.setState({ listPhone ,prix:y});
  };
  /*************************DECREMENT ************ */
  DecreaseQuantityAndPrice = (id) => {
    let x = this.state.listPhone[id].quantity--;
    let y =this.state.prix-this.state.listPhone[id].price
    this.setState({ listPhone ,
    prix:y});
  };

  render() {
    return (
      <div className="App">
        <Carte
          parfums={this.state.listPhone}
          prix={this.state.prix}
          increment={this.IncrementQuantityAndPrice}
          decrease={this.DecreaseQuantityAndPrice}
        />
      </div>
    );
  }
}
export default App;
