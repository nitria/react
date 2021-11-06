import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const generate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
    if (count <= 0) {
      amount = 0;
    }

    if (count >= data.length) {
      amount = data.length;
    }
  };
  return (
    <section className="section-center">
      <div className="title">
        <h2>lorem ipsum</h2>
      </div>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="button" className="btn" onClick={generate}>
          generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
}

export default App;
