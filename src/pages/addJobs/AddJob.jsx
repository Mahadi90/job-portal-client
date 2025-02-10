
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";



const AddJob = () => {
    const {user} = useAuth()

   const handleMyJob = e =>{
     e.preventDefault()

     const formdata = new FormData(e.target)
     const initialJob = Object.fromEntries(formdata.entries())
     const {min, max, currency, ...newJob} = initialJob;

     newJob.salaryRange = {min,max,currency}
     newJob.requirements = newJob.requirements.split('\n')
     newJob.responsibilities = newJob.responsibilities.split('\n')
     
      fetch(`http://localhost:3000/jobs`, {
                 method: "POST",
                 headers: {
                     'content-type': 'application/json'
                 },
                 body: JSON.stringify(newJob)
             })
                 .then(res => res.json())
                 .then(data => {
                  if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New Job added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                  }
                    
                 })
   }
    
    return (
        <div>
            <form onSubmit={handleMyJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job title</span>
                    </label>
                    <input type="text" placeholder="Title" name='title' className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job location</span>
                    </label>
                    <input type="text" placeholder="Location" name="location" className="input input-bordered" required />
                </div>
                {/* job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job description</span>
                    </label>
                    <input type="text" placeholder="Description" name="description" className="input input-bordered" required />
                </div>
                {/* job company */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job company</span>
                    </label>
                    <input type="text" placeholder="Company" name="company" className="input input-bordered" required />
                </div>
                {/*  hr_name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR name</span>
                    </label>
                    <input defaultValue={user.displayName} type="text" placeholder="hr_name" name="hr_name" className="input input-bordered" required />
                </div>
                {/*  company_logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company_logo</span>
                    </label>
                    <input type="link" placeholder="company_logo" name="company_logo" className="input input-bordered" required />
                </div>
                {/*  hr_email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR email</span>
                    </label>
                    <input defaultValue={user.email} type="email" placeholder="HR_email" name="hr_email" className="input input-bordered" required />
                </div>
                {/*  applicationDeadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="text" placeholder="Application Deadline" name="applicationDeadline" className="input input-bordered" required />
                </div>
                {/*  jobType */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue='Pick a job type' name="jobType" className="select select-bordered w-full max-w-xs">
                        <option disabled>Pick a job type</option>
                        <option>Onsite</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                    </select>
                </div>
                {/*  category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select defaultValue='Pick a job category' name="category" className="select select-bordered w-full max-w-xs">
                        <option disabled>Pick a job category</option>
                        <option>Engenering</option>
                        <option>Finance</option>
                        <option>Development</option>
                    </select>
                </div>
                {/*  salaryRange */}
                <div className="form-control grid grid-cols-1 lg:grid-cols-3 items-end gap-4">
                    {/* min */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="number" placeholder="Min" name="min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder="max" name="max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select defaultValue='Currency' name="currency" className="select select-bordered w-full max-w-xs">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EURO</option>
                        </select>
                    </div>
                </div>
                {/*  requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="requirements" placeholder="Write each requirements in different line"></textarea>
                </div>
                {/*  responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="responsibilities" placeholder="Write each responsibilities in different line"></textarea>
                </div>
                {/* submit btn */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;