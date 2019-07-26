import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
    
      inventory: [
        {
          name: 'shoes',
          price: 20,
          imgurl: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          name: 'pants',
          price: 40,
          imgurl: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A3BE3_ZBV_hero?$260x302$'
        }
      ]

    }
  }


  render() {
  return (
    <div className="App">
      <Dashboard inventory={this.state.inventory} />
      <Form />
      <Header />
    </div>
  );
  }
}

export default App;
