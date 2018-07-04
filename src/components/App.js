import React, { Component } from 'react';
import Welcome from '@/components/Welcome';
import { Wrapper } from '@/styled';
import Register from '@/components/Register';
import LogIn from '@/components/LogIn';
import Dashboard from '@/components/Dashboard';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Wrapper>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/rejestracja" component={Register} />
					<Route exact path="/logowanie" component={LogIn} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Wrapper>
			</Router>
		)
	}
}

export default App;