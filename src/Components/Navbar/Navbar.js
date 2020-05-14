import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import Navlinks from './Navlinks';
import Lead from './Lead';
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu_class: '',
    }
  }
  render = () => {
    let nav_bar_class = `nav-bar ${this.state.menu_class}`
    return (
        <div>
          <div className={nav_bar_class} >
            <Lead text="The Black Market" />
            <section className='left'>
            <Link to='/Products'><Navlinks text='All'/></Link>
            <Link to={{pathname:`/Category/animals`}}><Navlinks text='Animals'/></Link>
            <Link to={{pathname:`/Category/vehicle`}}><Navlinks text='Vehicles'/></Link>
            <Link to={{pathname:`/Category/furniture`}}><Navlinks text='Furniture'/></Link>
            <Link to={{pathname:`/Category/household`}}><Navlinks text='Households'/></Link>
            </section>
            <section className='search'>
            <form>
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit">Submit</button>
            </form>
            </section>            
            <section className='right'>              
            <Link to='/OrderHistory'><Navlinks text='Order History' /></Link>
            <Link to='/'><Navlinks text='Sign Out' /></Link>
              <Link to='/Cart'><Navlinks text='Cart' /></Link>
            </section>
            <FontAwesomeIcon icon={faBars} className='nav-bar-icon' onClick={this.setToggleNavbarClass}/>
            <div className='clear-fix' />
          </div>
          </div>
        
    )
  }
  }

export default Navbar;