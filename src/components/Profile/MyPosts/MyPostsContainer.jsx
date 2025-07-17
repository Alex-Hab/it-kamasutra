import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from
	'../../Redux/profile-reducer';


const MyPostsContainer = (props) => {

	let postsElements =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		//props.addPost();
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		//props.updateNewPostText(text);
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	}
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement}
					value={props.newPostText} />
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>

			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPostsContainer;