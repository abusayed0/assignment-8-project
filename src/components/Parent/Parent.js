import { handler } from 'daisyui';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AllSubjects from '../AllSubject/AllSubjects';
import PastActivity from '../PastActivity/PastActivity';
import Summary from '../Summary/Summary';
import { getLSData, saveBreakInLS, saveSubInLS } from '../utilities/utilities';
import './Parent.css'

const Parent = () => {
    // state for set loaded data from server 
    const [subjects, setSubjects] = useState([]);

    // state for added subject 
    const [addedSubjects, setAddedSubjects] = useState([]);
    // state for break time
    const [breakTime, setBreakTime] = useState(0);
    // state for complete target 
    const [isCompleted, setIsCompleted] = useState(false);
    const [pastActivity,setPastActivity]=useState([]);
    // event handler for add to list btn 
    const addToList = (subject) => {
        const previouslyAdded = addedSubjects.find(everySub => everySub.id === subject.id);
        // console.log(previouslyAdded)
        if (!previouslyAdded) {
            subject.isAdded = true;
            const newAllAddedSub = [...addedSubjects, subject]
            setAddedSubjects(newAllAddedSub)
            // add added subject in localStorage
            saveSubInLS("saved-subjects", subject.id)
        }
    }
    // event handler for break btn 
    const addBreak = (event) => {
        if (event.target.type === "button") {
            setBreakTime(event.target.value)
            // set break time in localStorage
            saveBreakInLS("break-time", event.target.value)
        }
    }
    // event handler for target complete btn 
    const targetCompleted = () => {
        if (addedSubjects.length > 0) {
            Swal.fire(
                "Congratulation!! you succesfully completed your target."
              )
            localStorage.removeItem("saved-subjects");
            localStorage.removeItem("break-time");
            setIsCompleted(!isCompleted)
            const newActivity={
                totalTime,
                breakTime
            }
            let previousActivity=[...pastActivity];
            setPastActivity([...pastActivity,newActivity])
            if(previousActivity.length>9){
                previousActivity.shift();
                setPastActivity([...previousActivity,newActivity]);
                
            }
            else{
                setPastActivity([...previousActivity,newActivity]);
            }
           
        }
        else{
            Swal.fire(
                "Opps!! you did't set any target."
              )
        }
    }
    // effect for load data from server 
    useEffect(() => {
        fetch("data-server/dataServer.json")
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [isCompleted])

    // get total from added subject 
    const totalTime=addedSubjects.reduce((previousTotal,currentSub)=>previousTotal+currentSub.readingTime,0);
    // effect for display local storage saved subject when reload the page 
    useEffect(() => {
        const getAddedSubFromLs = getLSData("saved-subjects")
        let previousAddedSub = []
        for (const subId in getAddedSubFromLs) {
            // console.log(subId)
            const getAddedSub = subjects.find(sub => sub.id === subId)
            if (getAddedSub) {
                getAddedSub.isAdded = true;
                previousAddedSub.push(getAddedSub)
            }
        }
        
        setAddedSubjects(previousAddedSub)
    }, [subjects, isCompleted])

    // display previous added break time for localStorage when reload the page 
    useEffect(() => {
        const previousBreak = getLSData("break-time").break;
        // console.log(previousBreak)
        if (previousBreak) {
            console.log("if")
            setBreakTime(previousBreak)
        }
        else{
            setBreakTime(0)
        }
    }, [isCompleted])
    return (
        <div className="w-10/12 mx-auto ">
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 mt-14">
                <h1 className="text-3xl font-bold">Consistent-Student</h1>
                <AllSubjects
                    subjects={subjects}
                    addToList={addToList}
                ></AllSubjects>
            </div>
            <Summary
                totalTime={totalTime}
                addBreak={addBreak}
                breakTime={breakTime}
                targetCompleted={targetCompleted}
            >
            </Summary>
        </div>
        <PastActivity
        pastActivity={pastActivity}
        >
        </PastActivity>
        </div>
    );
};

export default Parent;