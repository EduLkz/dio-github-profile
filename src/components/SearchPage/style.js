import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding-top: 20%;
`;

export const SearchContainer = styled.div`
    border: 1px #a3a3a3 solid;
    border-radius: 5px;
    background: white;
    display: flex;
    justify-content: center;

    img{
        margin: 2px 8px 0 0;
    }
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 5px;
    height: 25px;
    width: 50vh;
    padding-right: 20px;
    margin-left: 3px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
`;