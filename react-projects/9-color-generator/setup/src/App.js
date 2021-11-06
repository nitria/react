import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn">generate</button>
        </form>
      </section>
      <section className="colors" type="submit">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
