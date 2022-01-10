import React from "react";
import styled from "styled-components";
import "../assets/styles/app.css";
import UploadMusic from "./UploadMusic";

const StyledLibraryDiv = styled.div`
  flex-grow: 1;
`;

function Library() {
  return (
    <StyledLibraryDiv>
      <UploadMusic />
    </StyledLibraryDiv>
  );
}

export default Library;
