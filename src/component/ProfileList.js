import styled from 'styled-components';
import ProfileItem from './ProfileItem';

const ProfileListBlock = styled.div`
 box-sizing: border-box;
 padding-bottom: 3rem;
 width: 768px;
 margin:  auto;
 margin-top: 2rem;
 @media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-rigth: 1rem;
 }
`;

const sampleProfile = {
    name : '별명',
    regeion: '지역',
    hobby: '관심사',
    profileImage: 'http://vai.placeholder.cm/160',
};

const ProfileList = () => {
    return (
    <ProfileListBlock>
        <h2>ProfileSearch</h2>
        <ProfileItem profile={sampleProfile}/>
        <ProfileItem profile={sampleProfile}/>
        <ProfileItem profile={sampleProfile}/>
        <profileItem profile={sampleProfile}/>
    </ProfileListBlock>
    );
}

export default ProfileList;
