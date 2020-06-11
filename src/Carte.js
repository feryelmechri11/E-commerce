import React from "react";
import "./carte.css";
function Carte(props) {
  return (
    <div>
      <h1>Welcome to my Store </h1>
      <p> Total :{props.prix} </p>
      <div className="container-phones">
        {props.parfums.map((el, id) => (
          <div className="phone-card" key={id}>
            <h5>{el.title}</h5>

            <img src={el.image} />
            <p>{el.description}</p>
            <p>{el.price}</p>
            <button onClick={() => props.increment(id)}>+</button>
            <button onClick={() => props.decrease(id)}>-</button>
            <span>{el.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carte;
