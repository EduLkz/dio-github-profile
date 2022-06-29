import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding-top: 20%;
`;

export const Input = styled.input`
    border: 1px #a3a3a3 solid;
    border-radius: 5px;
    height: 25px;
    width: 50vh;
    padding-right: 20px;
`;

export const Button = styled.button`
    background-color: #1e67e6;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 2px 10px 3px 10px;
    margin-right: 20px;
    margin-left: 20px;
    width: 100px;
    height: 29px;

    &:hover{
        background-color: #1a56a6;
    }

    &:active{
        padding: 5px 10px 0px 10px;
        background-color: #183486;
    }
`;