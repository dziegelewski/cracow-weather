import React, { Component } from 'react';
import * as actions from '@/actions';
import { connect } from 'react-redux';
import { getLoggedUser } from '@/selectors';
import { Redirect, withRouter } from 'react-router-dom';

import WeatherCharts from '@/components/WeatherCharts';
import Title from '@/components/Title';


class Dashboard extends Component {

	componentWillMount() {
		this.props.fetchWeather();
	}

	handleLogOutClick = (e) => {
		e.preventDefault();
		this.props.userLoggedOut();
		this.props.history.push('/');
	};

	render() {
		const { loggedUser, weather } = this.props;

		if (!loggedUser) {
			return <Redirect to="/logowanie" /> 
		}

		return (
			<div>
				<Title>Dashboard</Title>
				<p>
					Witaj, {loggedUser.fname}	<a
						onClick={this.handleLogOutClick}
						href="#"
					>
					[wyloguj]
					</a>
				</p>
				<WeatherCharts weather={weather} />
			</div>
		)
	}
}

export default connect(
	state => ({
		weather: state.weather,
		loggedUser: getLoggedUser(state),
	}),
	actions
)(withRouter(Dashboard))