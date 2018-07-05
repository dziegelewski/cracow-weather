import React from 'react';
import BarChart from 'react-bar-chart';

import { parseHourForHuman } from '@/utils/helpers';

import { HorizontalScroll } from '@/styled';


export default function({ weather }) {

	const data = weather.map(record => {
		return {
			value: record.main.humidity,
			text: parseHourForHuman(record.dt_txt),
		}
	});

	return (
		<HorizontalScroll>
      <p>Wilgotność (g/m3):</p>

      <BarChart
				data={data}
				width={600}
				height={300}
				margin={{
					bottom: 30,
					left: 30,
					right: 30,
					top: 0,
				}}
      />
		</HorizontalScroll>
	);
}
