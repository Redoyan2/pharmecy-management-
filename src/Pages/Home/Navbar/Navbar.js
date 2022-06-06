import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../Athentivcation/Login/Login';
import Home from '../Home';

const Navbar = () => {
    return (
        <div class="navbar bg-red-400">
        <div class="flex-1">
          <Link to={'/'} class=" btn  normal-case text-xl" >Pharmacy Management </Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
         <li><Link to={'/login'}> Login</Link> </li>
         <li><Link to={'/register'}> Register</Link> </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;