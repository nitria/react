import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../assets/styles/app.css";
import { FaUserCircle } from "react-icons/fa";
import { getDocs } from "firebase/firestore";

const StyledUser = styled.div`
  flex-grow: 1;
  position: relative;
`;
const StyledAvatar = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 40px;
  height: 40px;
  display: inline-block;
`;

const UserIcon = styled(FaUserCircle)`
  width: 100%;
  height: 100%;
  color: var(--darkwhite);
  cursor: pointer;
`;

const StyledUserName = styled.h1`
  display: inline-block;
  margin-left: 1rem;
`;

function User({
  userInfo,
  users,
  setUsers,
  navigate,
  email,
  dropdown,
  setDropdown,
}) {
  const [login, setLogin] = useState("");

  const expandDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
    setDropdown(!dropdown);
    setLogin("Login");
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userInfo);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]);
    };
    getUsers();
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/main");
      setLogin("logout");
    }

    if (!authToken) {
      navigate("/register");
    }
  }, []);

  return (
    <StyledUser>
      <div>
        <StyledAvatar onClick={() => expandDropdown()}>
          {users && users.image ? (
            <img
              src={users.image}
              alt={users.name}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          ) : (
            <UserIcon />
          )}
        </StyledAvatar>
        <StyledUserName>{(users && users.name) || email}</StyledUserName>
        <div className={`dropdown ${dropdown ? "active" : ""}`}>
          <Link to="profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <button onClick={handleLogout}>{login}</button>
        </div>
      </div>
    </StyledUser>
  );
}

export default User;
