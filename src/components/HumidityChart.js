import React from 'react';
import BarChart from 'react-bar-chart';

import { parseHourForHuman } from '@/utils/helpers';

import { HorizontalScroll } from '@/styled';


export default function({ weather }) {

	const barChartData = weather.map(record => {
		return {
			value: record.main.humidity,
			text: parseHourForHuman(record.dt_txt),
		}
	})

	return (
		<HorizontalScroll>
      <p>Wilgotność</p>

      <BarChart
				data={barChartData}
				ylabel='g/m3'
				width={800}
				height={300}
				margin={{
					top: 50,
					bottom: 50,
					left: 30,
					right: 30,
				}}
      />
		</HorizontalScroll>
	);
}
