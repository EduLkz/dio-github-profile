import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #567e96;
    display: flex;
    justify-content: space-between;
`;

export const SearchContainer = styled.div`
    border: 1px #a3a3a3 solid;
    border-radius: 5px;
    background: white;
    justify-content: center;
    margin: 10px 15px;
    margin-left: 45px;
    height: 25px;

    img{
        margin: 2px 8px 0 0;
    }
`;

export const SearchInput = styled.input`
    outline: none;
    border: none;    
    min-width: 550px;
    height: 20px;
`;

export const SearchButton = styled.button`
    background-color: transparent;
    border: none;

    img{
        height: 15px;
    }
`;