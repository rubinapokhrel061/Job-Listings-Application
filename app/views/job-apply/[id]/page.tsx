"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { applyForm, jobdetails } from "@/app/globals/types";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { fetchJobById } from "@/app/redux/slices/jobSlice";
import { useParams } from "next/navigation";
import { JobApply } from "@/app/redux/slices/JobApplySlice";

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  display_name: string;
  format: string;
}

export default function JobApplicationForm() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { singleJob } = useAppSelector((state) => state.jobs);

  // Initialize jobDetails with a fallback
  const [jobDetails, setJobDetails] = useState<jobdetails>({
    jobId: "",
    jobPosition: "",
    companyName: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchJobById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (singleJob) {
      setJobDetails({
        jobId: singleJob._id,
        jobPosition: singleJob.jobPosition,
        companyName: singleJob.companyName,
      });
    }
  }, [singleJob]);

  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const [resume, setResume] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const [formData, setFormData] = useState<applyForm>({
    fullName: "",
    email: "",
    resume: resume,
    coverletter: "",
    jobDetails: jobDetails, // Ensure jobDetails is not null
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (resume) {
      setFormData((prev) => ({
        ...prev,
        resume: resume,
      }));
    }
    if (singleJob) {
      setFormData((prev: applyForm) => ({
        ...prev,
        jobDetails: {
          jobId: singleJob?._id,
          jobPosition: singleJob?.jobPosition,
          companyName: singleJob?.companyName,
        },
      }));
    }
  }, [resume, singleJob]);

  const handleUploadSuccess = ({ info }: { info: CloudinaryResponse }) => {
    if (info?.secure_url) {
      setResume(info?.secure_url);
      setFileName(
        info?.display_name ? `${info?.display_name}.${info?.format}` : ""
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const applicationData = {
      ...formData,
    };

    console.log("Form Data Submitted:", applicationData);

    await dispatch(JobApply(applicationData));

    setFormData({
      fullName: "",
      email: "",
      resume: "",
      coverletter: "",
      jobDetails: {
        jobId: "",
        jobPosition: "",
        companyName: "",
      },
    });
    setFileName("");
    setResume("");
  };
  console.log(formData);
  return (
    <div className="overflow-y-auto flex items-center justify-center py-6 min-h-screen">
      <div className="w-full max-w-4xl border border-[#FF5722] p-4 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-[#FF5722] mb-6 text-center">
          Apply for this job
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="companyLogo"
              className="block text-sm font-medium text-gray-700"
            >
              Resume (optional)
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
                  {resume ? fileName : "Upload Resume"}
                </button>
              )}
            </CldUploadWidget>
          </div>

          <div className="mb-4">
            <label
              htmlFor="coverletter"
              className="block text-sm font-medium text-gray-700"
            >
              Cover letter
            </label>
            <textarea
              id="coverletter"
              name="coverletter"
              value={formData.coverletter}
              onChange={handleInputChange}
              className="w-full px-2 py-2 mt-1 border border-gray-400 rounded-lg outline-none focus:border-gray-600"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF5722] text-white py-2 rounded-md hover:bg-[#ff5622f5] outline-none"
          >
            Apply Job
          </button>
        </form>
      </div>
    </div>
  );
}
