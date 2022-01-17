import React, { useEffect } from "react";
import styled from "styled-components";
import "../assets/styles/app.css";
import SongDetails from "./SongDetails";
import Library from "./Library";
import { getAuth } from "firebase/auth";

const StyledMain = styled.div`
  display: flex;
  width: 100%;
`;
function Main({ navigate }) {
  const auth = getAuth();
  const authUser = auth.currentUser;
  let authId = sessionStorage.getItem("Auth ID", authUser.uid);
  useEffect(() => {
    if (authId) {
      navigate("/main");
    }
    if (!authId) {
      navigate("/login");
    }
  }, [authId]);
  return (
    <StyledMain>
      <SongDetails />
      <Library />
    </StyledMain>
  );
}

export default Main;
