
import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import logo1 from '../assets/logo.png'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const {user,logOutUser,theme,setTheme} = useContext(AuthContext);
  

useEffect(()=> {
  localStorage.setItem('theme',theme);
  const localTheme = localStorage.getItem('theme');
  document.querySelector('html').setAttribute('data-theme', localTheme)
},[theme])
  
  const handleToggle = (event) =>{
    if(event.target.checked){
      setTheme('luxury')
    }else{
      setTheme('light')
    }
  }
  
  const handleSignOut = () => {
    logOutUser()
    toast.success('Logged out successfully')
    
  }

const nav = <>
 <NavLink to='/'
 className={`rounded-xl p-1 ${theme=='luxury'? 'text-[#DCA54C]':'text-[#044FB2]'}`}
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? `${theme=='luxury'? '#DCA54C': '#044FB2'}` : "",
      color: isActive ? "white" : `${theme=='luxury'? '#DCA54C': 'black'}`,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
  ><li>Home</li></NavLink>


 <NavLink to='/allitems'
 className={`rounded-xl p-1 ${theme=='luxury'? 'text-[#DCA54C]':'text-[#044FB2]'}`}
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? `${theme=='luxury'? '#DCA54C': '#044FB2'}` : "",
      color: isActive ? "white" : `${theme=='luxury'? '#DCA54C': 'black'}`,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>All arts & Crafts</li></NavLink>


 {user && <NavLink to='/additem'
 className={`rounded-xl p-1 ${theme=='luxury'? 'text-[#DCA54C]':'text-[#044FB2]'}`}
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? `${theme=='luxury'? '#DCA54C': '#044FB2'}` : "",
      color: isActive ? "white" : `${theme=='luxury'? '#DCA54C': 'black'}`,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>Add craft</li></NavLink>}


 {user && <NavLink to={`/myitems/${user?.email}`}
 className={`rounded-xl p-1 ${theme=='luxury'? 'text-[#DCA54C]':'text-[#044FB2]'}`}
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? `${theme=='luxury'? '#DCA54C': '#044FB2'}` : "",
      color: isActive ? "white" : `${theme=='luxury'? '#DCA54C': 'black'}`,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>My art & crafts list</li></NavLink>}


 {!user && <NavLink to='/register'
 className={`rounded-xl p-1 ${theme=='luxury'? 'text-[#DCA54C]':'text-[#044FB2]'}`}
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? `${theme=='luxury'? '#DCA54C': '#044FB2'}` : "",
      color: isActive ? "white" : `${theme=='luxury'? '#DCA54C': 'black'}`,
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>Register</li></NavLink>}

</>

    return (
        <div className='pb-16'>
            <div className="navbar bg-base-200 shadow-lg px-4 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white font-bold rounded-box w-52">
        {nav}
      </ul>
    </div>
    <Link to='/'><a className="btn btn-ghost text-xl"><img className='h-12' src={logo1} alt="" /></a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 font-bold">
      {nav}
    </ul>
  </div>
  <div className="navbar-end gap-4">
  {
      user ? <div className='flex gap-4'>
        <div tabIndex={0} role="button" className="btn btn-sm md:btn-md btn-ghost btn-circle avatar" >
        <div className="w-10 rounded-full">
          <img data-tooltip-id="my-tooltip" data-tooltip-content={user? user?.displayName : "Name not Found"} alt="Tailwind CSS Navbar component" src={user?.photoURL ? user?.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
          <Tooltip id="my-tooltip" />
        </div>
      </div>
      <div>
      <button onClick={handleSignOut} className={`btn btn-sm md:btn-md ${theme=='luxury'? 'bg-[#DCA54C]':'bg-[#044FB2]'} text-white`}>Log Out</button>
      </div> 
      </div> 
      
      :
      <Link to='/login' className={`btn btn-sm md:btn-md ${theme=='luxury'? 'bg-[#DCA54C]':'bg-[#044FB2]'} text-white`}>Login</Link>
    }
    <div>
    <label className="cursor-pointer grid place-items-center">
  <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    </div>
  </div>
<Toaster />
</div>
        </div>
    );
};

export default Navbar;