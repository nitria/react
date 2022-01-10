import React from "react";
import styled from "styled-components";
import "../../assets/styles/app.css";
import { FaUserCircle } from "react-icons/fa";
const StyledUser = styled.div`
  flex-grow: 1;
`;

const UserIcon = styled(FaUserCircle)`
  font-size: 2rem;
  color: var(--darkwhite);
  cursor: pointer;
`;

function User() {
  return (
    <StyledUser>
      <UserIcon />
    </StyledUser>
  );
}

export default User;
