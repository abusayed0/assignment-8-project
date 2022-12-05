import React, { useEffect, useState } from 'react';
import AllSubjects from '../AllSubject/AllSubjects';
import './Parent.css'

const Parent = () => {
    // state for set loaded data from server 
    const [subjects,setSubjects]= useState([]);

    // effect for load data from server 
    useEffect(()=>{
        fetch("data-server/dataServer.json")
        .then(res => res.json())
        .then(data=>setSubjects(data))
    },[])
    return (
        <div>
            <h1>Consistent-Student</h1>
            <AllSubjects
            subjects={subjects}
            ></AllSubjects>
        </div>
    );
};

export default Parent;