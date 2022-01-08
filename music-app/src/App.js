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
  padding: 1rem;
  height: 100vh;
`;
const StyledHeader = styled.header`
  display: flex;
  width: 100%;
`;
const StyledMain = styled.main`
  display: flex;
  width: 100%;
  height: 90%;
`;

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
      <footer>
        <ControlButtons />
      </footer>
    </StyledContainer>
  );
}

export default App;
