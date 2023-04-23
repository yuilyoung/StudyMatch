import { useState, useEffecrt } from 'react';
import styled from 'styled-components';

const ProfileBlock = styled.div`
font-size: 1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding: 1rem;
float: left;
`;

const ProfileItem = (profile) => {
    const { profileImage, region, name, hobby } = profile;
    return (
        <ProfileBlock>
        {profileImage && (
            <div classNmae="ImageContent">
            <image src={profileImage} alt="thumbnail" />
            </div>
        )}
        <div className="contents2">
            <h2>지역</h2>
            <h2>이름</h2>
            <h2>관심사</h2>
            <p2>자기소개</p2>
        </div>
        </ProfileBlock>
    );
};

export default ProfileItem;