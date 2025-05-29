import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ job }) => {
  const { title, location, rating, reviews, openJobs, company_logo } = job;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition dark:bg-gray-800 dark:border-gray-700 w-full max-w-xs mx-auto">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={company_logo}
          alt={title}
          className="w-10 h-10 rounded-full object-cover border"
        />
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
          <div className="flex items-center text-yellow-500 text-sm">
            <FaStar className="mr-1" />
            <span>{rating}</span>
            <span className="ml-1 text-gray-500 dark:text-gray-300">
              ({reviews})
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
        <FaMapMarkerAlt className="mr-1" />
        <span>{location}</span>
      </div>

      <p className="text-sm text-blue-600 font-medium dark:text-blue-400">
        {openJobs} Open Jobs
      </p>
    </div>
  );
};

export default JobCard;