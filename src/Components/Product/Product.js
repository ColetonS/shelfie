import React, {Component} from 'react'

export default class Product extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {this.props.name}
                {this.props.price}
                <img src={this.props.imgurl}/>
            </div>
        )
    }
}