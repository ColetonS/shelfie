import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
  }

  handleNameChange(value) {
      this.setState({
          name: value
      })
  }

  handlePriceChange(value) {
      this.setState({
          price: value
      })
  }

  handleImgChange(value) {
      this.setState({
          imgurl: value
      })
  }

  handleCancel() {
      this.setState({
          name: '',
          price: 0,
          imgurl: ''
      })

    //   console.log(this.state)
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h2>Name</h2>
        <input onChange={e => this.handleNameChange(e.target.value)} type='text'/>
        <h2>Price</h2>
        <input onChange={e => this.handlePriceChange(e.target.value)} type='text'/>
        <h2>Image URL</h2>
        <input onChange={e => this.handleImgChange(e.target.value)} type='text'/>
        <div>
          <button onClick={() => this.handleCancel()}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
