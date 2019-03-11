import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './tasks/Task'

const dummyTaskData = [
  {
  title: "Get charger",
  description: "Don't be letting your phone die"
},
{
  title: "Crack back",
  description: "Get that good pop"
},
{
  title: "Make money",
  description: "Make that coin sis"
}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <Task title = 'Sleep' description = 'Rest up sis' />
          <Task title = 'Eat' description = 'Cultivate mass'/>
          <Task title = 'Chill' description = 'No stress'/>
        </section>
      </div>
    );
  }
}

export default App;
