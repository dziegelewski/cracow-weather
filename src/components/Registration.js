import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '@/actions';
import { hasSomeEmptyValues, validateEmail } from '@/utils/helpers';

import Form from '@/components/Form';
import Title from '@/components/Title';

class Registration extends Component {

	formFields = [
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
			name: 'passwordRepeated',
			label: 'Powtórz hasło',
			type: 'password',
		},
	];

	formValidation = (fields) => {
		if (hasSomeEmptyValues(fields)) {
			return {
				success: false,
				errorMessage: 'Wypełnij wszystkie pola.',
			};
		}

		if (!validateEmail(fields.email)) {
			return {
				success: false,
				errorMessage: 'Podany email jest nieprawidłowy.',
			};
		}

		if (fields.password !== fields.passwordRepeated) {
			return {
				success: false,
				errorMessage: 'Podane hasła nie są identyczne.',
			};
		}

		return {
			success: true,
			data: fields,
		};
	};

	onFormCompleted = (registeredUser) => {
		this.props.history.push('/logowanie');
		this.props.registerAnUser(registeredUser);
	};

	render() {
		return (
			<div>
				<Title>Rejestracja</Title>
				<p>Podaj swoje dane</p>

				<Form
					fields={this.formFields}
					submitText="Potwierdź dane"
					validationMethod={this.formValidation}
					onCompleted={this.onFormCompleted}
				/>

				<p>Masz już konto? <Link to="/logowanie">Zaloguj się</Link>.</p>
			</div>
		)
	}
}

export default connect(
	null,
	actions
)(withRouter(Registration));
