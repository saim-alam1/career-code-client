import { use } from "react";

const JobLists = ({ jobsCreateByPromise }) => {
  const jobs = use(jobsCreateByPromise);
  console.log(jobs);
  return (
    <div>
      <h2 className="text-3xl text-center">
        Jobs created by you: {jobs.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>{job.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;
