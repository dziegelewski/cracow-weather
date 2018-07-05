import exampleUser from '@/utils/exampleUser';
import { REGISTER_AN_USER } from '@/actions';
let userId = 1;


export default function(state = [exampleUser], action) {
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