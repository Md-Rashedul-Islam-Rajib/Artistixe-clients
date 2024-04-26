import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

const nav = <>
 <Link to='/'><li>Home</li></Link>
 <Link to='/allitems'><li>All arts & Crafts</li></Link>
 <Link to='/additem'><li>Add craft</li></Link>
 <Link to='/myitems'><li>My art & crafts list</li></Link>
 <Link to='/register'><li>Register</li></Link>

</>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      {nav}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login'><button className="btn">Login</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;