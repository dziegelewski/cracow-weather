import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '@/actions';
import getUserByCredentials from '@/utils/getUserByCredentials';

import Form from '@/components/Form';
import { Heading } from '@/styled';

class LogIn extends Component {

	formFields = [
		{ name: 'email', label: 'Email'},
		{ name: 'password', label: 'Hasło'},
	];

	formValidation = ({ email, password }) => {
		const loggedUser = getUserByCredentials(
			{	email, password	},
			this.props.users
		);

		if (loggedUser) {
			return {
				success: true,
				data: loggedUser, 
			}
		} else {
			return {
				success: false,
				errorMessage: 'Niepoprawne email lub hasło'
			}
		}
	}

	onFormCompleted = loggedUser => {
		this.props.userLoggedIn(loggedUser.id);
		this.props.history.push('/dashboard');
	};


	render() {
		return (
			<div>	
				<Heading>Logowanie</Heading>
				<Form
					fields={this.formFields}
					submitText="Zaloguj"
					validationMethod={this.formValidation}
					onCompleted={this.onFormCompleted}
				/>

				<p>Nie masz konta? <Link to="/rejestracja">Zarejestruj się</Link>.</p>
			</div>
		)
	}
}

export default connect(
	state => ({
		users: state.users,
	}),
	actions
)(withRouter(LogIn));