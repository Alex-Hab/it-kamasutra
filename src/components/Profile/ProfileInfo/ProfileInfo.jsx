import React from 'react';
import myImage_sea from './../../../asets/images/sea.jpg';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../asets/images/user.png';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
<<<<<<< HEAD
		if (e.target.files.length) {
=======
		if (e.target.files.lenth) {
>>>>>>> ccc1c068bca07750c178a93b4ab993829be06bce
			savePhoto(e.target.files[0]);
		}
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={s.mainPhoto}></img>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</div>
	)
}

export default ProfileInfo;