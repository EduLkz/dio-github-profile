import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #567e96;
    display: flex;
    justify-content: space-between;
`;

export const SearchInput = styled.input`
    margin: 10px 15px;
    margin-left: 45px;
    min-width: 250px;
    height: 20px;
`;

export const SearchButton = styled.button`
    background-color: #3fa650;
    color: #222;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    padding: 2px 10px 3px 10px;
    margin-top: 5px;
    margin-right: 20px;
    width: 100px;
    height: 35px;

    &:hover{
        background-color: #2e823c;
    }

    &:active{
        padding: 5px 10px 0px 10px;
        background-color: #24522c;
    }
`;