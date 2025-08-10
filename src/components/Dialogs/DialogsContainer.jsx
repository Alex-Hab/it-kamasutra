import React from 'react';
//import s from './Dialogs.module.css';
//import DialogItem from './DialogItem/DialogItem';
//import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
//import StoreContext from '../../StoreContext';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer