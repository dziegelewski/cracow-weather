import fetchWeatherFromApi from '@/utils/fetchWeatherFromApi';

export const REGISTER_AN_USER = 'REGISTER_AN_USER';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SET_WEATHER = 'SET_WEATHER';

export const registerAnUser = (userData) => {
	return {
		type: REGISTER_AN_USER,
		payload: userData,
	};
};

export const userLoggedIn = (userId) => {
	return {
		type: USER_LOGGED_IN,
		payload: userId,
	};
};

export const userLoggedOut = () => {
	return {
		type: USER_LOGGED_OUT,
	};
};

export const fetchWeather = () => {
	return displatch => {
		fetchWeatherFromApi()
			.then((weather) => {
				displatch(setWeather(weather))
			})
			.catch(err => new Error(err))
	}
};

export const setWeather = weather => {
	return {
		type: SET_WEATHER,
		payload: weather,
	}
}