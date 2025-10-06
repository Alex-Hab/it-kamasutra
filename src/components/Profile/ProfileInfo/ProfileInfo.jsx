import React from 'react';
import myImage_sea from './../../../asets/images/sea.jpg';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large}></img>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</div>
	)
}

export default ProfileInfo;