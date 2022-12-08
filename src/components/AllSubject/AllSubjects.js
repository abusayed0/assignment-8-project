import React from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';

import './AllSubjects.css'
const AllSubjects = ({subjects,addToList}) => {
    
    return (
        <div>
            <h3 className="text-xl font-semibold mt-10 border-b-2 border-stone-600">Select  Today Study's Subject!</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                {
                    subjects.map(subject=><SingleSubject
                    key={subject.id}
                    subject={subject}
                    addToList={addToList}
                    ></SingleSubject>)
                }
            </div>
        </div>
    );
};

export default AllSubjects;