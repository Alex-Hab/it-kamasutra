import React from 'react';
/*import myImage_sea from 'img/sea.jpg';*/
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} />
		</div>
	)
}

export default Profile;