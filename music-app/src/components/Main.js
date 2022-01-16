import React, { useEffect } from "react";
import styled from "styled-components";
import "../assets/styles/app.css";
import SongDetails from "./SongDetails";
import Library from "./Library";

const StyledMain = styled.div`
  display: flex;
  width: 100%;
`;
function Main({ navigate }) {
  useEffect(() => {
    let authId = sessionStorage.getItem("Auth ID");
    if (authId) {
      navigate("/main");
    }
    if (!authId) {
      navigate("/login");
    }
  }, []);
  return (
    <StyledMain>
      <SongDetails />
      <Library />
    </StyledMain>
  );
}

export default Main;
