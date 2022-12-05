import { handler } from 'daisyui';
import React, { useEffect, useState } from 'react';
import AllSubjects from '../AllSubject/AllSubjects';
import Summary from '../Summary/Summary';
import './Parent.css'

const Parent = () => {
    // state for set loaded data from server 
    const [subjects, setSubjects] = useState([]);
    
    // state for added subject 
    const [addedSubjects,setAddedSubjects]=useState([]);

    // event handler for add to list btn 
    const addToList=(subject)=>{
            const previouslyAdded=addedSubjects.find(everySub=>everySub.id===subject.id);
            // console.log(previouslyAdded)
            if(!previouslyAdded){
                subject.isAdded=true;
                const newAllAddedSub=[...addedSubjects,subject]
                setAddedSubjects(newAllAddedSub)
            }
    }

    // effect for load data from server 
    useEffect(() => {
        fetch("data-server/dataServer.json")
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-8">
            <div className="col-span-2 mt-14">
                <h1 className="text-3xl font-bold">Consistent-Student</h1>
                <AllSubjects
                    subjects={subjects}
                    addToList={addToList}
                ></AllSubjects>
            </div>
            <Summary
            addedSubjects={addedSubjects}
            >
            </Summary>
        </div>
    );
};

export default Parent;