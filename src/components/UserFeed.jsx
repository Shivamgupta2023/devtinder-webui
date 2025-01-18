import React from 'react';

const UserFeed = ({ data }) => {

    const {firstName, lastName, photoUrl, age, gender, skills, about} = data

    return (
        <div className='flex flex-row justify-center items-center mt-32'>
            <div className="card bg-base-300 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {firstName} {lastName}
                    </h2>
                    <h2>{age}, {gender}</h2>
                    <p>{about}</p>
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