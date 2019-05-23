import React, { Component } from 'react';
import './menu.css';
import Bill from '../Bill/Bill';
import axios from 'axios';
import { Route, Link,Redirect} from 'react-router-dom';
//import { withRouter } from "react-router-dom";

class Menu extends Component {

  state = {
    menu: [],
    bill: [],
    select: false,
 
  }
  componentDidMount() {
    axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
      .then(response => {
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
   
    let menu = this.state.menu.map(list => {
      
      return (<div>
        <table className='menu'>
          <tbody>
            <tr>
              <td>{list.itemDesc}</td>
              <td>{list.itemPrice}</td>
              <td><input type='checkbox' onClick={() => this.pop(list.itemId)}></input></td>
            </tr>
          </tbody>
        </table>
      </div>)
    })
    return (

      <div>
        <h1>Menu</h1>
        {menu}
        {this.state.select ?
        <Bill bills={this.state.bill} key={this.state.bill.itemId}/>
        :null}
      </div>

    )

  }
}

export default Menu;
