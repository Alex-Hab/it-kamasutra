import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [
		{ id: 1, name: "Дмитрий" },
		{ id: 2, name: "Андрей" },
		{ id: 3, name: "Света" },
		{ id: 4, name: "Алекандра" },
		{ id: 5, name: "Виктория" }
	]
	let messages = [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How is your it-kamasutra" },
		{ id: 3, message: "Yo" }
	]

	let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = messages.map(m => <Message message={m.message} />);

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