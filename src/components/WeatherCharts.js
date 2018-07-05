import React from 'react';

import Loading from '@/components/Loading';
import HumidityChart from '@/components/HumidityChart';
import TempChart from '@/components/TempChart';

import { SlideEffect } from '@/styled';


export default function({ weather }) {

	if (!weather) {
		return (
			<Loading>
				Ładuję pogodę...
			</Loading>
		)
	}

	return (
		<SlideEffect>

			<p><strong>Oto pogoda na najbliższe godziny w Krakowie.</strong></p>

			<TempChart weather={weather} />
			<HumidityChart weather={weather} />

		</SlideEffect>
	)
}