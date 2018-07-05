import axios from 'axios';
import { takeOnly } from '@/utils/helpers';

const API_KEY = '53624a1a064407c08d23d08ebca381a2';

export default function() {
	return axios.get(
		`http://api.openweathermap.org/data/2.5/forecast?q=Krakow,pl&mode=json&appid=${API_KEY}&units=metric`		
	)
		.then(data => data.data.list)
		.then(takeOnly(10))
}
