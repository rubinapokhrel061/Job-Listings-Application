import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function CreateNewJob() {
  const { user } = await withAuth();

  return (
    <div className="min-h-screen flex items-center justify-center py-6">
      {!user && (
        <div className="text-2xl font-semibold text-[#FF5722]">
          You need to be logged in to post a job
        </div>
      )}
      {user && (
        <div className="w-full max-w-4xl bg-gray-50 p-4 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#FF5722] mb-6 text-center">
            Create New Job
          </h2>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="w-full px-2 py-2 mt-1  border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="companyWebsite"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Website
                </label>
                <input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  className="w-full px-2 py-2 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                />
              </div>
              <div className="mb-4 ">
                <label
                  htmlFor="companyLogo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Logo
                </label>
                <input
                  type="file"
                  id="companyLogo"
                  name="companyLogo"
                  accept="image/*"
                  className="w-full px-2 py-2 mt-1 bg-white border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="jobPosition"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Position
                </label>
                <input
                  type="text"
                  id="jobPosition"
                  name="jobPosition"
                  className="w-full px-2 py-2 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-2 py-2 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="salary"
                  className="block text-sm font-medium text-gray-700"
                >
                  Salary Range
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  className="w-full px-2 py-2 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700"
                >
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-1 py-3 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                >
                  <option value="entry">Entry-Level</option>
                  <option value="mid">Mid-Level</option>
                  <option value="senior">Senior-Level</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="jobType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  className="w-full px-1 py-3 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                >
                  <option value="fullTime">Full-Time</option>
                  <option value="partTime">Part-Time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="jobMode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Mode
                </label>
                <select
                  id="jobMode"
                  name="jobMode"
                  className="w-full px-1 py-3 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                >
                  <option value="onsite">On-Site</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700"
                >
                  Application Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="w-full px-2 py-2 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-2 py-2 mt-1 border border-gray-400  rounded-lg outline-none focus:border-gray-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF5722] text-white py-2 rounded-md hover:bg-[#ff5622f5] outline-none"
            >
              Post Job
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
