import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"

export const router = createBrowserRouter([
    {
     path : '/',
     element : <MainLayout/>,
     errorElement : <div>This page not found</div>,
     children : [
        {
            path : '/',
            element : <Home/> 
        }
     ]
    }
])