import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/gitHooks';
import RepositorieItem from '../RepositorieItem/repositorieItem';

function Repositories() {

    const { githubState, getRepos, getStarred } = useGithub();
    const [userHasRepos, setUserHasRepos] = useState(false);
    
    useEffect(() => {
        if(githubState.user.login){
            getRepos(githubState.user.login);
            getStarred(githubState.user.login);
        }
        setUserHasRepos(githubState.repositories);
    }, [githubState.user.login]
    );

    const RenderRepo = ( item ) =>{
        return( <RepositorieItem
            key={item.id}
            name={item.name}
            link={item.html_url}
            created_at={item.created_at}
            updated_at={item.updated_at} />
        )
    }

    return (
        <div style={{display:'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
            {userHasRepos ? (
                <>
                {githubState.repositories.map(RenderRepo)}
                </>
            ):(<></>)}
            
        </div>
    )
}

export default Repositories;