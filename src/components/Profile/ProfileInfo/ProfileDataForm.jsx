import React from 'react';
import { createField, Input, TextArea } from '../../common/FormsControls/FormsControls'
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile }) => {
	return <form onSubmit={handleSubmit}>
		<div><button>Save</button></div>
		<div>
			<b>Full name</b>: {createField("Полное имя", "fullName", [], Input)}
		</div>
		<div>
			<b>Loking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
		</div>
		<div>
			<b>My professional skills</b>: {profile.lookingForAJobDescription}
			{createField("Мои профессиональные навыки", "lookingForAJobDescription", [], TextArea)}
		</div>
		<div>
			<b>About me</b>: {profile.aboutMe}
			{createField("Обо мне", "aboutMe", [], TextArea)}
		</div>
		{/*<div>
			<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}
		</div>*/}
	</form>
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);
export default ProfileDataFormReduxForm;