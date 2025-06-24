import React from 'react';
/*import myImage_sea from 'img/sea.jpg';*/
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return (
		<div>
			<ProfileInfo />
<<<<<<< HEAD
			<MyPosts posts={props.state.posts} />
=======
			<MyPosts posts={props.posts} />
>>>>>>> 8fd1e523bd90d239a14e6df7df5cfb41b7c6a870
		</div>
	)
}

export default Profile;