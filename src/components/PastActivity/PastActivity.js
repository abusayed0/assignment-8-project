import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';
import './PastActivity.css'
const PastActivity = ({pastActivity}) => {
    if(pastActivity.length>0){
        return (
             
                <div className="mt-4 grid grid-cols-3 gap-5">
                    {
                        pastActivity.map(activity=><SingleActivity
                        activity={activity}
                        ></SingleActivity>)
                    }
                </div>
        );
    }
    else{
        return (
            <div className=" mt-4 card bg-base-100 shadow-xl p-5">
                <p className="text-xl">No data found.</p>
            </div>
        )
    }
};

export default PastActivity;