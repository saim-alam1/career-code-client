const AddJob = () => {
  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className=" my-12">
      <h1 className="text-center text-4xl font-bold">Please add a job</h1>

      <form onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job Title"
            required
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
            required
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company Location"
            required
          />

          <label className="label">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
            required
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              value="All"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select select-ghost border-base-300 w-full"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Web Dev</option>
            <option>Software Engineer</option>
            <option>Data Analyst</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="deadline" className="input w-full" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select select-ghost border-base-300 w-full"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Requirements (Separated by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Responsibilities (Separated by comma)"
          ></textarea>
        </fieldset>

        {/* HR Related Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
            required
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input w-full"
            placeholder="HR Email"
            required
          />
        </fieldset>
        <input type="submit" value="Add Job" className="btn w-full" />
      </form>
    </div>
  );
};

export default AddJob;
