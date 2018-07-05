import React from 'react';
import Title from '@/components/Title';
import { Link } from 'react-router-dom';

export default function() {
	return (
		<div>
			<Title postfix={false}>Pogoda w Krakowie</Title>
			<p><Link to="/rejestracja">Załóż konto</Link>, aby najszybciej poznać pogodę w Krakowie.</p>
			<p>Masz już konto? <Link to="/logowanie">Zaloguj się</Link>.</p>
		</div>
	)
}