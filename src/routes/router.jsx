import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"
import Register from "../pages/register/Register"
import Login from "../pages/Login/Login"

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
        }
     ]
    }
])