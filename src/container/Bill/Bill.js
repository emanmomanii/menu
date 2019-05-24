import React, { Component } from 'react'
import './Bill.css'
import axios from 'axios';

class Bill extends Component {
    itemsSelected = () => {
        this.props.bills.map(bi => {
            const data = {
                orderUserName: 'Eman',
                orderItemId: bi[0].itemId,
                orderPrice: bi[0].itemPrice
            }


            axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post', data)
                .then(response => {
                    console.log('response', response)
                })
        })
    }
    render() {

        let sum = 0;
        let bill = this.props.bills.map((bi, index) => {
            sum = sum + parseFloat(bi[0].itemPrice);
            return (

                <div className='bills' key={index}>
                    <div className='descc'>{bi[0].itemDesc}</div>
                    <div className='space' />
                    <div className='price'>{bi[0].itemPrice + 'JD'}</div>
                </div>

            )
        })
        return (

            <div className='header'>
                <div className='head'>
                    <div className='th'>
                        <div>Type</div>
                        <div className='space' />
                        <div>Price</div>
                    </div>
                    {bill}
                    <div className='body1'>
                        <div className='total'>Total:{sum}JD</div>
                    </div>
                </div>
                <div className='button-style'>
                    <button type='submit' onClick={this.itemsSelected} className='done'>Submit</button>
                </div>
            </div>

        );
    }
}
export default Bill;