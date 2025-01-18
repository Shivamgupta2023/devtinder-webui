import React, { useEffect } from 'react';
import { BASE_URL_API } from '../utils/constants';
import axios from 'axios';
import { showFeed } from '../reduxStore/feedSlice.js'
import { useDispatch, useSelector } from 'react-redux';
import UserFeed from './UserFeed.jsx';

const Feed = () => {

    const dispatch = useDispatch()

    const feedData = useSelector(store => store.feed)

    const fetchFeedData = async () => {
        try {

            const feedData = await axios.get(`${BASE_URL_API}/user/feed`, {
                withCredentials: true
            })
            dispatch(showFeed(feedData.data))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchFeedData()
    }, [])

    if(!feedData?.data?.length) {
        return <div>...Loading</div>
    }

    return (
        <div>
            <UserFeed
                data={feedData?.data[0]}
            />
        </div>
    );
};

export default Feed;