import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 250px;
    margin: 10px 15px;
    padding: 10px 15px;
    border: 1px #777 solid;
    border-radius: 15px;
    background-color: #e5e5ff;
    
    
    
    h4{
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
    }

    p{
        margin: 0;
    }
`;

export const Separation = styled.p`
    border-bottom: 1px #333 solid;
    margin-bottom: 5px;
`;

export const DateTime = styled.span`
    font-weight: 300;
    margin-left: 5px;
`;

export const Button = styled.button`
    align-self: flex-end;
    width: 100%;
    padding: 10px 0;
    margin: 10px 0 0 0;
    background-color: #6fad49;
    border: none;
    border-radius: 5px;
    font-weight: 200;
    cursor: pointer;

    :hover{
        background-color: #5d9639;
    }

    :active{
        background-color: #b4d1a1;
        padding: 15px 0 5px 0;
    }
`;