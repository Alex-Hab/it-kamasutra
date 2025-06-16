import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>

					<DialogItem name="Дмитрий" id="1" />
					<DialogItem name="Андрей" id="2" />
					<DialogItem name="Света" id="3" />
					<DialogItem name="Алекандра" id="4" />
					<DialogItem name="Виктория" id="5" />

				</div>
				<div className={s.messages}>
					<Message message="Hi" />
					<Message message="How is your it-kamasutra" />
					<Message message="Yo" />
				</div>
			</div>
		</div >
	)
}

export default Dialogs