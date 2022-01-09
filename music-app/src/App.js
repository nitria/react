import styled from "styled-components";
import "./assets/styles/app.css";
import User from "./components/user/User";
import SearchBar from "./components/SearchBar";
import SongDetails from "./components/SongDetails";
import Library from "./components/Library";
import ControlButtons from "./components/ControlButtons";

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
const StyledMain = styled.main`
  display: flex;
  width: 100%;
  height: 90%;
`;

const StyledFooter = styled(StyledHeader)``;

function App() {
  return (
    <StyledContainer className="App">
      <StyledHeader>
        <SearchBar />
        <User />
      </StyledHeader>
      <StyledMain>
        <SongDetails />
        <Library />
      </StyledMain>
      <StyledFooter>
        <ControlButtons />
      </StyledFooter>
    </StyledContainer>
  );
}

export default App;
