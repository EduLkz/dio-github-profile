import styled from "styled-components";

export const Container = styled.div`
    margin: 0px 25px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px black solid;
`;

export const Image = styled.img`
    height: 200px;
    height: 200px;
    border: 1px #333 solid;
    box-shadow: 2px 2px 5px  0px;
    border-radius: 50%;
    margin-right: 45px;
`;

export const UserInfo = styled.div`
    margin-bottom: 5px;

    a{
        text-decoration: none;
        color: #5157f5;
        font-weight: bold;
    }

    p, h1{
        margin: 0px;
    }

    h3{
        margin: 0 0 5px 0;
    }
`;

export const UserStatus = styled.div`
    display: flex;
    align-items: center;
    text-align: center;

    p{
        font-weight: bold;
    }

    span{
        font-weight: normal;
    }
`;