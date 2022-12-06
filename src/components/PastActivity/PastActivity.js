import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
import './PastActivity.css'
const PastActivity = ({pastActivity}) => {
    return (
        <div className="mt-16">
            <h2 className="text-xl font-semibold">Last 10 Time Study's Record</h2>
            <div className="mt-4 grid grid-cols-3 gap-5">
                {
                    pastActivity.map(activity=><SingleActivity
                    activity={activity}
                    ></SingleActivity>)
                }
            </div>
        </div>
    );
};

export default PastActivity;