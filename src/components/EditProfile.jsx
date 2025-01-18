import React, { useEffect, useState } from 'react';
import { addUser } from '../reduxStore/userSlice';
import { useDispatch } from 'react-redux';
import UserFeed from './UserFeed';
import { BASE_URL_API } from '../utils/constants';
import axios from 'axios';

const EditProfile = ({ userData = {} }) => {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState(userData?.firstName)
    const [lastName, setLastname] = useState(userData?.lastName)
    const [age, setAge] = useState(userData?.age)
    const [gender, setGender] = useState(userData?.gender)
    const [skills, setSkills] = useState(userData?.skills)
    const [about, setAbout] = useState(userData?.about)
    const [photoUrl, setPhotoUrl] = useState(userData?.photoUrl)
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        if(showToast) {
            setTimeout(() => setShowToast(false), 3000)
        }
    }, [showToast])

    const saveProfile = async () => {
        try {
            const res = await axios.patch(`${BASE_URL_API}/profile/edit`,
                {
                    firstName,
                    lastName,
                    age,
                    gender,
                    skills,
                    about,
                    photoUrl
                }, {
                withCredentials: true
            })
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {showToast && <div className="toast toast-top toast-center mt-20">
                <div className="alert alert-success">
                    <span>Data saved successfully!!</span>
                </div>
            </div>}
            <div className='flex flex-row justify-around'>
                <div className='flex flex-row justify-center items-center mt-20'>
                    <div className="card bg-base-300 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Edit profile</h2>
                            <div className=''>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <input
                                        type="text"
                                        id='firstName'
                                        placeholder="First Name"
                                        value={firstName || ''}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <input
                                        type="text"
                                        className="grow"
                                        value={lastName || ''}
                                        placeholder="Last Name"
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <input
                                        type="text"
                                        value={photoUrl || ''}
                                        placeholder='Photo Url'
                                        onChange={(e) => setPhotoUrl(e.target.value)}
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <input
                                        type="text"
                                        value={age || ''}
                                        placeholder='Age'
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <input
                                        type="text"
                                        value={gender || ''}
                                        placeholder='Gender'
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <input
                                        type="text"
                                        value={about || ''}
                                        placeholder='About'
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="card-actions justify-end mt-5">
                                <button className="btn btn-primary" onClick={saveProfile}>Save profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserFeed data={{ firstName, lastName, photoUrl, skills, gender, about, age }} />
            </div>
        </div>
    );
};

export default EditProfile;