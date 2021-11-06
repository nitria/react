import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [minusPlus, setMinusPlus] = useState(true);

  return (
    <section className="question">
      <div className="header">
        <h4>{title}</h4>
        <button onClick={() => setMinusPlus(!minusPlus)} className="btn">
          {minusPlus ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </div>
      {!minusPlus && <p>{info}</p>}
    </section>
  );
};

export default Question;
