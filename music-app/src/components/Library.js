import React from "react";
import styled, { css } from "styled-components";
import "../assets/styles/app.css";
const StyledLibraryDiv = styled.div`
  flex-grow: 1;
`;

function Library() {
  return (
    <StyledLibraryDiv>
      <h1>library</h1>
    </StyledLibraryDiv>
  );
}

export default Library;
