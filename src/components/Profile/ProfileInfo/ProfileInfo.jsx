import React from 'react';
import myImage_sea from './../../../asets/images/sea.jpg';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			{/*<div className='app-wrapper-content'>
				<img src={myImage_sea} alt="sea.jpg"></img>
			</div>*/}

			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large}></img>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			</div>
		</div>
	)
}

export default ProfileInfo;