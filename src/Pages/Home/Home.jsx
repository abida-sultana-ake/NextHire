import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin mx-auto m-80 text-center dark:border-violet-600"></div>}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
