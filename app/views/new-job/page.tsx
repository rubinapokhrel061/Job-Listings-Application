"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { CreatedBy, JobList } from "@/app/globals/types";
import { useAppDispatch } from "@/app/redux/hooks";
import { addJob } from "@/app/redux/slices/jobSlice";

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  display_name: string;
  format: string;
}

export default function CreateNewJob() {
  const dispatch = useAppDispatch();
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const [companyLogoName, setCompanyLogoName] = useState<string>("");
  const [companyLogoUrl, setCompanyLogoUrl] = useState<string>("");
  const [user, setUser] = useState<CreatedBy | null>(null);
  const userDetail = localStorage.getItem("user");

  const [formData, setFormData] = useState<JobList>({
    companyName: "",
    companyWebsite: "",
    companyLogo: companyLogoUrl,
    jobPosition: "",
    location: "",
    salary: "",
    experience: "entry",
    jobType: "fullTime",
    jobMode: "onsite",
    deadline: new Date(),
    description: "",
    createdBy: user ? user : { userName: "", userId: "", userEmail: "" },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser: CreatedBy = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        createdBy: user,
      }));
    }
  }, [user]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const jobData = {
      ...formData,
    };
    console.log("Form Data Submitted:", jobData);
    await dispatch(addJob(jobData));

    setFormData({
      companyName: "",
      companyWebsite: "",
      companyLogo: companyLogoUrl,
      jobPosition: "",
      location: "",
      salary: "",
      experience: "entry",
      jobType: "fullTime",
      jobMode: "onsite",
      deadline: new Date(),
      description: "",
      createdBy: user ? user : { userName: "", userId: "", userEmail: "" },
    });
    setCompanyLogoUrl("");
    setCompanyLogoName("");
  };

  const handleDeleteLogo = () => {
    setCompanyLogoUrl("");
    setCompanyLogoName("");
  };
  const handleUploadSuccess = ({ info }: { info: CloudinaryResponse }) => {
    if (info && info.secure_url !== companyLogoUrl) {
      setCompanyLogoUrl(info.secure_url);
      setCompanyLogoName(
        info.display_name ? `${info.display_name}.${info.format}` : ""
      );
    }
  };

  return (
    <div className="overflow-y-auto flex items-center justify-center py-6 min-h-screen">
      {!user ? (
        <div className="text-2xl font-semibold text-[#FF5722]">
          You need to be logged in to post a job
        </div>
      ) : (
        <div className="w-full max-w-4xl  border border-[#FF5722] p-4 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#FF5722] mb-6 text-center">
            Create New Job
          </h2>
          <form onSubmit={handleSubmit}>
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
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
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
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="companyLogo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Logo
                </label>

                <CldUploadWidget
                  uploadPreset={UPLOAD_PRESET}
                  onSuccess={handleUploadSuccess}
                  onError={(error) => {
                    console.error("Upload error:", error);
                  }}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="w-full px-2 py-2 mt-1 bg-white border border-gray-400 rounded-lg outline-none focus:border-gray-600"
                    >
                      {companyLogoUrl ? companyLogoName : "Upload Company Logo"}
                    </button>
                  )}
                </CldUploadWidget>
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
                  value={formData.jobPosition}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
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
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
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
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
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
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-1 py-3 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
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
                  value={formData.jobType}
                  onChange={handleInputChange}
                  className="w-full px-1 py-3 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
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
                  value={formData.jobMode}
                  onChange={handleInputChange}
                  className="w-full px-1 py-3 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
                >
                  <option value="onSite">On-site</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
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
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
                required
              ></textarea>
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
