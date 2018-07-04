import { REGISTER_AN_USER } from '@/actions';
let userId = 0;


export default function(state = [], action) {
	switch (action.type) {
		default:
			return state;

		case REGISTER_AN_USER:
			return [
			...state, {
				...action.payload,
				id: userId++,
			}];
	}
}