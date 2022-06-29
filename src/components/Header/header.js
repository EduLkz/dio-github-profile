import { useState } from "react";
import { Container, SearchInput, SearchButton, SearchContainer} from "./style.js";
import useGithub from "../../hooks/gitHooks";
import searchIco from '../../assets/icons/search.svg';

const Header = () =>{

    const [searchValue, setSearchValue] = useState("");
    const { getUser } = useGithub();

    function submitSearch(){      
        if(!searchValue || searchValue === "") return;        
        return getUser(searchValue);
    }
    
    const HandleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            submitSearch();
        }
    }

    return(
        <Container>
            <SearchContainer>
                <SearchInput placeholder="Digite nome de usuario desejado ..." onChange={(e) => setSearchValue(e.target.value)} onKeyDown={HandleKeyDown} />
                <SearchButton type="submit" onClick={submitSearch}><img src={searchIco}/></SearchButton>
            </SearchContainer>
        </Container>
    )
}

export default Header;

