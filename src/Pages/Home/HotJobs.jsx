import React, { use } from "react";
import JobCard from "../Shared/JobCard";
import { Typewriter } from "react-simple-typewriter";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-500">
          <Typewriter
            words={[
              "Hot Jobs Hiring Now!",
              "Top Companies Are Hiring",
              "Your Dream Job Awaits",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover top trending jobs from leading companies. Whether you're
          starting fresh or looking for a career upgrade, these opportunities
          are handpicked just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 hover">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
