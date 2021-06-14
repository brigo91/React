import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{id: 'asafa1', name: "Max", age: 28},
			{id: 'vasdf1', name: "Manu", age: 29},
			{id: 'asf11', name: "Stephanie", age: 26},
		],
		otherState: 'some other value',
		showPersons: false
	}

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	nameChengeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		//const person = Object.assign({}, this.state.persons[personIndex]);

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({persons: persons});
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
		//only this work as well: this.setState({showPersons: !this.state.showPersons});
	}

	render() {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={()=>this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
							changed={(event) => this.nameChengeHandler(event, person.id)}/>
					})}
				</div>
			);

			btnClass = classes.Red;
		}

		const assingendClasses = [];

		if (this.state.persons.length <= 2){
			assingendClasses.push(classes.red);
		}

		if (this.state.persons.length <= 1){
			assingendClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h3>Hi, I'm a React App!</h3>
				<p className={assingendClasses.join(' ')}>This is really working!</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
		//return React.createElement('div', {className: 'App'}, React.createElement('h3', null, 'Does this work now?'));
	}
}

export default App;
