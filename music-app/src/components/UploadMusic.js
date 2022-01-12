import React, { useRef } from "react";
import styled from "styled-components";
import "../assets/styles/app.css";
// import app from "../firebase";
import { BsPlusSquare } from "react-icons/bs";

const Button = styled.button`
  font-size: 1rem;
  color: var(--white);
  background-color: var(--primaryColor);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

function UploadMusic() {
  return (
    <div>
      <BsPlusSquare />
    </div>
  );
}

export default UploadMusic;
