import { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import JobLists from "./JobLists";
import { jobsCreateByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
  const { user } = UseAuth();

  return (
    <div>
      <h1 className="text-center text-2xl my-4">My Posted Jobs: </h1>
      <Suspense fallback={"Loading..."}>
        <JobLists jobsCreateByPromise={jobsCreateByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
