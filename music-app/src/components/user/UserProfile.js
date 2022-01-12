import React, { useEffect } from "react";
import styled from "styled-components";
import "../../assets/styles/app.css";
import { getDocs, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { BsXCircle } from "react-icons/bs";

const Button = styled.button`
  font-size: 1rem;
  color: var(--white);
  background-color: var(--primaryColor);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

function UserProfile({
  setUsers,
  setUserAvatar,
  setUserName,
  userAvatar,
  userName,
  userInfo,
}) {
  const UploadUserInfo = (props) => {
    return <Button onClick={props.onClick}>Upload Image</Button>;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const imageRef = ref(storage, "images/" + userAvatar.name);
    // addDoc(userInfo, { name: userName, image: userAvatar });
    uploadBytesResumable(imageRef, userAvatar)
      .then((snapshot) => {
        console.log("Uploaded", snapshot.totalBytes, "bytes.");
        // Let's get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
          addDoc(userInfo, { name: userName, image: url });
          console.log(userAvatar);
        });
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
  };

  return (
    <div>
      <BsXCircle />
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={(e) => {
          setUserAvatar(e.target.files[0]);
        }}
      />

      <input
        type="text"
        placeholder="Enter your Name"
        required
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <UploadUserInfo onClick={(e) => handleClick(e)} />
    </div>
  );
}

export default UserProfile;
