async function fetchData(){
    try{
    const res2= await fetch("https://baconipsum.com/api/?type=all.")
    const data= await res2.json()
    console.log(data);
}
catch(err){
    console.log(err);
}
finally{
    console.log("good js code");
}
}
fetchData();
    
