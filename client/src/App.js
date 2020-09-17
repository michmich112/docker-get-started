import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state;

  constructor() {
    super();
    this.state = {
      url: process.env.REACT_APP_BE_URL,
      users: [],
      name: '',
      age: 0,
    }
  }



async componentDidMount() {
  await this.updatedData();
}

async updatedData() {
  const res = await axios.get(this.state.url);
  this.setState({ users: res.data });
}

async addPerson() {
  const {name, age} = this.state;
  await axios.post(`${this.state.url}/add`, {
    name,
    age,
  });
  this.setState({name: '', age: 0});
  await this.updatedData();
}

render() {
  return (
    <div className="App">
      <h1> users </h1>
      {this.state.users.map(u => <p key={u.name}>name: {u.name} | age: {u.age}</p>)}
      Name <input type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name}/> <br/>
      Age <input type="number" onChange={(e) => this.setState({age: e.target.value})} value={this.state.age}/> <br/>
      <button onClick={() => this.addPerson().then(() => console.log('added'))}>Add</button>
    </div>
  );
}
}

export default App;
