import React, { useState } from "react";
import "./App.css";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import menus from "./data";

let allCategory = ["all", ...new Set(menus.map(category => category.category))];
// console.log(allCategory);

function App() {
  const [allMenues, setAllMenues] = useState(menus);
  const [categories, setCategories] = useState(allCategory);

  const filteredCategory = menuItem => {
    if (menuItem == "all") {
      setAllMenues(menus);
      return;
    }
    const filter = menus.filter(menu => menu.category === menuItem);
    setAllMenues(filter)
    console.log(filter);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
          <Categories
            categories={categories}
            filteredCategory={filteredCategory}
          />
          <Menu allMenues={allMenues} />
        </div>
      </section>
    </main>
  );
}

export default App;
