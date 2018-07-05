import { createSelector } from 'reselect'

const getUsers = state => state.users;
const getLoggedUserId = state => state.loggedUser;

export const getLoggedUser = createSelector(
	[getUsers, getLoggedUserId],
	(users, loggedUserId) => {
		return users.find(user => user.id === loggedUserId) || null;
	}
);