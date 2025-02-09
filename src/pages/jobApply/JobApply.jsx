import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Swal from "sweetalert2";


const JobApply = () => {

    const { user } = useAuth()
    const { id } = useParams()

    

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const github = form.github.value;
        const linkedin = form.linkedin.value;
        const resume = form.resume.value;
        const jobApplication = {
            job_id: id,
            applicants_name: name,
            applicants_email: email,
            github,
            linkedin,
            resume,
        }

        // console.log(jobApplication)

        fetch(`http://localhost:3000/job-application`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
            
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(data)
               
            })

    }

    return (

        <div className="card bg-base-100 w-full shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
                <h1 className="text-3xl text-blue-500 font-bold text-center">Fill up the form and submit your application!</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder="Enter your full name" className="input input-bordered" name="name" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter Your Email" className="input input-bordered" defaultValue={user?.email} name="email" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github Link</span>
                    </label>
                    <input type="url" placeholder="Enter your Github A/C Link" className="input input-bordered" name="github" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn Link</span>
                    </label>
                    <input type="url" placeholder="Enter your LinkedIn A/C Link" className="input input-bordered" name="linkedin" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume Link</span>
                    </label>
                    <input type="url" placeholder="Enter your Resume A/C Link" className="input input-bordered" name="resume" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit Application</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;