import React from 'react';
import { Heading } from '@/styled';
import { Link } from 'react-router-dom';

export default function() {
	return (
		<div>
			<Heading>Pogoda w Krakowie</Heading>
			<p><Link to="/rejestracja">Załóż konto</Link>, aby najszybciej poznać pogodę w Krakowie.</p>
			<p>Masz już konto? <Link to="/logowanie">Zaloguj się</Link>.</p>
		</div>
	)
}