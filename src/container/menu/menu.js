import React, { Component } from 'react';
import './menu.css';
import { Redirect, Link } from 'react-router-dom';
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
  showBill = () => {
    console.log('hi')
    return <Redirect to={{
      pathname: '/Bill',
      state: { bills: this.state.bill }
    }} />
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
            {list.itemImage == 'null' ?
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCiK6WNLaDL4Mm37EBbooEgV-phwF4TDfLZN0qpK9m447CYO3'
                onClick={() => this.pop(list.itemId)} alt='Show-Item' />
              : <img src={list.itemImage}
                onClick={() => this.pop(list.itemId)} alt='Show-Item' />}
            <div className='desc'>{list.itemDesc}</div>
            <hr size='2' length='100px' />
            <div className='price'>{list.itemPrice + 'JD'}</div>
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
          /*<Link path='/Bill'><button onClick={this.showBill}>SHOW BILL</button></Link>
            : null}*/
          : null}
      </div>
    )
  }
}
export default Menu;
