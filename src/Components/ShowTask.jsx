/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Loading from "./Lodding";
import Card from "./Card";
import Heading from "./Share/Heading";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Context from "../Hooks/Context";
import MyTask from "../Pages/MyTask";
import Swal from "sweetalert2";

const ShowTask = () => {
  const { user } = Context();
  const axiosPublic = useAxiosPublic();
  const [Task, setTask] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const category = params.get("category");
  console.log(category);
  const handleDelete = (id) => {
    //     axios.delete(`https://service-sharing-application-server.vercel.app/Addservice/${id}`)
    // const proceed = confirm('Are You sure you want to delete');
    fetch(
      `http://localhost:5000/MyTask/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "service Updated Successfully",
            icon: "success",
            confirmButtonText: "OKh",
          });
          const remaining = Task.filter((Task) => Task._id !== id);
          setTask(remaining);
        }
      });
  };

  useEffect(() => {
    axiosPublic.get(`/MyTask/${user?.email}`).then((res) => {
      if (category) {
        console.log('ase');
        const filtered = res?.data.filter(
          (task) => task.Task_status === category
        );
        setTask(filtered);
      } else setTask(res?.data);

      console.log(res.data);
    });
  }, [category]);
  //   if (category) {
  //             const filtered = MYTask.filter(task => task.Task_status === category)
  //             setTask(filtered)
  //           } else setTask(MyTask)

  //           setLoading(false)

  //   useEffect(() => {
  //     setLoading(true)
  //     getAllTask().then(data => {
  //       if (category) {
  //         const filtered = data.filter(room => room.category === category)
  //         setTask(filtered)
  //       } else setTask(data)

  //       setLoading(false)
  //     })
  //   }, [category])

  if (loading) return <Loading />;
  return (
    <div>
      {Task && Task.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 max-w-screen-xl mx-auto">
          {Task.map((service) => (
            <Card handleDelete={handleDelete} key={service._id} service={service} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Task Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </div>
  );
};

export default ShowTask;
