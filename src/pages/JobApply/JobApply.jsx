import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);
  };

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <h1 className="text-6xl text-center my-8">
        Apply for this job : <Link to={`/jobs/${jobId}`}>Details</Link>
      </h1>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            className="input"
            name="linkedIn"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            className="input"
            name="github"
            placeholder="Github profile link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            className="input"
            name="resume"
            placeholder="Resume link"
          />

          <input type="submit" value="Apply" className="btn" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
