import React from 'react';
import s from './Post.module.css';
import myImage_avatar1 from '../avatar_1.jpeg';
const Post = () => {
	return (
		<div className={s.item}>
			<img src={myImage_avatar1} alt="avatar_1.jpeg" />
			post 1
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post;