import React from 'react';
import LineChart from 'react-linechart';
import BarChart from 'react-bar-chart';
import Preloader from '@/styled/Preloader';

export default function({ weather } = {}) {

	if (!weather) {
		return (
			<div>
				<Preloader />
			</div>
		)
	}

	const temp = weather.list.map((day, index) => {
		return {
			x: index,
			y: day.main.temp
		}
	});

	const lineChartData = [{
		color: "steelblue", 
    points: temp,
	}];

	const barChartData = weather.list.map((day, index) => {
		return {
			value: day.main.humidity,
			text: index,
		}
	})

	return (
		<div>
			<p>Temperatura</p>

			<LineChart 
					data={lineChartData}
					width={600}
          height={400}
      />

      <p>Wilgotność</p>

      <BarChart
				data={barChartData}
				ylabel='g/m3'
				width={600}
				height={300}
      />
		</div>
	)
}