import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const MyJobs = () => {
const {user} = useAuth()
const [myJobs,setMyJobs] = useState([])

useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setMyJobs(data)
        console.log(data)
    })
},[user?.email])

    return (
        <div>
          <h2 className="text-3xl">Total Applied Jobs {myJobs.length}</h2> 
        </div>
    );
};

export default MyJobs;