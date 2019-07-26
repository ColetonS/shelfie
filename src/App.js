import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
    
      inventory: []

    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

 componentDidMount() {
   axios
    .get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
    .catch(err => alert(err))

    // console.log('this.state.inventory:', this.state.inventory)
 }


  render() {
  return (
    <div className="App">
      <Dashboard 
        inventory={this.state.inventory} 
        
        />
      <Form
        componentDidMount={this.componentDidMount}
      />
      <Header />
    </div>
  );
  }
}

export default App;
