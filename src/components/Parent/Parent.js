import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handler } from 'daisyui';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AllSubjects from '../AllSubject/AllSubjects';
import PastActivity from '../PastActivity/PastActivity';
import Summary from '../Summary/Summary';
import { getLSData, randomId, saveActivityInLs, saveBreakInLS, saveSubInLS } from '../utilities/utilities';
import './Parent.css'

const Parent = () => {

    // state for set loaded data from server 
    const [subjects, setSubjects] = useState([]);

    // state for added subject 
    const [addedSubjects, setAddedSubjects] = useState([]);

    // state for set break time
    const [breakTime, setBreakTime] = useState(0);

    // state for set past activity 
    const [pastActivity, setPastActivity] = useState([]);

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
    };

    // event handler for break btn 
    const addBreak = (event) => {
        if (event.target.type === "button") {
            setBreakTime(event.target.value)
            // set break time in localStorage
            saveBreakInLS("break-time", event.target.value)
        }
    };

    // event handler for target complete btn 
    const targetCompleted = () => {
        if (addedSubjects.length > 0) {
            Swal.fire(
                "Congratulation!! you succesfully completed your target."
            )
            localStorage.removeItem("saved-subjects");
            localStorage.removeItem("break-time");
            setAddedSubjects([])
            setBreakTime(0)
            const getAllSubjects = subjects;
            getAllSubjects.forEach(sub => {
                if (sub.isAdded) {
                    sub.isAdded = false;
                }
            })

            const id = randomId(pastActivity);
            const newActivity = {
                totalTime,
                breakTime,
                id,
            }
            let previousActivity = [...pastActivity];
            setPastActivity([...pastActivity, newActivity])
            if (previousActivity.length > 9) {
                previousActivity.pop();
            }
            setPastActivity([newActivity, ...previousActivity]);
            // // saved past activity on local storage 
            saveActivityInLs("past-activity", newActivity);
            // console.log(pastActivity);
        }
        else {
            Swal.fire(
                "Opps!! you did't set any target.please add atleast one subject."
            )
        }
    };

    // effect for load data from server 
    useEffect(() => {
        fetch("data-server/dataServer.json")
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])


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
    }, [subjects])

    // display previous added break time from localStorage when reload the page 
    useEffect(() => {
        const previousBreak = getLSData("break-time").break;
        // console.log(previousBreak)
        if (previousBreak) {
            setBreakTime(previousBreak)
        }
        
    }, [])


    // useEffect for display previous activity 
    useEffect(() => {
        const getPrevious = localStorage.getItem("past-activity");
        if (getPrevious) {
            setPastActivity(JSON.parse(getPrevious))
        }
        else {
            setPastActivity([])
        }
    }, [])

    // calculate total time 
    const totalTime = addedSubjects.reduce((previousTotal, currentSub) => previousTotal + currentSub.readingTime, 0);

    return (
        <div >
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="col-span-1 xl:col-span-2 mt-8 xl:mt-14">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faBookOpenReader} className="text-primary text-4xl" />
                        <h1 className="text-2xl md:text-3xl font-bold text-primary ml-2">Acitve-Student</h1>
                    </div>
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
            <div className="mt-16">
                <h2 className="text-xl font-semibold border-b-2 border-stone-600">Study's Record (Max Last 10 Time's)</h2>
                <PastActivity
                    pastActivity={pastActivity}
                >
                </PastActivity>
            </div>
        </div>
    );
};

export default Parent;