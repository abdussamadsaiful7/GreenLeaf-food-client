import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';
import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom'

const Header = () => {


    const notify = () => toast.error('Successfully logout!');

    const {user, logOut} = useContext(AuthContext);
    const handleLogout =()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
        notify();
    }

    return (
        <div className='mx-10 shadow-md p-4'>
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
                    <a className="btn btn-ghost normal-case text-2xl font-bold text-yellow-600 ">𝕲𝖗𝖊𝖊𝖓𝕷𝖊𝖆𝕱- 𝕱𝖔𝖔𝖉</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Registration</NavLink></li>
                        <p className='mt-2'>{user && <span>{user?.email} <button className='btn btn-sm ml-4' onClick={handleLogout}>Sign Out</button></span>}</p>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/about' className="btn btn-sm">About</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;