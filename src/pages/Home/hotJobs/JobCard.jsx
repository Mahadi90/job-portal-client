/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const JobCard = ({ job }) => {

    const {_id, title, requirements,jobType, company_logo, company, location, description, salaryRange } = job;

    const handleRoute = () => {
        Swal.fire({
            title: "You have to login first!",
            text: "You won't be able to see details without login or signup",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok"
          })
    }
    return (
        <div className="card bg-base-100 border p-2">
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
                <div className="space-y-2">
                    <p>Salary : {salaryRange.min} to {salaryRange.max} BDT</p>
                    <button onClick={handleRoute} className="btn w-full bg-blue-500 text-white">
                        <Link to={`/jobs/${_id}`}>See Details and Apply</Link></button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;