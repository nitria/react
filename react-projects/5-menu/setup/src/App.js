import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menu, setMenu] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenu(items);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
