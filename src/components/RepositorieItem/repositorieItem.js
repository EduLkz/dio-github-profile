import React from 'react';
 import { Container, Button, DateTime, Separation} from './style';

const RepositorieItem = ({name, link, created_at, updated_at}) => {

    const ConvertDate = (dateToConvert) => {
        if(typeof(dateToConvert) !== typeof (""))  return;

        let date = dateToConvert.split("T");
        let realDate = date[0].split("-");
        
        realDate.reverse();
        let time = date[1].replace("Z", "");

        return `${realDate[0]}/${realDate[1]}/${realDate[2]} ${time}`;
    }


    return (
        <Container>
            <h4>{name}</h4>
            <Separation />
            <p>Created at: <DateTime> {ConvertDate(created_at)} </DateTime></p>
            <p>Last Update: <DateTime> {ConvertDate(updated_at)} </DateTime></p>
            <Button onClick={() => window.open(link)}>Visit repository</Button>
        </Container>
    );
}

export default RepositorieItem;