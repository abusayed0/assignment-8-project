import React from 'react';
import './SingleActivity.css'
const SingleActivity = ({ activity }) => {
    const { totalTime, breakTime } = activity;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <p className="text-xl">total studied : {totalTime} Minutes</p>
                <p className="text-xl">took break : {breakTime} Minutes</p>
            </div>
        </div>
    );
};

export default SingleActivity;