// import { useState } from "react";
import React, { useState} from "react";

function Item({ name, category }) {
  // useState hook for inCart status
  const [addToCart, setAddToCart ] = useState(false);

  //toggle function for addToCart status
  function toggleAddToCart() {
    setAddToCart((addToCart) => !addToCart)
  }


  return (
    <li className={addToCart ? "add to the cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleAddToCart}>{addToCart ? "Remove from the cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
