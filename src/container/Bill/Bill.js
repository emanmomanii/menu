import React, { Component } from 'react'
import './Bill.css'
import axios from 'axios';

class Bill extends Component {
    selectedItem = () => {
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
        let bill = this.props.bills.map((bi,index) => {
            sum = sum + parseFloat(bi[0].itemPrice);
            return (
                <div>
                    <table className='Bill'>
                        <tbody>
                            <tr>
                                <td>{bi[0].itemDesc}</td>
                                <td>{bi[0].itemPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>)
        })
       
        return (
            <div>
                <h1>Bill</h1>
                {bill}
                <h1>Total: {sum}JD</h1>
                <button type='submit' onClick={this.selectedItem}>Submit</button>
            </div>
        );
    }
}
export default Bill;