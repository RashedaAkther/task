/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Card = ({ service, handleDelete }) => {
  console.log(service);
  //  const [ProjectName,service_image,Description,service_provider,service_area,Priority]=service;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
  
      <div
        data-aos="fade-up"
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <a href="#">
          <img className="rounded-t-lg" src={service?.Document} alt="" />
        </a>
        <div className="p-5">
          <div className="flex justify-between ">
            <p href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service.ProjectName}
              </h5>
            </p>
            <p href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service.Priority}
              </h5>
            </p>
          </div>

          {service?.Description.length > 100 ? (
            <p>
              {service?.Description.slice(0, 100)}{" "}
              <Link className=" font-bold">...</Link>
            </p>
          ) : (
            <p>{service?.Description}</p>
          )}

          <div className=" flex justify-between my-5 ">
            <Link
              to={`/Dashboard/UpdateTask/${service?._id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </Link>
            <Link
              onClick={() => handleDelete(service._id)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
 
  );
};

export default Card;
