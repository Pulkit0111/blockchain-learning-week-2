//handling potential error using async/await
const getData=async(id)=>{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await res.json()
        let dataById=data.filter((ele)=>{
            return ele.userId==id
        })
        console.log(dataById)
    } catch(err){
        console.log(err)
    }
    alert(`See the posts of user ${id} in browser's console`)
}

//handling potential error using Promises(.then and .catch)
const fetchData=(id)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then((data)=>{
        let dataById=data.filter((ele)=>{
            return ele.userId==id
        })
        console.log(dataById)
    })
    .catch(err=>console.log(err))
    alert(`See the posts of user ${id} in browser's console`)
}