import React, { PureComponent } from 'react'

import Person from './Person/Person';

class Persons extends PureComponent {
    /* static getDerivedStateFromProps(){
        console.log('[Persons.js] getDerivedStateFromProps');
        return this.state;
    } */

    /* componentWillReceiveProps(props){
        console.log('[Persons.js] componentWillReceiveProps');
    } */

    /* shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked){
            return true;
        }else{
            return false;
        }
    } */

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    //render

    /* componentWillUpdate(){

    }
 */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
            click={()=>this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;