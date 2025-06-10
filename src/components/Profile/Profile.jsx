import React from 'react';
import myImage_sea from '../../img/sea.jpg';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return <div className={s.content}>
		<div>
			<img src={myImage_sea} alt="sea.jpg"></img>
		</div>
		<div>
			ava+description
		</div>
		<MyPosts />
	</div>
}

export default Profile;