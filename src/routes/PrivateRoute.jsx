/* eslint-disable react/prop-types */
import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="text-center w-22 h-22 my-32">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location?.pathname} replace></Navigate>
};

export default PrivateRoute;