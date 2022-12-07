import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="mt-16">
            <h2 className="text-xl font-semibold border-b-2 border-stone-600">Today's Blogs</h2>
            <div className="mt-4 grid grid-cols-1 gap-5">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            How does react works?
                        </h2>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            What is the differences between state and props in react?
                        </h2>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            When we use useEffect in react?
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;