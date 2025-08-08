import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);
  return (
    <div>
      <h1 className="text-3xl text-center my-6">
        {applications.length} Applications for: {job_id}
      </h1>
    </div>
  );
};

export default ViewApplications;
