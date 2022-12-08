import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
import './PastActivity.css'
const PastActivity = ({ pastActivity }) => {
    if (pastActivity.length > 0) {
        return (

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    pastActivity.map(activity => <SingleActivity
                        activity={activity}
                        key={activity.id}
                    ></SingleActivity>)
                }
            </div>
        );
    }
    else {
        return (
            <div className=" mt-4 card card-compact bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="text-xl">No data found.</p>
                </div>
            </div>
        )
    }
};

export default PastActivity;