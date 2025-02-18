import Lottie from "lottie-react";
import { toast, ToastContainer } from "react-toastify";
import registerAnimation from '../../assets/registerAnim.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";



const Login = () => {

    const { logIn, signinWgoogle } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'


    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                toast("User Login Successful!", {
                    type: "success",
                    theme: "colored"
                })
                navigate(from)
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const googleLogin = () => {
        signinWgoogle()
            .then(result => {
                console.log(result.user)
               
                toast("User Login Successful!", {
                    type: "success",
                    theme: "colored"
                })
                navigate(from)
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
                    <h1 className="text-3xl lg:text-5xl font-bold mx-auto mt-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Are you new here? please <Link className="link" to='/register'>Register</Link></p>
                    </form>
                    <button onClick={googleLogin} className="btn btn-error mb-8 mx-2">Signin with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;