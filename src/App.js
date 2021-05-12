import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{name: "Max", age: 28},
			{name: "Manu", age: 29},
			{name: "Stephanie", age: 26},
		],
		otherState: 'some other value'
	}

	switchNameHandler = () => {
		console.log('Was clicked');
		//DO NOT USE THIS: this.state.persons[0].name = "Maximilian";
		this.setState({
			persons: [
				{name: "Maximilian", age: 28},
				{name: "Manu", age: 29},
				{name: "Stephanie", age: 27},
			]
		});
		console.log(this.state);
	}

	render() {
		return (
			<div className="App">
				<h3>Hi, I'm a React App!</h3>
				<p>This is really working!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
		//return React.createElement('div', {className: 'App'}, React.createElement('h3', null, 'Does this work now?'));
	}
}

export default App;
