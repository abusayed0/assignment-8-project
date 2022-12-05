import React from 'react';
import './SingleSubject.css'
const SingleSubject = ({ subject }) => {
    const { img, subjectName, instruction, isAdded, readingTime } = subject;
    console.log(img, subjectName, instruction, isAdded, readingTime)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Book" className="h-36 w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{subjectName}</h2>
                <p>{instruction}</p>
                <div className="card-actions">
                    <button className="btn btn-primary w-full">Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default SingleSubject;