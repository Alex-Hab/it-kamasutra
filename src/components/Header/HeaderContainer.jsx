import React from 'react';
import myImage_logo from '../../asets/images/logo.png';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../Redux/auth-reduser';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.getAuthUserData();
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})
export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);