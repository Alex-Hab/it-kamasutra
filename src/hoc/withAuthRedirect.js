import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
/*import { useMatch } from 'react-router-dom';*/

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to="/login" />
			return <Component {...this.props} />
		}
	}
	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(ConnectedAuthRedirectComponent);

	return ConnectedAuthRedirectComponent;
}

/*export const withRouter = (Component) => {
	let RouterComponent = (props) => {
		const match = useMatch('/profile/:userId/');
		return <Component {...props} match={match} />;
	}
	return RouterComponent;
}*/


