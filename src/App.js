import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [ 
        {name: 'Rakesh', age: 28},
        {name: 'Vinod', age: 29},
        {name: 'Abhi', age: 26}
      ]
    }
    render() {
    return (
      <div className="App">
        <h1>Hi, I am learning React App</h1>
        <button>Switch Name</button>
        <Person  name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: racing</Person>
        <Person name = {this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
   // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Does it work nows!'));
  }
}

export default App;
