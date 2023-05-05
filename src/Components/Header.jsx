import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { toast } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom'
import {FaLeaf} from "react-icons/fa";


const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const notify = () => toast.error('Successfully logout!');


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
            if(loading){
                return    <progress className="progress progress-error w-56" value="100" max="100"></progress>
            }
        notify();
    }

    return (
        <div className='md:mx-10 shadow-md p-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/register'>Registration</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case md:text-xl md:font-bold text-yellow-600"><span className='lg:text-4xl flex'> <span className='text-green-400'><FaLeaf/></span> 𝕲</span>𝖗<span className='text-green-400'> 𝖊𝖊𝖓𝕷𝖊</span> 𝖆𝕱-𝕱𝖔𝖔𝖉</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className='md:ml-20' to='/'>Home</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Registration</NavLink></li>
                        <p className='mt-2 mr-4'>{user && <span>{user?.email} <button className='btn btn-sm ml-4' onClick={handleLogout}>Sign Out</button></span>}</p>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user && user?.email ? <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" />  : null
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link  className="justify-between">
                                        Profile
                                        <span className="badge text-red-500 font-semibold">New</span>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><Link onClick={handleLogout} >Logout</Link></li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to='/about' className="btn btn-sm">About</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;