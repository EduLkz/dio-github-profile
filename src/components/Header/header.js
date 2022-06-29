import { useState } from "react";
import { Container, SearchInput, SearchButton} from "./style.js";
import useGithub from "../../hooks/gitHooks";

const Header = () =>{

    const [searchValue, setSearchValue] = useState("");
    const { getUser } = useGithub();

    function submitSearch(){      
        if(!searchValue || searchValue === "") return;        
        return getUser(searchValue);
    }

    return(
        <Container>
        <SearchInput placeholder="Digite nome de usuario desejado ..." onChange={(e) => setSearchValue(e.target.value)}/>
        <SearchButton type="submit" onClick={submitSearch}>Buscar</SearchButton>
        </Container>
    )
}

export default Header;

