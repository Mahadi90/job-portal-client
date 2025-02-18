import { Link, useLoaderData } from "react-router-dom";
import banner from '../../assets/images/team1.jpg'



const JobDetails = () => {
    const job = useLoaderData()
    const {_id, title, company,company_logo, description,category, jobType,requirements,salaryRange, responsibilities,applicationDeadline,hr_name,hr_email} = job;
    return (
        <div className="bg-base-200 min-h-screen">
             <img className="h-[40vh] lg:h-[70vh] w-full" src={banner} alt="" />
        <div className="ms-8 pb-8 my-8">
          <div className=" ">
            
            <div className="flex items-center">
            <div><img className="w-20 h-20 mr-4" src={company_logo} alt="" /></div>
                <div><h1 className="text-5xl font-bold">{company}</h1>
                <h2 className="text-3xl mt-2 font-bold">{title}</h2></div>
                
            </div>
            <p className="py-6">
            Details: {description}
            </p>
            <div>
                Responsibilty:
                {
                    responsibilities.map((item,idx) => <li key={idx}>{item}</li>)
                }
            </div>
            <p>Skills Need :</p>
            <div className="flex flex-wrap gap-2 my-2"> 
                    {
                        requirements.map((skill, idx) => <div className="border rounded-lg py-1 px-2" key={idx}>{skill}</div>)
                    }
                </div>
                <div className="flex gap-4">
                    <p>Salary : {salaryRange.min} to {salaryRange.max} BDT</p>
                    <p>Application Deadline: {applicationDeadline}</p>
                </div>
                <div className="flex gap-4">
                    <p>HR : {hr_name}</p>
                    <p>Email: {hr_email}</p>
                </div>
                <div className="flex gap-4">
                    <p>Job Categry : {category}</p>
                    <p>Job tpe : {jobType}</p>
                </div>
                <button className="btn hover:bg-blue-700 bg-blue-500 text-white mt-6"><Link to={`/jobApply/${_id}`}>Apply Now</Link></button>
          </div>
        </div>
      </div>
    );
};

export default JobDetails;