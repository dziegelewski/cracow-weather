import React, { Component } from 'react';
import {
	Submit,
	Error,
	Heading,
} from '@/styled';
import * as actions from '@/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toObjectOfEmptyStrings, getName } from '@/utils/helpers';
import getUserByCredentials from '@/utils/getUserByCredentials';

import Field from '@/components/Field';


const fields = [
	{ name: 'email', label: 'Email'},
	{ name: 'password', label: 'Hasło'},
];

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = toObjectOfEmptyStrings(
			fields.map(getName)
		);
	}

	onSubmit = (e) => {
		e.preventDefault();
		const loggedUser = getUserByCredentials(
			{
				email: this.state.email,
				password: this.state.password,
			},
			this.props.users
		);

		if (loggedUser) {
			this.onLogged(loggedUser);
		} else {
			this.showError('Niepoprawne email lub hasło.');
		}
	}

	handleInputChange = e => this.setState({
		[e.target.name]: e.target.value
	})

	onLogged(loggedUser) {
		this.props.userLoggedIn(loggedUser.id);
		this.props.history.push('/dashboard');
	}

	showError(errorMessage) {
		this.setState({
			error: errorMessage,
		})
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<Heading>Logowanie</Heading>

				{this.state.error && (
					<Error>{this.state.error}</Error>
				)}

				{fields.map(field => (
					<Field
						key={field.name}
						field={field}
						value={this.state[field.name]}
						onChange={this.handleInputChange}
					/>
				))}

				<Submit>Zaloguj</Submit>
			</form>
		)
	}
}

export default connect(
	state => ({
		users: state.users,
	}),
	actions
)(withRouter(LogIn));