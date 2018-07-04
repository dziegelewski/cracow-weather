import { SET_WEATHER } from '@/actions';

export default function(state = null, action) {
	switch (action.type) {
		default:
			return state;

		case SET_WEATHER:
			return action.payload;
	}
}