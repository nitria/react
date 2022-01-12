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
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/main");
    }
    if (!authToken) {
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
