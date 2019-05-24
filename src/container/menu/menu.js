import React, { Component } from 'react';
import './menu.css';
import Bill from '../Bill/Bill';
import axios from 'axios';

class Menu extends Component {

  state = {
    menu: [],
    bill: [],
    select: false

  }
  componentDidMount() {
    axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
      .then((response) => {
        const menus = response.data
        this.setState({ menu: menus })
      }
      );



  }

  pop = (id) => {
    const elementindex = this.state.menu.findIndex(index => {
      return index.itemId === id
    })
    const copy = this.state.menu;
    const added = copy.splice(elementindex, 1);
    this.state.bill.push(added);
    this.setState({
      menu: copy,
      select: true
    });
  }



  render() {

    let menu = this.state.menu.map((list, id) => {
      return (
        <div className='cont' key={id}>
          <div className='menus'>
            <img src='https://lh3.googleusercontent.com/6FxxnB4yPEhBibeTF2KJaz_ptruK32yZsORbO0n_k2Z5R3vrvyolE4ta9eQnm6sINhYHBNE=s85'
              width='180px' onClick={() => this.pop(list.itemId)} alt='Show-Item'/>
            <div className='desc'>{list.itemDesc}</div>
            <hr size='2' length='100px' />
            <div>{list.itemPrice + 'JD'}</div>
          </div>
        </div>


      )
    })
    return (
      <div>
        <div className='header-container'>
          <div className='flavor'>
            <div>OUR</div>
            <div className='flav'>FLAVORS</div>
          </div>
        </div>
        <div className='large'>
          <div className='small'>
            {menu}
          </div>
        </div>
        {this.state.select ?
          <Bill bills={this.state.bill} />
          : null}
      </div>
    )
  }





}


export default Menu;
