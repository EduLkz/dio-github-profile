import Header from "../Header/header";
import useGithub from "../../hooks/gitHooks";
import SearchPage from "../SearchPage/searchPage";
import Profile from "../Profile/profile";
import Repositories from "../Repositories/repositories";
import { Wrapper } from "./style";

function App() {
  const { githubState } = useGithub();

  return (
    <Wrapper>
      {githubState.hasUser ? (
        <>
          <Header />
          <Profile />
          <Repositories />
        </>
      ):(
        <SearchPage/>
      )}
    </Wrapper>
  );
}

export default App;