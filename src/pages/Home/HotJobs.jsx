import { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div className="my-12">
      <h1 className="text-6xl font-bold text-center mb-9">
        Hot Jobs of The Day
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
