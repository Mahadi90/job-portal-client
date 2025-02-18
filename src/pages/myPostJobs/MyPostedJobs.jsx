import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";



const MyPostedJobs = () => {
    const { user } = useAuth()
  
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setJobs(data)
               
            })
    }, [user.email])

// handle delete jobs
    const handleDeleteJob = (_id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/jobs/${_id}`, {
                    method: 'DELETE',
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount == 1) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your job application has been deleted.",
                                icon: "success"
                            });
                            const remining = jobs.filter(job => job._id !== _id);
                            setJobs(remining)
                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }
    return (
        <div className="my-20 ">
            <h2 className="text-3xl text-center my-10 text-blue-500">Total posted jobs : {jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Company name</th>
                            <th>Your Contact</th>
                            <th>Apllied candidate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job =>
                                <tr key={job._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="logo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.company}
                                    </td>
                                    <td>{job.hr_name} <br />{job.hr_email}
                                    </td>
                                    <td>{
                                        job.applicationCount ? job.applicationCount : 0
                                        }
                                    </td>
                                    <th className="flex gap-2 items-center">
                                    <button className="w-8 h-8"><FaEdit className="w-8 h-8 text-green-500 hover:text-green-700" /></button>
                                    <button onClick={() => handleDeleteJob(job._id)} className="w-8 h-8"><FaTrash className="w-8 h-8 text-red-500 hover:text-red-700" /></button>                   
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;