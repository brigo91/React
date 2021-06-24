import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assingendClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
        assingendClasses.push(classes.red);
    }

    if (props.persons.length <= 1){
        assingendClasses.push(classes.bold);
    }


    return (
    <div className={classes.Cockpit}>
        <h3>Hi, I'm a React App!</h3>
        <p className={assingendClasses.join(' ')}>This is really working!</p>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
    </div>
    );
};

export default cockpit;