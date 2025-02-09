import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";


const MyJobs = () => {
    const { user } = useAuth()
    const [myJobs, setMyJobs] = useState([])

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
                fetch(`http://localhost:3000/job-application/${_id}`,{
                    method : 'DELETE',
                }
                )
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount == 1){
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your job application has been deleted.",
                            icon: "success"
                          });
                          const remining = myJobs.filter(job => job._id !== _id);
                          setMyJobs(remining)
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

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyJobs(data)
            })
    }, [user?.email])

   

    return (
        <div className="my-20 ">
            <h2 className="text-3xl text-center my-10 text-blue-500">Total Applied Jobs : {myJobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Company name</th>
                            <th>Your Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myJobs.map(myJob => 
                                <tr key={myJob._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={myJob.company_logo}
                                                        alt="logo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myJob.title}</div>
                                                <div className="text-sm opacity-50">{myJob.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    {myJob.company}
                                    </td>
                                    <td>{myJob.applicants_name} <br />{myJob.applicants_email}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDeleteJob(myJob._id)} className="w-8 h-8"><FaTrash className="w-8 h-8 text-red-500 hover:text-red-700" /></button>
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

export default MyJobs;