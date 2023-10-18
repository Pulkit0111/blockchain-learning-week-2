// Note: I have created separate functions for handling the error using promises,
// async/await, also a function to append the appropriate message on the DOM.

//handling potential error using async/await
const getData=async()=>{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await res.json()
        console.log(data)
    } catch(err){
        console.log(err)
    }
    sendAlert("users")
}

//handling potential error using Promises(.then and .catch)
const fetchData=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    sendAlert("posts")
}
 
//appending to DOM
const sendAlert=(str)=>{
    alert(`To see ${str} data, go to browser's console`)
}