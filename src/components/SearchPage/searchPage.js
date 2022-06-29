import React, { useState } from 'react';
import useGithub from '../../hooks/gitHooks.js';
import { Container, Input, SearchContainer, Button } from "./style.js";
import searchIco from '../../assets/icons/search.svg';

function SearchPage() {
    const [searchValue, setSearchValue] = useState("EduLkz");
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

    return (
        <Container>
            <div>
                <h1 style={{fontSize: '34pt'}}>Github Search</h1>
            <SearchContainer>
                <Input placeholder='Digite usuario a pesquisar...' defaultValue = "EduLkz" onChange={(e) => setSearchValue(e.target.value)} onKeyDown={HandleKeyDown} />
                <Button onClick={submitSearch}><img src={searchIco} style={{height: '20px'}} /></Button>
            </SearchContainer>
            </div>
        </Container>
    );
}

export default SearchPage;