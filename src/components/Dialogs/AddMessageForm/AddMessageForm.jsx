import React from 'react';
import { reduxForm } from "redux-form";
import { Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';


const maxLength50 = maxLengthCreator(50);

export const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={TextArea}
					validate={[required, maxLength50]}
					placeholder="Enter your message" name="newMessageBody" />
			</div>
			<div>
				<button>Send222</button>
			</div>
		</form>
	)
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm);