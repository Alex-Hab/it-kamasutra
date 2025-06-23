import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}


	return (
		<div className={s.message}>
			{/*{ props.message }*/}
			<div>
				<textarea ref={newPostElement}></textarea>
			</div>
			<div>
				<button onClick={addPost}>Отправить сообщение</button>
			</div>
		</div>
	)
}

export default Message;