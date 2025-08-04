const AddJob = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h1>Please add a job</h1>

      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
            required
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
            required
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
            required
          />

          <label className="label">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
            required
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select select-ghost border-base-300"
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
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" className="input" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="salaryMin"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="salaryMax"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select select-ghost border-base-300"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
