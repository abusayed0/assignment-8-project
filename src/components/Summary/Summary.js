import React from 'react';
import './Summary.css'

const Summary = () => {
    return (
        <div className="bg-base-100 shadow-xl px-5">
            <div className="mt-10 sticky top-10">
                {/* img and address start */}
                <div className="flex">
                    <div className="avatar mr-3">
                        <div className="w-16 rounded-full">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvbWFsJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='' />

                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Peter Parker</h1>
                            <p>Dhaka,Bangledesh</p>
                        </div>
                    </div>
                </div>
                {/* personal data start */}
                <div className="mt-10 flex justify-around bg-violet-300 py-3 rounded">
                    <div className="flex flex-col items-center justify-center">
                        <p>Read In</p>
                        <p>Class Tweleve</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p>Age</p>
                        <p>19</p>
                    </div>
                </div>
                {/* add break start */}
                <div className="mt-10">
                    <h1>Add A Break</h1>
                    <div className="flex justify-around mt-4 bg-violet-300 py-3 rounded ">

                        <button type="button" value="5" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-blue-800">5 min</button>
                        <button type="button" value="10" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-blue-800">10 min</button>
                        <button type="button" value="15" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-blue-800">15 min</button>
                        <button type="button" value="20" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-blue-800">20 min</button>
                    </div>

                </div>
                {/* study summary start  */}
                <div className="mt-10">
                    <h3>Today Study's Summary</h3>
                    <div className="mt-4 flex justify-around py-3 bg-violet-300 rounded">
                        <h2>Total Study Time</h2>
                        <p>100 min</p>
                    </div>
                    <div className="mt-3 flex justify-around py-3 bg-violet-300 rounded">
                        <h2>Break Time</h2>
                        <p>5 min</p>
                    </div>
                </div>
                {/* target complete btn  */}
                <div className="card-actions mt-10">
                    <button className="btn btn-primary w-full">Target Completed</button>
                </div>

            </div>
        </div>
    );
};

export default Summary;