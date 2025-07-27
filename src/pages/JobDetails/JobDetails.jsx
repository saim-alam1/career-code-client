import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();
  return (
    <div className="text-center my-8 space-y-3">
      <h2 className="text-6xl">Job Title: {title}</h2>
      <p>Company: {company}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
