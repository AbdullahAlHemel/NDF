import React from 'react';
import logo from '../assets/logo22.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navItems = <>
     <li className='text-lg font-semibold' ><Link to='/about'><a href="/about">About</a></Link></li>
     <li className='text-lg font-semibold' ><Link to='/aggregator'><a href="/aggregator">Aggregator</a></Link></li>
     <li className='text-lg font-semibold' ><Link to='/feature'><a href="/feature">Feature</a></Link></li>
     <li className='text-lg font-semibold' ><Link to='/roadmap'><a href="/roadmap">Roadmap</a></Link></li>
     <li className='text-lg font-semibold' ><Link to='/contract'><a href="/contract">Contract us</a></Link></li>
    </>
    return (<>
    <div className='md:mx-7 my-4 '>   
<div className="navbar md:px-4 border rounded-3xl bg-base-200">
<div className="navbar-start">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <div className='flex'>
            <img src={logo} alt="" />
            <h2>NFD</h2>   
        </div>     
         </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navItems}
    </ul>
  </div>
  <div className='flex md:visible invisible'>
            <img src={logo} alt="" />
          </div>   
        <h2 className='text-3xl font-bold'>NFD</h2>     
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">     
            {navItems}
  </ul>
</div>
<div className="navbar-end">
  <a className="btn">Button</a>
</div>
</div></div> 
</>
    );
};

export default Navbar;