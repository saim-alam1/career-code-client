import { Link } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobsCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    requirements,
    salaryRange,
    _id,
    description,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 border-1 border-white">
      <div className="flex items-center gap-2">
        <figure>
          <img src={company_logo} alt="Company Logo" className="w-16" />
        </figure>

        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex items-center gap-2">
            {" "}
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>

        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div className="badge badge-outline" key={index}>
              {skill}
            </div>
          ))}
        </div>

        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
