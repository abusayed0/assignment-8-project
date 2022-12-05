import React from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';

import './AllSubjects.css'
const AllSubjects = ({subjects}) => {
    
    return (
        <div>
            <h3 className="text-xl font-semibold mt-10">Select Subject For Study From Here!</h3>
            <div className="grid grid-cols-3 gap-6 mt-5">
                {
                    subjects.map(subject=><SingleSubject
                    key={subject.id}
                    subject={subject}
                    ></SingleSubject>)
                }
            </div>
        </div>
    );
};

export default AllSubjects;