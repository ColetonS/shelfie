import React, {Component} from 'react'

export default class Product extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h2>
                    {this.props.name}
                </h2>
                <h2>
                    {this.props.price}
                </h2>
                <img src={this.props.img}/>
            </div>
        )
    }
}