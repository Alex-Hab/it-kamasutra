import React from 'react';
import s from './Post.module.css';
import myImage_avatar1 from '../avatar_1.jpeg';
const Post = (props) => {


	return (
		<div className={s.item}>
			<img src={myImage_avatar1} alt="avatar_1.jpeg" />
			{props.message}
			<div>
				<span>like </span> {props.likesCount}
			</div>
		</div>
	)
}

export default Post;