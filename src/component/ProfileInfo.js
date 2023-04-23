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

const ProfileInfo = (Info) => {
    const { ProfileImage, Region, Name, Hobby } = Info;
    return (
    <ProfileInfoBlock>
    <div className="contents">
        <h1>ProfileInfo</h1>
        <h3>프로필 사진</h3>
        <image src={'https://via.placeholder.com/160'} alt="thumbnail" className="ImageContent">이미지</image>
       <div className="outer-div">
        <h3 className="title">지역</h3>
        <textarea className="textArea"></textarea>
        </div>
        <div className="outer-div">
        <h3 className="title">별명</h3>
        <textarea className="textArea"></textarea>
       </div>
       <div className="outer-div">
        <h3 className="title">관심사</h3>
        <textarea className="textArea"></textarea>
        </div>
        
    </div>
    </ProfileInfoBlock>
    );
}

export default ProfileInfo;