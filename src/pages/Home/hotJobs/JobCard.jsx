/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";

const JobCard = ({ job }) => {

    const { title, requirements,jobType, company_logo, company, location, description, salaryRange } = job;

    return (
        <div className="card bg-base-100  shadow-xl">
            <div className="flex gap-2">
                <figure>
                    <img
                        className="w-14 h-14"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <p className="text-xl font-semibold">{company}</p>
                    <p className="flex items-center gap-1"><FaLocationDot />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{jobType}</p>
                <p>{description}</p>
                <div className="flex flex-wrap gap-2">
                    {
                        requirements.map((skill, idx) => <div className="border rounded-lg py-1 px-2" key={idx}>{skill}</div>)
                    }
                </div>
                <div className="flex justify-between">
                    <p>Salary : {salaryRange.min} to {salaryRange.max} BDT</p>
                    <button className="btn bg-blue-500 text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;