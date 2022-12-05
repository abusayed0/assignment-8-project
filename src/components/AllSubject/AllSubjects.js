import React from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';

import './AllSubjects.css'
const AllSubjects = ({subjects}) => {
    
    return (
        <div>
            <h3>Select Subject For Study From Here!</h3>
            <div>
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