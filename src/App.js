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

	switchNameHandler = (newName) => {
		console.log('Was clicked');
		//DO NOT USE THIS: this.state.persons[0].name = "Maximilian";
		this.setState({
			persons: [
				{name: newName, age: 28},
				{name: "Manu", age: 29},
				{name: "Stephanie", age: 27},
			]
		});
		console.log(this.state);
	}

	nameChengeHandler = (event) => {
		this.setState({
			persons: [
				{name: "Max", age: 28},
				{name: event.target.value, age: 29},
				{name: "Stephanie", age: 26},
			]
		});
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h3>Hi, I'm a React App!</h3>
				<p>This is really working!</p>
				<button
					style={style}
					onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
				<Person 
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Max!')}
					changed={this.nameChengeHandler}
				>My Hobbies: Racing</Person>
				<Person 
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
		//return React.createElement('div', {className: 'App'}, React.createElement('h3', null, 'Does this work now?'));
	}
}

export default App;
