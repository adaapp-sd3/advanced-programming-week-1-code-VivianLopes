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
          {dummyTaskData.map(item => <Task title={item.title} description={item.description}/>)}
        </section>
      </div>
    );
  }
}

export default App;
