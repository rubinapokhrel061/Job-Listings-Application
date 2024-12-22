"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { fetchJobById } from "@/app/redux/slices/jobSlice";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function JobDetails() {
  const { id } = useParams();
  const { singleJob } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();

  const formatDate = (dateString: any) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchJobById(id));
    }
  }, [dispatch, id]);

  return (
    <div className="py-10">
      <div className="bg-gradient-to-r from-[#ff5622e1] to-[#FF5722] py-12 rounded-lg w-full">
        <div className="container flex items-center justify-center px-6 text-center md:px-8">
          <div className="">
            <h1 className="text-2xl font-bold text-white tracking-tight sm:text-3xl md:text-4xl">
              {singleJob?.jobPosition}
            </h1>

            <h1>
              <p className="text-white">at</p>
              {singleJob?.companyName}
            </h1>
          </div>
        </div>
      </div>

      <div className="container grid gap-12  py-8 text-base   lg:grid-cols-3 ">
        <div className="space-y-6 lg:col-start-2 lg:col-span-3 xl:space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tighter sm:text-3xl">
              {singleJob?.jobPosition}
            </h2>
            <div className="text-gray-500 flex  capitalize flex-wrap text-sm ">
              {singleJob?.jobType} &middot; {singleJob?.location} &middot;{" "}
              {singleJob?.jobMode}
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed lg:space-y-8 xl:text-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Job Description
              </h3>
              <p>{singleJob?.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Requirements
              </h3>
              <p>{singleJob?.requirements}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 border border-gray-200 rounded-lg p-3 lg:col-start-1 lg:row-start-1 ">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Location</h3>
            <p className="text-sm font-normal text-gray-700">
              {singleJob?.location}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Salary Range
            </h3>
            <p className="text-sm font-normal text-gray-700">
              {singleJob?.salary}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Application Deadline
            </h3>

            <p className="text-sm font-normal text-[#FF5722]">
              {singleJob?.deadline
                ? formatDate(singleJob?.deadline)
                : "No deadline specified"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tighter sm:text-3xl">
              Company Overview
            </h2>
            <div className="inline-flex items-center gap-3 text-sm font-medium md:gap-5">
              <img
                src={singleJob?.companyLogo}
                width="120"
                height="40"
                alt="Company Logo"
                className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-[#FF5722]">{singleJob?.companyName}</h1>
                <a
                  href={singleJob?.companyWebsite}
                  className="text-gray-500 underline dark:text-gray-400"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link
            href={`/views/job-apply/${singleJob?._id}`}
            className="inline-flex items-center justify-center h-12 px-10 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-md "
            prefetch={false}
          >
            Apply for this job
          </Link>
        </div>
      </div>
    </div>
  );
}
