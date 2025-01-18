import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL_API }from './utils/constants'
import axios from 'axios';
import { addUser } from './reduxStore/userSlice';

const Body = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(store => store.user)
  
    const fetchData = async () => {
      if(user?.data) return  
      try {
        const data = await axios.get(`${BASE_URL_API}/profile/view`, {
          withCredentials: true
        })
        dispatch(addUser(data?.data))
        navigate('/feed')
      } catch (err) {
        if (err.status === 401) {
          navigate('/login')
        }
        console.error(err)
      }
    }
  
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {/* Your content goes here */}
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Body;