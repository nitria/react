import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(",");
  const hex = rgbToHex(...rgb);

  const copyColor = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
    return clearTimeout(
      setTimeout(() => {
        setAlert(false);
      }, 3000)
    );
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={copyColor}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied</p>}
    </article>
  );
};

export default SingleColor;
