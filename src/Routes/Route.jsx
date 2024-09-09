import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AdminMainLayout from "../admin/LayoutAdmin/AdminMainLayout";
import AdminHome from "../admin/AdminPages/AdminHome";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
    {
        path:'/admin',
        element: <AdminMainLayout></AdminMainLayout>,
        children:[
            {
                index:true,
                element:<AdminHome></AdminHome>
            }
        ]
         
    }



])

export default router;
