import React, { Component } from "react";
import axios from 'axios'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      productName: "",
      price: 0,
      img: ""
    };
  }

  handleNameChange(value) {
      this.setState({
          productName: value
      })

      // console.log(this.state.productName)
  }

  handlePriceChange(value) {
      this.setState({
          price: value
      })
  }

  handleImgChange(value) {
      this.setState({
          img: value
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

  submitNewItem() {
    const {productName, price, img} = this.state
    axios.post('/api/product', {
      product_name: productName, 
      price: price, 
      img: img})
      .then(() => {
        this.props.componentDidMount()
        this.handleCancel()

        console.log(this.state)
  })
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
          <button onClick={() => this.handleCancel()} onClick={() => this.submitNewItem()}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}
