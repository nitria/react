import React, { useState, useRef } from "react";
import styled from "styled-components";
import "../../assets/styles/app.css";
import { updateDoc, doc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { BsXCircle } from "react-icons/bs";

function UserProfile({ db }) {
  const [newUserName, setNewUserName] = useState("");
  const [newUserAvatar, setNewUserAvatar] = useState("");
  const userAvatarRef = useRef();

  //Function to send updated data to firebase//
  function updateUser(e) {
    e.preventDefault();
    const userDoc = doc(db, "users", "user");
    const storage = getStorage();
    const imageRef = ref(storage, "images/" + newUserAvatar.name);

    uploadBytesResumable(imageRef, newUserAvatar)
      .then((snapshot) => {
        // Let's get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
          updateDoc(userDoc, { name: newUserName, image: url });
        });
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
    //Reset inputs//
    setNewUserName("");
    userAvatarRef.current.value = "";
    setNewUserAvatar(null);
  }

  return (
    <StyledFormContainer>
      <StyledForm>
        <CloseIcon />
        <label htmlFor="userAvatar">Change profile image</label>
        <StyledInputs
          id="userAvatar"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => setNewUserAvatar(e.target.files[0])}
          ref={userAvatarRef}
        />

        <label htmlFor="userName">Change profile name</label>
        <StyledInputs
          id="userName"
          type="text"
          placeholder="Enter your Name"
          required
          onChange={(e) => setNewUserName(e.target.value)}
          value={newUserName}
        />
        <Button type="submit" onClick={updateUser}>
          Update
        </Button>
      </StyledForm>
    </StyledFormContainer>
  );
}

export default UserProfile;

const StyledFormContainer = styled.div`
  height: 100%;
`;
const CloseIcon = styled(BsXCircle)`
  align-self: flex-end;
  cursor: pointer;
  font-size: 1.1rem;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 250px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const StyledInputs = styled.input`
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  padding: 0.3rem 0.5rem;
  width: 100%;
`;

const Button = styled.button`
  font-size: 1rem;
  color: var(--white);
  background-color: var(--primaryColor);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
