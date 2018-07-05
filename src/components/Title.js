import React from 'react';
import { Heading } from '@/styled';

export default function({ children, postfix = true }) {
	document.title = children + (postfix ? ' - Pogoda w Krakowie' : '');
	return <Heading>{children}</Heading>
}
