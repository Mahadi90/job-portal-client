import Lottie from "lottie-react";
import registerAnimation from '../../assets/registerAnim.json'
import { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";


const Register = () => {

    const { createUser, profile } = useContext(AuthContext)

    const handlRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        // console.log(email, password)
       
        createUser(email, password)
            .then(result => {
                profile(name, photo)
                .then(()=> {
                    
                })
                .catch(error => {
                    console.log(error.message)
                })
                console.log(result.user)
                toast("User Registered Successful!", {
                    type: "success",
                    theme: "colored"
                })
                form.reset()

            })
            .catch(error => {
                console.log(error.message)
            })

            

    }

    return (
        <div className="hero bg-base-200 min-h-screen z-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <ToastContainer />
                    <Lottie className="w-[300px] lg:w-[500px]" animationData={registerAnimation} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl lg:text-5xl font-bold mx-auto mt-4">Register now!</h1>
                    <form onSubmit={handlRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Have you already an account? please <Link className="link" to='/login'>Login</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;