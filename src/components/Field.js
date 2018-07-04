import React from 'react';
import {
	Input
} from '@/styled';

export default function({ field, value, onChange, required = true }) {
	return (	
		<label key={field.name} style={{ display: 'block' }}>
			<div>
				{field.label}
				{required && '*'}
			</div>
			<Input
				type={field.type || 'text'}
				name={field.name}
				id={field.name}
				value={value}
				onChange={onChange}
				required={required}
			/>	
		</label>
	)
}