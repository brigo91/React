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
		otherState: 'some other value',
		showPersons: false
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

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
		//only this work as well: this.setState({showPersons: !this.state.showPersons});
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map( person =>{
						return <Person
							name={person.name}
							age={person.age}/>
					})}
				</div>
			)
		}

		return (
			<div className="App">
				<h3>Hi, I'm a React App!</h3>
				<p>This is really working!</p>
				<button
					style={style}
					onClick={this.togglePersonsHandler}>Toggle Persons</button>
				{persons}
			</div>
		);
		//return React.createElement('div', {className: 'App'}, React.createElement('h3', null, 'Does this work now?'));
	}
}

export default App;
