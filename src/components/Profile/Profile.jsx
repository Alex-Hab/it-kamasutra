import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return (
		<div>
<<<<<<< HEAD
			<ProfileInfo savePhoto={props.savePhoto}
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus} />
=======
			<ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
>>>>>>> ccc1c068bca07750c178a93b4ab993829be06bce
			<MyPostsContainer />
		</div>
	)
}

export default Profile;