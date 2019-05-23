import React, { Component } from 'react';
import './Add.css';
import axios from 'axios';

class Add extends Component {
    state = { itemDesc: '', itemImage: '', itemPrice: '' }



    addItem = (event) => {
        const data = this.state;
        console.log(data)
        axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu', data)
            .then(response => {
                console.log('response', response)
            })
    }

    render() {
        return (
            <div className='background'>
                <div className='style'>
                    <div className='form'>
                        <div className='contant'>
                            <form className='input'>
                                <input
                                    type='text'
                                    name='itemDesc'
                                    placeholder='Enter Item Name'
                                    onChange={event => this.changehandle(event)}
                                    className='inputs'
                                    required />
                                <input
                                    type='text'
                                    name='itemImage'
                                    placeholder='Enter Item Image'
                                    onChange={event => this.changehandle(event)}
                                    className='inputs'
                                    required />
                                <input
                                    type='text'
                                    name='itemPrice'
                                    placeholder='Enter Item Price'
                                    onChange={event => this.changehandle(event)}
                                    className='inputs'
                                    maxLength='3'
                                    required />
                            </form>
                            <button className='submitted' type='submit' onClick={event => this.addItem(event)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Add;
