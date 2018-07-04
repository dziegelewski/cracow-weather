import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import Welcome from '@/components/Welcome';
import LogIn from '@/components/LogIn';
import Registration from '@/components/Registration';
import Dashboard from '@/components/Dashboard';

import { Wrapper } from '@/styled';

class App extends Component {
	render() {
		return (
			<Router>
				<Wrapper>
					<Route exact path="/" component={Welcome} />
					<Route exact path="/rejestracja" component={Registration} />
					<Route exact path="/logowanie" component={LogIn} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Wrapper>
			</Router>
		)
	}
}

export default App;