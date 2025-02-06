import Lottie from "lottie-react";
import registerAnimation from '../../assets/registerAnim.json'
import { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)
        
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            toast("User Registered Successful!",{
                type : "success",
                theme: "colored"
            })
            form.reset()
            
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <ToastContainer />
                    <Lottie className="w-[300px] lg:w-[500px]" animationData={registerAnimation} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mx-auto mt-4">Register now!</h1>
                    <form onSubmit={handleegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;