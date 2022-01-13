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
  const [hasToken, setHasToken] = useState();
  const userInfo = collection(db, "users");
  let navigate = useNavigate();

  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    console.log(authToken);
    if (authToken) {
      navigate("/main");
      setHasToken(true);
      console.log(userInfo);
    }
    if (!authToken) {
      navigate("/register");
      setHasToken(false);
    }
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
                db={db}
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
