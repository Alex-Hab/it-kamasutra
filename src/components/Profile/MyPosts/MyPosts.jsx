import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let posts = [
		{ id: 1, message: "Hi, how are you?", likesCount: 12 },
		{ id: 2, message: "It s my first post", likesCount: 11 },
		{ id: 3, message: "blabla", likesCount: 34 },
		{ id: 4, message: "Ku ku", likesCount: 23 }
	]
	let postsElements =
		posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>


			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;