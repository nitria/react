import React from "react";
import styled from "styled-components";
import "../../assets/styles/app.css";
import { updateDoc, doc, getDocs } from "firebase/firestore";
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
  setUserAvatar,
  setUserName,
  userAvatar,
  userName,
  db,
  users,
}) {
  const UpdateUserInfo = (props) => {
    return <Button onClick={props.onClick}>Update</Button>;
  };

  const updateUser = (e, id) => {
    e.preventDefault();
    const userDoc = doc(db, "users", id);
    const storage = getStorage();
    const imageRef = ref(storage, "images/" + userAvatar.name);
    uploadBytesResumable(imageRef, userAvatar)
      .then((snapshot) => {
        // Let's get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
          updateDoc(userDoc, { name: userName, image: url });
        });
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
    const newUserData = getDocs(userDoc);
    console.log(newUserData);
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
      <UpdateUserInfo onClick={(e) => updateUser(e, users.id)} />
    </div>
  );
}

export default UserProfile;
