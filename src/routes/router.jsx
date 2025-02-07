import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"
import Register from "../pages/register/Register"
import Login from "../pages/Login/Login"
import JobDetails from "../pages/jobDetail/JobDetails"

export const router = createBrowserRouter([
    {
     path : '/',
     element : <MainLayout/>,
     errorElement : <div>This page not found</div>,
     children : [
        {
            path : '/',
            element : <Home/> 
        },
        {
            path : '/register',
            element : <Register/> 
        },
        {
            path : '/login',
            element : <Login/> 
        },
        {
            path : '/jobs/:id',
            element : <JobDetails/>,
            loader : ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        }
     ]
    }
])