import React, { Component } from 'react';
import Menu from '../menu/menu';
import './Mycomp.css'
import { Route, NavLink} from 'react-router-dom';
import Login from '../../components/Add/Login'
import Add from '../../components/Add/Add'
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
          
          <Route path='/' exact component={Menu} />
          <Route path='/Log' exact component={Login} />
          <Route path='/Log/Add' exact component={Add} />
        
      </div>

    );
  }
}


export default Mycomp;

