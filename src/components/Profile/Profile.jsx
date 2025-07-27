import React from 'react';
/*import myImage_sea from 'img/sea.jpg';*/
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
}

export default Profile;