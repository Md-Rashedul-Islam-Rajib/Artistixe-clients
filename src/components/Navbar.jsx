
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import logo1 from '../assets/logo3.png'

const Navbar = () => {
  const {user,logOutUser} = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOutUser()
    toast.success('Logged out successfully')
    
  }

const nav = <>
 <NavLink to='/'
 className="rounded-xl p-1"
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? "#044FB2" : "",
      color: isActive ? "white" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
  ><li>Home</li></NavLink>


 <NavLink to='/allitems'
 className="rounded-xl p-1"
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? "#044FB2" : "",
      color: isActive ? "white" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>All arts & Crafts</li></NavLink>


 {user && <NavLink to='/additem'
 className="rounded-xl p-1"
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? "#044FB2" : "",
      color: isActive ? "white" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>Add craft</li></NavLink>}


 {user && <NavLink to='/myitems'
 className="rounded-xl p-1"
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? "#044FB2" : "",
      color: isActive ? "white" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>My art & crafts list</li></NavLink>}


 {!user && <NavLink to='/register'
 className="rounded-xl p-1"
 style={({ isActive, isTransitioning }) => {
    return {
      background: isActive? "#044FB2" : "",
      color: isActive ? "white" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
 ><li>Register</li></NavLink>}

</>

    return (
        <div>
            <div className="navbar bg-white shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white font-bold rounded-box w-52">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='h-12' src={logo1} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 font-bold">
      {nav}
    </ul>
  </div>
  <div className="navbar-end">
  {
      user ? <div className='flex gap-4'>
        <div tabIndex={0} role="button" className="btn btn-sm md:btn-md btn-ghost btn-circle avatar" >
        <div className="w-10 rounded-full">
          <img title={user? user?.displayName : "Name not Found"} alt="Tailwind CSS Navbar component" src={user?.photoURL ? user?.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <div>
      <button onClick={handleSignOut} className='btn btn-sm md:btn-md bg-[#044FB2] text-white'>Log Out</button>
      </div> 
      </div> 
      
      :
      <Link to='/login' className="btn btn-sm md:btn-md bg-[#044FB2] text-white">Login</Link>
    }
  </div>
</div>
<Toaster />
        </div>
    );
};

export default Navbar;