import React from 'react';
import myImage_sea from '../../../img/sea.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className='app-wrapper-content'>
				<img src={myImage_sea} alt="sea.jpg"></img>
			</div>
			<div className={s.descriptionBlock}>
				ava+description
			</div>
		</div>
	)
}

export default ProfileInfo;