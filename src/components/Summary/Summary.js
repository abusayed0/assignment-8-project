
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Summary.css'

const Summary = ({ totalTime, breakTime, addBreak, targetCompleted }) => {

    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <div className="static md:sticky md:top-5">
                {/* img and address start */}
                <div className="flex">
                    <div className="avatar mr-3">
                        <div className="w-16 rounded-full">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvbWFsJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='' />

                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Peter Parker</h1>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faLocationDot} className="text-xl"/>
                                <p className="ml-2">Dhaka,Bangledesh</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* personal data start */}
                <div className="mt-10 flex justify-around bg-violet-300 py-3 rounded">
                    <div className="flex flex-col items-center justify-center">
                        <p>Read In</p>
                        <p>Class Tweleve</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p>Age</p>
                        <p>19</p>
                    </div>
                </div>
                {/* add break start */}
                <div className="mt-10">
                    <h1 className="text-xl">Add A Break</h1>
                    <div onClick={(event) => addBreak(event)} className="flex justify-around mt-4 bg-violet-300 py-3 rounded ">

                        <button type="button" value="5" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-primary">5 min</button>
                        <button type="button" value="10" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-primary">10 min</button>
                        <button type="button" value="15" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-primary">15 min</button>
                        <button type="button" value="20" className="px-2 py-3 rounded-full text-black hover:text-white border-0 bg-white hover:bg-primary">20 min</button>
                    </div>

                </div>
                {/* study summary start  */}
                <div className="mt-10">
                    <h3 className="text-xl">Today Study's Summary</h3>
                    <div className="mt-4 flex justify-around py-3 bg-violet-300 rounded">
                        <h2>Total Study Time</h2>
                        <p>{totalTime} min</p>
                    </div>
                    <div className="mt-3 flex justify-around py-3 bg-violet-300 rounded">
                        <h2>Break Time</h2>
                        <p>{breakTime} min</p>
                    </div>
                </div>
                {/* target complete btn  */}
                <div className="card-actions mt-10">
                    <button onClick={targetCompleted} className="btn btn-primary w-full">Target Completed</button>
                </div>

            </div>
        </div>
    );
};

export default Summary;