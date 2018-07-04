import { combineReducers } from 'redux';
import users from './users_reducer';
import loggedUser from './logged_user_reducer';
import weather from './weather_reducer';

export default combineReducers({
	users,
	loggedUser,
	weather,
});
