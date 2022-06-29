import React from 'react';
import useGithub from '../../hooks/gitHooks';
import { Container, Image, UserInfo, UserStatus } from './style';
import blogIco from '../../assets/icons/chevrons-right.svg';

function Profile() {

const {githubState} = useGithub();

    const Bio = () => {
        return(
            <>
            {
                (githubState.user.bio) ? (
                    <>
                        <p>{githubState.user.bio}<br/></p>
                    </>
                ):(<></>)
            }
            </>
        )
    }

    const Blog = () => {
        return(
            <>
            {
                (githubState.user.blog) ? (
                    <>
                        <p><img src={blogIco} style={{height: '12px'}}/><a href={githubState.user.blog} target='_blank' rel="noreferrer">Blog</a><br/></p>
                    </>
                ):(<></>)
            }
            </>
        )
    }

    const Company = () => {
        return(
            <>
            {
                (githubState.user.company) ? (
                    <>
                        <p><span>Company:</span> {githubState.user.company}<br/></p>
                    </>
                ):(<></>)
            }
            </>
        )
    }

    return (
        <Container>
            <Image src={githubState.user.avatar} />
            <div>
                <UserInfo>
                <h1>{githubState.user.name}</h1>
                <h3>{githubState.user.login}</h3>
                    <Bio/>
                    <Blog/>
                    <Company/>
                </UserInfo>
                <UserStatus>
                <p>Repositores: <span> {githubState.user.public_repos} </span> &nbsp;</p>
                <p>Followers: <span> {githubState.user.followers} </span> &nbsp;</p>
                <p>Gists: <span> {githubState.user.public_gists} </span> </p>
                </UserStatus>
            </div>
        </Container>
    );
}

export default Profile;