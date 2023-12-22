import { Link, NavLink } from "react-router-dom";
import Categories from "../Components/ManageTask";
import ShowTask from "../Components/ShowTask";


const MyTask = () => {


    return (
        <div>
         <div className="flex justify-between mt-20">
            <div>
            <p className="">MY TASK</p> 
            </div>
            <div>
<div className="flex gap-10 items-center ">
<Link to={'/Dashboard/Add_Task'} className="btn">Create Project</Link>
<div className="border-2 border-indigo-600 ">
<Categories></Categories>
</div>
</div>
            </div>
         </div>

<div className="mt-20">
    <ShowTask></ShowTask>
</div>
        </div>
    );
};

export default MyTask;