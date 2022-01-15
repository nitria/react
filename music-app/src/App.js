import React, { useState, useEffect, useRef } from "react";
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

function App() {
  const [users, setUsers] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [hasToken, setHasToken] = useState();
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  const userInfo = collection(db, "users");
  const dropdownRef = useRef();

  const clickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });
  useEffect(() => {
    if (authToken) {
      navigate("/main");
      setHasToken(true);
    }
    if (!authToken) {
      navigate("/register");
      setHasToken(false);
    }
    return () => {
      if (authToken) {
        navigate("/main");
        setHasToken(true);
      }
      if (!authToken) {
        navigate("/register");
        setHasToken(false);
      }
    };
  }, [authToken]);

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
          hasToken={hasToken}
          setHasToken={setHasToken}
          userName={userName}
          setUserName={setUserName}
          userAvatar={userAvatar}
          setUserAvatar={setUserAvatar}
          dropdownRef={dropdownRef}
        />
      </StyledHeader>
      <StyledMainContainer>
        <Routes>
          <Route
            path="/profile"
            element={
              <UserProfile
                userInfo={userInfo}
                users={users}
                setUsers={setUsers}
                userName={userName}
                setUserName={setUserName}
                userAvatar={userAvatar}
                setUserAvatar={setUserAvatar}
                db={db}
              />
            }
          />
          <Route path="/settings" element={<UserSettings />} />
          <Route
            path="/main"
            element={
              <Main
                navigate={navigate}
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
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                email={email}
                password={password}
                dropdown={dropdown}
                setDropdown={setDropdown}
                users={users}
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
                userInfo={userInfo}
                dropdown={dropdown}
                setDropdown={setDropdown}
                users={users}
              />
            }
          />
        </Routes>
      </StyledMainContainer>
      <StyledFooter>
        <ControlButtons />
      </StyledFooter>
    </StyledContainer>
  );
}

export default App;

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
