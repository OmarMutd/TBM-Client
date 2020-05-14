import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import Navlinks from './Navlinks'
import Lead from './Lead'
import './Navbar.css'
import TokenService from '../../services/token-services';

export default class Navbar extends Component {

    handleSignOutClick = () => {
      TokenService.clearAuthToken()
      
    }
  
    render() {
        return (
            <div>
               <nav role='navigation'>
      <ul className='basic-nav'>
        <Link to ='/OrderHistory'><li>Order History</li></Link>
        <Link to='/'><li>Sign Out</li></Link>
        <Link to ='/cart'><li>Cart</li></Link>
      </ul>
      <h1 className="logo"><a href="www.google.com">TBM</a></h1>
      <input type="text" placeholder="search"/>
      <br/>
      <ul className="categories">
        <li><a href="www.google.com">Category 1</a></li>
        <li><a href="www.google.com">Category 2</a></li>
        <li><a href="www.google.com">Category 3</a></li>
      </ul>
    </nav>
            </div>
        )

    }
  }

  setToggleNavbarClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class: 'toggled',
      })
    } else {
      this.setState({
        menu_class: '',
      })
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
            <p onClick onClick={() => console.log('This is the image')} >Animals</p>
            <Link to={{pathname:`/Category/Animals`}}><Navlinks text='Animals'/></Link>
            {/* <Link to={{pathname:`/Category/Vehicles`}}><Navlinks text='Vehicles'/></Link> */}
            <Link to={{pathname:`/Category/Furniture`}}><Navlinks text='Furniture'/></Link>
            <Link to={{pathname:`/Category/Households`}}><Navlinks text='Households'/></Link>
            </section>
            
            <section className='right'>
              <form>
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit">Submit</button>
            </form>
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
  

export default Navbar;