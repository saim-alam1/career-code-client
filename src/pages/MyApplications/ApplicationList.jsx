import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h3 className="text-3xl my-4">
        Jobs Applied so far: {applications.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                index={index}
                key={application._id}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
