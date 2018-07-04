import React, { Component } from 'react';
import { toObjectOfEmptyStrings, getName } from '@/utils/helpers';

import Field from '@/components/Field';
import {
	Submit,
	Error,
} from '@/styled';


class Form extends Component {
	constructor(props) {
		super(props);

		const { fields } = this.props;

		this.state = {
			fields: toObjectOfEmptyStrings(
				fields.map(getName)
			),
			errorMessage: null,
		};

	}

	displayError(errorMessage) {
		this.setState({
			errorMessage,
		})
	}

	handleInputChange = e => this.setState({
		fields: {
			...this.state.fields,
			[e.target.name]: e.target.value,
		}
	})


	onSubmit = (e) => {
		e.preventDefault();

		const validationResult = this.validate();

		if (validationResult.success) {
			this.props.onCompleted(validationResult.data)
		} else if(validationResult.errorMessage) {
			this.displayError(validationResult.errorMessage)
		}
	}

	validate() {
		return this.props.validationMethod(
			this.state.fields	
		);
	}

	render() {
		const { errorMessage, fields: fieldsValues } = this.state;
		const {
			fields: fieldsData,
			submitText,
		} = this.props;


		return (
			<div>
				<form onSubmit={this.onSubmit}>

				{errorMessage && (
					<Error>{errorMessage}</Error>
				)}

				{fieldsData.map(field => (
					<Field
						key={field.name}
						field={field}
						value={fieldsValues[field.name]}
						onChange={this.handleInputChange}
					/>
				))}

				<Submit>{submitText}</Submit>
			</form>


			</div>

		)
	}



}

export default Form;