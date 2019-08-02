import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { RenderField } from './basic/RenderField';
import { connect } from 'react-redux';
import { Validate } from '../config';
import { FlatLoader } from './basic/Loader.js';
import { loginError, loginSuccess, loginUser, resetLogin } from '../actions/login';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

export class LoginForm extends Component {

	render() {
		const { handleSubmit } = this.props;

		return (
				<div id="main-body" className="newbox css">
				<div className="inner login">
					<div>
						<form onSubmit={handleSubmit(this.props.onSubmit)}>
							<div className="step email-password-step">
								<h2>
									<span > {this.props.login.error ? <span className="error-text" >{this.props.login.error}</span> : 'Welcome back!'} </span>
								</h2>

								<p className="text">
									<span>
										<label htmlFor="email">
											<span>Email</span>
										</label>
										<Field className="error"
											component={RenderField}
											type="email"
											name="email"
											id="email"
											placeholder="jeff@example.com"
											required="required"
										/>
									</span>
								</p>
								<p className="text">
									<span>
										<label htmlFor="password">
											<span>Password</span>
										</label>
										<Field
											component={RenderField}
											type="password"
											name="password"
											id="password"
											placeholder="Your Password"
											required="required"

										/>
									</span>
								</p>

								<p className="submit">
									<button type="submit" className="button blue medium" id="login-button" disabled={this.props.login.requesting}>
										{!this.props.login.requesting && <span>Sign in to your account</span>}
										{this.props.login.requesting && <FlatLoader />}
									</button>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

LoginForm.displayName = 'LoginForm'

let validate = function (values) {
	const errors = {};
	if (!Validate.text(values.email)) {
		errors.email = 'Email is required.'
	}

	else {
		if (!Validate.email(values.email)) {
			errors.email = 'Email is invalid.'
		}
	}

	if (!Validate.text(values.password)) {
		errors.password = 'Password is required.'
	}

	return errors;
}

let loginForm = reduxForm({
	form: 'LoginForm', // a unique identifier for this form
	validate,
	destroyOnUnmount: false
})(LoginForm);

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		loginError, loginSuccess, loginUser, resetLogin
	}, dispatch);
};

function mapStateToProps(state) {
	return {
		login: state.login
	};
}

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	login: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
