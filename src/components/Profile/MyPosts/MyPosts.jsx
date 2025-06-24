import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

<<<<<<< HEAD
	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}
=======
>>>>>>> 8fd1e523bd90d239a14e6df7df5cfb41b7c6a870
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea ref={newPostElement}></textarea>
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

export default MyPosts;