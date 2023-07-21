import React, {useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory ] = useState("All")



  function categorySelected(e) {
    setSelectedCategory(e.target.value)
  }
  const itemsToDisplayed = selectedCategory === "All" ? 
  items : 
  items.filter(item => item.category === selectedCategory);


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categorySelected}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplayed.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
