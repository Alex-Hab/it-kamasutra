import React from 'react';
import myImage_sea from '../img/sea.jpg';
import s from './Profile.module.css';

const Profile = () => {
	return <div className={s.content}>
		<div>
			<img src={myImage_sea} alt="sea.jpg"></img>
		</div>
		<div>
			ava+description
		</div>
		<div>
			My posts
			<div>
				New post проверка
			</div>
			<div className={s.posts}>
				<div className={s.item}>
					post 1 проверка 2
				</div>
				<divc className={s.item}>
					post 1
				</divc>
			</div>
		</div>
	</div>
}

export default Profile;