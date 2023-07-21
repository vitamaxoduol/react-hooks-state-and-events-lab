import React, {useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // useSstate hook for dark mode 
  const [darkMode, setDarkMode] = useState(false)




  //toggling function for setting dark mode
  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode" }
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
