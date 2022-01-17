import React from "react";
import styled from "styled-components";
import "../assets/styles/app.css";
import { BsPlusSquare } from "react-icons/bs";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

function UploadMusic() {
  const storage = getStorage();
  // const songsRef = ref(storage, "songs/" + song.name);

  return (
    <div>
      <UploadButton title="Upload Songs" />
    </div>
  );
}

export default UploadMusic;

const UploadButton = styled(BsPlusSquare)`
  font-size: 1rem;
  color: var(--darkwhite);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
