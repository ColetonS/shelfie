import React, {Component} from 'react'
import Product from '../../Components/Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
    }

    render() {
      const mappedInventory = this.props.inventory.map((el, i, arr) => {
          return (
            <Product
                 productName={el.product_name}
                 price={el.price}
                 img={el.img}
                 key={el.id}
            
            
            
            />)
      })
      console.log('mappedinventory:', mappedInventory)
        return (
            <div>
            {mappedInventory}
            </div>
        )
    }

}