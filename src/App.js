import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		}).then(users => {
			this.setState({ robots: users});
		})			
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	} 

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
		<h1 className='tc'>Loading</h1> :
		(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}	
}

export default App;