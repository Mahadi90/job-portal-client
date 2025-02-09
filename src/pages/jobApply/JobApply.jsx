import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const JobApply = () => {

    const {user} = useAuth()
    const {id} = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const github = form.github.value;
        const linkedin = form.linkedin.value;
        const resume = form.resume.value;
        const jobApplication = {
            job_id : id,
            applicants_name : name,
            applicants_email : email,
            github,
            linkedin,
            resume,
        }

        console.log(jobApplication)
    }
    return (
    
            <div className="card bg-base-100 w-full shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
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