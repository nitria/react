import React, { useRef } from "react";
import styled from "styled-components";
import "../assets/styles/app.css";
import app from "../firebase";

const Button = styled.button`
  font-size: 1rem;
  color: var(--white);
  background-color: var(--primaryColor);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

function UploadMusic() {
  const ref = useRef(null);

  const UploadImage = (props) => {
    return <Button onClick={props.onClick}>Upload Image</Button>;
  };

  const handleClick = () => {
    if (ref) {
      ref.current.click();
    }
  };

  const handleUpload = async (event) => {
    if (!app) return;

    const uploadedFile = event?.target.files[0];
    if (!uploadedFile) return;

    const storage = app.storage();
    const storageRef = storage.ref("images");

    try {
      await storageRef.child(uploadedFile.name).put(uploadedFile);
      alert("Successfully uploaded picture!");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <UploadImage onClick={() => handleClick()} />
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        hidden
        ref={ref}
        onChange={handleUpload}
      />
    </div>
  );
}

export default UploadMusic;
