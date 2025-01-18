import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL_API } from '../utils/constants';
import { removeUser } from '../reduxStore/userSlice';

const Navbar = () => {

    const user = useSelector(store => store.user)

    const dispatch = useDispatch()

    const onLogoutClick = async () => {
        axios.post(`${BASE_URL_API}/logout`, {
            withCredentials: true
        })
        dispatch(removeUser())
    }

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CorpTinder</a>
            </div>
           {user && <>
                <div className='mr-4'>
                    {`Welcome, ${user?.firstName}`}
                </div>
                <div className="flex-none gap-2 m-2 mr-6">
                    <div className="dropdown dropdown-end">
                        <div 
                        tabIndex={0} 
                        role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Icon"
                                    src={user?.photoUrl} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li>
                                <Link to="/login" onClick={onLogoutClick}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default Navbar;