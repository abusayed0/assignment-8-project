import React from 'react';
import './SingleActivity.css'
const SingleActivity = ({ activity }) => {
    const { totalTime, breakTime } = activity;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <p className="text-xl">Total Studied : {totalTime} Minutes</p>
                <p className="text-xl">Took Break : {breakTime} Minutes</p>
            </div>
        </div>
    );
};

export default SingleActivity;