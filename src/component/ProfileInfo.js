import {useState, useEffecrt} from 'react';
import styled from 'styled-components';
import './Component.css';



const ProfileInfoBlock = styled.div`
font-size: 1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.25rem;
`;

const txtInputBlock = styled.div`
{
    background-color: blue;
    vertical-align: left;
}`;



const ProfileInfo = (Info) => {
    const { ProfileImage, Region, Name, Hobby } = Info;
    return (
    <ProfileInfoBlock>
    <div className="Contents">
        <h1>ProfileInfo</h1>
        <h3>프로필 사진</h3>

       <div className="outer-div">
        <h3>지역</h3>
        <textarea></textarea>
        </div>
        <div className="outer-div">
        <h3>별명</h3>
       </div>
       <div className="outer-div">
        <h3>관심사</h3>
        </div>
        
    </div>
    </ProfileInfoBlock>
    );
}

export default ProfileInfo;