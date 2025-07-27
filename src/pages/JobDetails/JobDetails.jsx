import { useLoaderData } from "react-router";

const JobDetails = () => {
  const { title, company } = useLoaderData();
  return (
    <div className="text-center my-8 space-y-3">
      <h2 className="text-6xl">Job Title: {title}</h2>
      <p>Company: {company}</p>
      <button className="btn btn-primary">Apply Now</button>
    </div>
  );
};

export default JobDetails;
