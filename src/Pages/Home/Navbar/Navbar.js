import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar bg-red-400">
        <div className="flex-1">
          <Link to={'/'} className="  normal-case font-bold text-2xl" >PHARMACY MANAGEMENT</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
         <li><Link to={'/home'}> Home</Link> </li>
         <li><Link to={'/login'}> Login</Link> </li>
         <li><Link to={'/register'}> Register</Link> </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;