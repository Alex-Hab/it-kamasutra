import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

<<<<<<< HEAD
	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
=======
	let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = props.messages.map(m => <Message message={m.message} />);
>>>>>>> 8fd1e523bd90d239a14e6df7df5cfb41b7c6a870

	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					{messagesElements}
				</div>
			</div>
		</div >
	)
}

export default Dialogs