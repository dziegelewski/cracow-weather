import React, { Component } from 'react';
import {
	Submit,
	Heading,
	Error,
} from '@/styled';
import Field from '@/components/Field';

import * as actions from '@/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toObjectOfEmptyStrings, getName } from '@/utils/helpers';



const fields = [
	{ name: 'name', label: 'Imię'},
	{ name: 'surname', label: 'Nazwisko'},
	{ name: 'email', label: 'Email'},
	{ name: 'phone', label: 'Telefon'},
	{ name: 'street', label: 'Ulica'},
	{ name: 'city', label: 'Miasto'},
	{
		name: 'password',
		label: 'Hasło',
		type: 'password',
	},
	{ 
		name: 'passwordRepeat',
		label: 'Powtórz hasło',
		type: 'password',
	},
];

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = toObjectOfEmptyStrings(
			fields.map(getName)
		);
	}

	handleInputChange = e => this.setState({
		[e.target.name]: e.target.value
	})

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.validateFields()) {
			this.showError('Wypełnij wszystkie pola.');
			return;
		}

		if (!this.comparePasswords()) {
			this.showError('Podane hasła nie są identyczne.');
			return;
		}

		this.onFormValidated();
	}

	onFormValidated() {
		this.props.history.push('/logowanie');
		this.props.registerAnUser(this.state);
	}

	validateFields() {
		return Object.values(this.state).every(field => field);
	}

	comparePasswords() {
		return this.state.password === this.state.passwordRepeat;
	}

	showError(errorMessage) {
		this.setState({
			error: errorMessage,
		})
	}

	render() {
		return (
		<div>
			<Heading>Rejestracja</Heading>
			<p>Podaj swoje dane</p>

			{this.state.error && (
				<Error>{this.state.error}</Error>
			)}

			<form onSubmit={this.onSubmit}>
				{fields.map(field => (
					<Field
						key={field.name}
						field={field}
						value={this.state[field.name]}
						onChange={this.handleInputChange}
					/>
				))}

				<Submit>Potwierdź dane</Submit>
			</form>
		</div>
		)
	}
}

export default connect(
	null,
	actions
)(withRouter(Register));
