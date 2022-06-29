import React, { useState } from 'react';
import useGithub from '../../hooks/gitHooks.js';
import { Container, Input, Button } from "./style.js";

function SearchPage() {
    const [searchValue, setSearchValue] = useState("EduLkz");
    const { getUser } = useGithub();

    function submitSearch(){      
        if(!searchValue || searchValue === "") return;        
        return getUser(searchValue);
    }

    return (
        <Container>
            <div>
                <h1 style={{fontSize: '34pt'}}>Github Search</h1>
                <Input placeholder='Digite usuario a pesquisar...' value="EduLkz" onChange={(e) => setSearchValue(e.target.value)} />
                <Button onClick={submitSearch}>Buscar</Button>
            </div>
        </Container>
    );
}

export default SearchPage;