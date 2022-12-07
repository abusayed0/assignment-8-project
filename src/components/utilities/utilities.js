const getLSData=name=>{
    let data;
    const savedData= localStorage.getItem(name);
    if(savedData){
       data=JSON.parse(savedData); 
    }
    else{
        data={};
    }
    return data;
}
// save subject in localStorage
const saveSubInLS=(name,id)=>{
    const previous=getLSData(name);
    previous[id]=1;
    localStorage.setItem(name,JSON.stringify(previous));
}
// save break time in localStorage
const saveBreakInLS=(name,value)=>{
    const previousBreakTime=getLSData(name);
    previousBreakTime.break=value;
    localStorage.setItem(name,JSON.stringify(previousBreakTime))

}
const saveActivityInLs=(name,value)=>{
    let activity;
    const getPreviousActivity=localStorage.getItem(name);
    if(getPreviousActivity){
        activity=JSON.parse(getPreviousActivity);
    }
    else{
        activity=[]
    }
    if(activity.length > 9){
        activity.shift();
    }
    const newAllActivity=[...activity,value]

    localStorage.setItem(name,JSON.stringify(newAllActivity))

}

export {
    getLSData,
    saveSubInLS,
    saveBreakInLS,
    saveActivityInLs
}