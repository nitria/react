import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./assets/styles/app.css";
import User from "./components/user/User";
import SearchBar from "./components/SearchBar";
import ControlButtons from "./components/ControlButtons";
import Main from "./components/Main";
import UserProfile from "./components/user/UserProfile";
import UserSettings from "./components/user/UserSettings";
import Form from "./components/user/Form";
import { Routes, Route, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection } from "firebase/firestore";

const StyledContainer = styled.div`
  background-color: var(--bgColor);
  color: white;
  height: 100vh;
  font-family: arial, helvetica, sans-serif;
`;
const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  background-color: var(--lightprimaryColor);
  padding: 1rem;
`;
const StyledMainContainer = styled.main`
  width: 100%;
  height: 90%;
`;

const StyledFooter = styled(StyledHeader)``;

function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);
  const [userName, setUserName] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const userInfo = collection(db, "users");
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/main");
    }
  }, []);
  return (
    <StyledContainer className="App">
      <StyledHeader>
        <SearchBar />
        <User
          userInfo={userInfo}
          users={users}
          setUsers={setUsers}
          navigate={navigate}
          email={email}
          dropdown={dropdown}
          setDropdown={setDropdown}
          title="Logout"
        />
      </StyledHeader>
      <StyledMainContainer>
        <Routes>
          <Route path="/main" element={<Main navigate={navigate} />} />
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                email={email}
                password={password}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                email={email}
                password={password}
              />
            }
          />
          <Route
            path="profile"
            element={
              <UserProfile
                userInfo={userInfo}
                users={users}
                setUsers={setUsers}
                userName={userName}
                setUserName={setUserName}
                userAvatar={userAvatar}
                setUserAvatar={setUserAvatar}
              />
            }
          />
          <Route path="settings" element={<UserSettings />} />
        </Routes>
      </StyledMainContainer>
      <StyledFooter>
        <ControlButtons />
      </StyledFooter>
    </StyledContainer>
  );
}

export default App;
