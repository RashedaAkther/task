import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Context from "../Hooks/Context";
import SectionTitle from "./SectionTitle";
import axios from "axios";
const api_key = "2096348e81bc39817643de553a77e7db";
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = Context();

  const HandleTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const forms = new FormData();
    const image = e.target.image.files[0];
    forms.append("image", image);
    // console.log(image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${api_key}`,
      forms
    );
    const Document= data.data.display_url
    console.log(data.data.display_url);
    const ProjectName = form.ProjectName.value;
    // console.log();
    const Task_start_date = form.Task_start_date.value;
    const Task_End_Date = form.Task_End_Date.value;
    const Description = form.Description.value;
    const Category = form.Category.value;
    const Priority = form.Priority.value;

    console.log(
      ProjectName,
      Task_start_date,
      Task_End_Date,
      Category,
      Priority
    );

    const userInfo = {
      ProjectName,
      // image,
      Task_start_date,
      Task_End_Date,
      Document,
      Description,
      Category,
      Priority,
      Task_status: "Ongoing",
      requester_Name: user?.displayName,
      requester_email: user?.email,
      requester_photo: user?.photoURL,
    };
    console.log(userInfo);
    axiosPublic.post("/CreateTask", userInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your have Add  successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      }
    });
  };
  // console.log(HandleTask.e);
  return (
    <div>
      <Helmet>
        <title> Blood Source || Add Task</title>
      </Helmet>
      <SectionTitle
        heading="Add blood Task"
        subHeading="Blood Task And Save Life?"
      ></SectionTitle>
      <div>
        <form
          onSubmit={HandleTask}
          className="container flex flex-col mx-auto space-y-4 shadow-xl shadow-zinc-400"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 lg:col-span-full md:col-span-1">
              <p className="font-extrabold text-xl text-center col-span-full border-2">
                Please Give Some Information
              </p>
              <p className="text-xs"></p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Project Name</label>
                <input
                  type="text"
                  name="ProjectName"
                  placeholder="Project Name"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Category Name
                </label>

                <select
                  name="Category"
                  defaultValue="default"
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select Types Of Category
                  </option>
                  <option value="UI/UX Design+">UI/UX Design+</option>
                  <option value="Website">Website</option>
                  <option value="Design">Design</option>
                  <option value="App Development">App Development</option>
                  <option value="Development">Development</option>
                  <option value="Backend">Backend</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Priority Name
                </label>

                <select
                  name="Priority"
                  defaultValue="default"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="default" disabled>
                      Priority
                  </option>
                  <option value="Highest">Highest</option>
                  <option value="Medium">Medium</option>
                  <option value="Lowest">Lowest</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="col-span-full ">
                <label htmlFor="email" className="block mb-2 text-sm">
                Project Images & Document
                </label>
                <input
              // required
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="input input-bordered w-full rounded-md  font-bold focus:ri focus:ri dark:border-gray-700 text-lg  dark:text-gray-900"
            />
              </div>

              <div className="col-span-full  sm:col-span-3 ">
                <label className="text-sm ">Task Date</label>
                <input
                  name="Task_start_date"
                  type="date"
                  placeholder=" Task Date"
                  className="input input-bordered w-full  rounded-md   focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full  sm:col-span-3">
                <label className="text-sm ">Task End Date</label>
                <input
                  name="Task_End_Date"
                  type="date"
                  placeholder=""
                  className="input input-bordered w-full rounded-md  font-bold focus:ri focus:ri dark:border-gray-700 text-lg  dark:text-gray-900"
                />
              </div>
              {/* <br /> */}

              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <input
                  type="text"
                  name="Description"
                  placeholder=" Message"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1 ">
              <p className="text-xl text-center font-bold m-5">Profile</p>
              <img
                className="w-4/5 m-auto rounded-md object-cover"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm"> requester Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm"> requester Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="user EMail"
                  className="input input-bordered w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <input
                  type="submit"
                  value="Add Request"
                  className="btn btn-warning btn-outline w-full md:ml-32 mt-10"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    
    </div>
  );
};

export default AddItems;
