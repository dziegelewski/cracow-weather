import React, { Component } from 'react';
import WeatherCharts from '@/components/WeatherCharts';
import { Heading } from '@/styled';
import * as actions from '@/actions';
import { connect } from 'react-redux';
import { getLoggedUser } from '@/selectors';
import { withRouter } from 'react-router-dom';


class Dashboard extends Component {

	render() {
		const userName = this.props.loggedUser && this.props.loggedUser.name; 

		return (
			<div>
			<Heading>Dashboard</Heading>
			<p>
				Witaj, {userName}	<a
					onClick={this.handleLogOutClick}
					href="#">[wyloguj]
				</a>
			</p>
			<WeatherCharts weather={this.props.weather}/>
			</div>
		)
	}

	handleLogOutClick = (e) => {
		e.preventDefault();
		this.props.userLoggedOut();
		this.props.history.push('/');
	}

	componentWillMount() {
		this.props.fetchWeather();
	}
}

export default connect(
	state => ({
		weather: state.weather,
		loggedUser: getLoggedUser(state),
	}),
	actions
)(withRouter(Dashboard))