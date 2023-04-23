import {useState, useEffecrt} from 'react';
import styled from 'styled-components';
import './Component.css';
import ProfileList from './ProfileList';



const ProfileSearchBlock = styled.div`
font-size: 1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.25rem;
`;

const ProfileSearch = () =>
{
    return(
        <ProfileSearchBlock>
        <ProfileList></ProfileList>
        </ProfileSearchBlock>
    );
}

export default ProfileSearch;