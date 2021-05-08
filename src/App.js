import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h3>Hi, I'm a React App!</h3>
				<p>This is really working!</p>
				<Person />
				<Person />
				<Person />
			</div>
		);
		//return React.createElement('div', {className: 'App'}, React.createElement('h3', null, 'Does this work now?'));
	}
}

export default App;
