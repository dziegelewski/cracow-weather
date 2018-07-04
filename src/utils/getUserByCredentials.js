export default function({ email, password }, users) {
	return users.find(user => {
		return user.email === email 
		&& user.password === password;
	}) || null;
}
