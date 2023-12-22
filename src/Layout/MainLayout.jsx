import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp";
import Dashboard from "./Dashbord";
import PrivateRoute from "../Components/PrivateRoute";
import AddItems from "../Components/AddTask";
import MyTask from "../Pages/MyTask";
import UpdateTask from "../Components/UpdateTask";
const Router = createBrowserRouter([
 {
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        }
    ]
 }
 ,{
    path:'Dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        {
            path:'/Dashboard/Add_Task',
            element:<AddItems></AddItems>
        },
        {
            path:'/Dashboard/My_Task',
            element:<MyTask></MyTask>
        },
        {
            path:'/Dashboard/UpdateTask/:id',
            element:<UpdateTask></UpdateTask>,
            loader: ({ params }) =>
            fetch(
              `http://localhost:5000/Update/${params.id}`
            ),
        },
    ]
 }
  ]);
  export default Router;