import React,{Component} from 'react';
import Menu from '../menu/menu';
import './Mycomp.css'
import Bill from '../Bill/Bill';
import Home from '../../components/Home/Home'
import axios from 'axios';
import {Route , NavLink,Link,Redirect ,Switch} from 'react-router-dom';
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import Notfound from '../../components/Notfound'
class Mycomp extends Component 
{
    render(){
    return (
    
    <div className='Mycomp'>
    <ul>
      <li>
        <NavLink to='/' exact  >Home</NavLink>
      </li>
      <li>
        <NavLink to='/menu' exact>Menu</NavLink>
      </li>
      <li>
        <NavLink to='/About' exact>About Us</NavLink>
      </li>
      <li>
        <NavLink to='/Contact' exact>Contact Us</NavLink>
      </li>
    
    </ul>
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/menu'   component={Menu} />
    <Route path='/About'  component={About} />
    <Route path='/Contact'   component={Contact} />
    <Route  component={Notfound} />
    </Switch> 
    
    </div>
   
  );
}}


export default Mycomp;

