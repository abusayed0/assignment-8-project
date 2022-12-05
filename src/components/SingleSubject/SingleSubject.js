import React from 'react';
import './SingleSubject.css'
const SingleSubject = ({ subject ,addToList}) => {
    const {id, img, subjectName, instruction, isAdded, readingTime } = subject;
    // console.log(img, subjectName, instruction, isAdded, readingTime)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Book" className="h-36 w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{subjectName}</h2>
                <p>{instruction}</p>
                <h4>Reading Time : {readingTime}</h4>
                <div className="card-actions">
                    <button onClick={()=>addToList(subject)} className="btn btn-primary w-full">{!isAdded?"Add To List":"Added"}</button>
                </div>
            </div>
        </div>
    );
};

export default SingleSubject;