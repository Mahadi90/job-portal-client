import { useEffect, useState } from "react";
import JobCard from "./JobCard";


const HotJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    // console.log(jobs)
    return (
        <div>
          <div className="text-center my-12">
          <h2 className="font-bold text-3xl">Hot Jobs are for you</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, eos.</p>  
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {
                    jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;