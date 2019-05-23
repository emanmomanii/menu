import React, { Component } from 'react';
import Menu from '../menu/menu';
import './Mycomp.css'
import { Route, NavLink,Switch } from 'react-router-dom';
import Login from '../../components/Add/Login'
import Notfound from '../../components/Notfound'
class Mycomp extends Component {
  render() {
    return (
      <div>
        <div className='mycomp'>

          <div className='navbar'>
            <ul className='links'>
              <li>
                <NavLink to='/' exact>Menu</NavLink>
              </li>
              <li className='add'>
                <NavLink to='/Log'>Add New Item</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route path='/' exact component={Menu} />
          <Route path='/Log' exact component={Login} />
          <Route component={Notfound} />
        </Switch>
      </div>

    );
  }
}


export default Mycomp;

