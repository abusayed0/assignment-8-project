import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className="mt-16 pb-10">
            <h2 className="text-xl font-semibold border-b-2 border-stone-600">Today's Blogs</h2>
            <div className="mt-4 grid grid-cols-1 gap-5">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            How does react works?
                        </h2>
                        <p className="text-xl">React is a javascript library for buiding user interfaces.it gives us flexibility to build ui. it divides the ui into reuseable and independent peices of code which is called components.  Components serve the same purpose as JavaScript functions.</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            What is the differences between state and props in react?
                        </h2>
                        <p className="text-xl">
                            In react Props is short for properties and they are used to pass data between React components. React's data flow between components is uni-directional.Props are read-only data.
                        </p>
                        <p className="text-xl">
                            On the other-hand state in use to managinig data.State allow us to set data and give use a function for modified this data.
                        </p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            When we use useEffect in react?
                        </h2>
                        <p className="text-xl">
                            The useEffect Hook allows us to perform side effects in your components.Some example of side effect are fetching data, direct updating the dom, setTimeout,setInterval.
                        </p>
                        <p className="text-xl">
                            useEffect hook take two  arguments.The first argument is a callback function.We do side effect code inside this callback function.The second argument is called dependency.it is optional and accepts an array.Bydefault useEffect runs in every render.But if we put an empty array as dependency it will run only in first render.And if we put dependencies then it will run again only when the dependencies are changed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;