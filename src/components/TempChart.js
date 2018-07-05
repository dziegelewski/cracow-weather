import React from 'react';
import LineChart from 'react-linechart';

import { parseHourForHuman } from '@/utils/helpers';

import { HorizontalScroll } from '@/styled';


export default function({ weather }) {

	const data = [{
		color: "orange", 
    points:  weather.map(record => {
			return {
				x: record.dt_txt,
				y: record.main.temp
			};
		}),
	}];

	return (
		<HorizontalScroll>
			<p>Temperatura</p>

			<LineChart 
					data={data}
					width={800}
          height={400}
          yLabel="Temperatura (°C)"
          xLabel="Godzina"
          xParser={x => new Date(x).getTime()}
          xDisplay={parseHourForHuman}

      />
		
		</HorizontalScroll>	
	);
}
