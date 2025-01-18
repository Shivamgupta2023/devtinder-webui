import React from 'react';

const UserFeed = ({ data }) => {

    const {firstName, lastName, photoUrl, age, gender, skills, about} = data

    return (
        <div className='flex flex-row justify-center items-center mt-32'>
            <div className="card bg-base-300 w-96 shadow-xl">
                <figure>
                    <img
                    className='w-96 h-60 object-fit'
                        src={photoUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {firstName} {lastName}
                    </h2>
                    {(age && gender) && <h2>{age}, {gender}</h2>}
                    {about && <p>{about}</p>}
                    <div className="card-actions justify-end mt-8">
                        <div className="badge badge-outline p-4">Ignore</div>
                        <div className="badge badge-outline p-4">Interested</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFeed;