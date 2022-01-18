import React, { useState, useRef } from "react";
import styled from "styled-components";
import "../assets/styles/app.css";
import { BsPlusSquare } from "react-icons/bs";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import * as mmb from "music-metadata-browser";
import { Buffer } from "buffer";

if (typeof window !== "undefined" && typeof window.Buffer === "undefined") {
  window.Buffer = Buffer;
}

const UploadButton = (props) => {
  return (
    <Button onClick={props.onClick} title="Upload Songs">
      <BsPlusSquare />
    </Button>
  );
};

function UploadMusic() {
  const [newSong, setNewSong] = useState("");
  const storage = getStorage();
  const inputRef = useRef(null);
  const songsRef = ref(storage, "songs/" + newSong.name);
  const [parseResults, setParseResults] = useState([]);

  const onChangeHandler = async (e) => {
    setParseResults([]);
    for (const file of e.target.files) {
      const parseResult = {
        file: file,
      };
      return mmb
        .parseBlob(file, { native: true, duration: true })
        .then((metadata) => {
          console.log(`Completed parsing of ${file.name}:`, metadata);
          return metadata;
        });
      // setParseResults(parseResult);
      // console.log(parseResult);
      // try {
      //   const metadata = await parseFile(file);
      //   setParseResults(metadata);
      // } catch (err) {
      //   console.log(err);
      // }
    }
  };

  // function parseFile(file) {
  //   console.log(`Parsing file "${file.name}" of type ${file.type}`);
  //   return mmb
  //     .parseBlob(file, { native: true, duration: true })
  //     .then((metadata) => {
  //       console.log(`Completed parsing of ${file.name}:`, metadata);
  //       return metadata;
  //     });
  // }

  const uploadMusic = (e) => {
    // setNewSong(e.target.files[0]);
    // console.log(newSong.value);
    // uploadBytes(songsRef, newSong).then((snapshot) => {
    //   getMetadata(songsRef).then((metadata) => {
    //     console.log(metadata);
    //   });
    // });
  };
  const handleClick = () => {
    if (inputRef) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <div className="playlist"></div>
      <input
        type="file"
        accept=".mp3, .wav, .ogg"
        onChange={(e) => onChangeHandler(e)}
        hidden
        ref={inputRef}
      />
      <UploadButton onClick={() => handleClick()} />
    </div>
  );
}

export default UploadMusic;

const Button = styled(BsPlusSquare)`
  font-size: 1rem;
  color: var(--darkwhite);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
