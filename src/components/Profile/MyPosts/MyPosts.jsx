import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import { reduxForm } from "redux-form";
import { Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { TextArea } from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

	let postsElements =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostForm onSubmit={onAddPost} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name="newPostText" component={TextArea} placeholder="Post message"
				validate={[required]} />
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;