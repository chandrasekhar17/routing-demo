import React, { Component } from 'react'

export class Orders extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hi Chandu,order something'
        }
    }
    changeMessage()
    {
        this.setState({
            message : 'Thanks , your order has been submitted'
        })
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.changeMessage.bind(this)}>Order Now </button>
            </div>
        )
    }
}

export default Orders
