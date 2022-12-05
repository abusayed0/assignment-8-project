import React, { useEffect, useState } from 'react';
import AllSubjects from '../AllSubject/AllSubjects';
import Summary from '../Summary/Summary';
import './Parent.css'

const Parent = () => {
    // state for set loaded data from server 
    const [subjects, setSubjects] = useState([]);

    // effect for load data from server 
    useEffect(() => {
        fetch("data-server/dataServer.json")
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <h1 className="text-3xl font-bold">Consistent-Student</h1>
                <AllSubjects
                    subjects={subjects}
                ></AllSubjects>
            </div>
            <Summary></Summary>
        </div>
    );
};

export default Parent;