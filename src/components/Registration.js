import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '@/actions';
import { hasSomeEmptyValues } from '@/utils/helpers';

import Form from '@/components/Form';
import { Heading } from '@/styled';

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
				<Heading>Rejestracja</Heading>
				<p>Podaj swoje dane</p>

				<Form
					fields={this.formFields}
					submitText="Potwierdź dane"
					validationMethod={this.formValidation}
					onCompleted={this.onFormCompleted}
				/>
			</div>
		)
	}
}

export default connect(
	null,
	actions
)(withRouter(Registration));
