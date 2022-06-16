import React from 'react'
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar = () => {
   return (
      <div className={classes.nav}>
         <Link to='/array'>arrayTask</Link>
         <Link to='/users'>Users</Link>
         <Link to='/genderChart'>Gender Chart</Link>
         <Link to='/ageChart'>Age Chart</Link>
         <Link to='/dateChart'>Date Chart</Link>
         <Link to='/countryChart'>Country Chart</Link>
      </div>
   )
}

export default Navbar;