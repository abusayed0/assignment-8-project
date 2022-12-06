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
const saveSubInLS=(name,id)=>{
    const previous=getLSData(name);
    previous[id]=1;
    localStorage.setItem(name,JSON.stringify(previous));
}
const saveBreakInLS=(name,value)=>{
    const previousBreakTime=getLSData(name);
    previousBreakTime.break=value;
    localStorage.setItem(name,JSON.stringify(previousBreakTime))

}

export {
    getLSData,
    saveSubInLS,
    saveBreakInLS
}