import react from 'react';
import { reduxForm } from "redux-form";
import { Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../Redux/auth-reduser';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Email"} name="email"
					validate={[required]}
					component={Input} />
			</div>
			<div>
				<Field placeholder={"Password"} name="password" type={"password"}
					validate={[required]}
					component={Input} />
			</div>
			<div>
				<Field name="rememberMe" type={"checkbox"}
					validate={[required]}
					component={Input} /> remember me
			</div>
			<div>
				<button >Login</button>
			</div>
		</form>
	)
}
const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

export default connect(null, { login })(Login);