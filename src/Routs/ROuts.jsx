import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Homes/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import Bookings from "../Pages/Bookings/Bookings";
import Bookservice from "../Pages/BookService/Bookservice";
import PrivateRoute from "./PrivateROute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/book/:id',
                element: <Bookservice></Bookservice>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
               
            }
        ]
    }
])
export default router