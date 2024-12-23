"use client";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { fetchJobs } from "../redux/slices/jobSlice";
import { Status } from "../globals/status";
import { FiLoader } from "react-icons/fi";
export default function JobList() {
  const dispatch = useAppDispatch();
  const { jobs, status } = useAppSelector((state) => state.jobs);
  const joblist = jobs;
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <div className="py-8 my-4 grow bg-[#eef2f5]  rounded-lg min-h-[300px]">
      <div className="flex justify-between">
        <Link href={`/`}>
          <h1 className="mx-4 md:m-6 font-bold">Recent Jobs..</h1>
        </Link>

        <Link href={"/views/favourite-jobs"}>
          <h1 className="mx-4 md:m-6 text-[#FF5722] font-bold">
            Favourite Jobs
          </h1>
        </Link>
      </div>

      {status === Status.LOADING ? (
        <>
          <div
            role="status"
            aria-label="loading"
            className="flex justify-center items-center py-20"
          >
            <FiLoader className="animate-spin text-indigo-600 w-6 h-6" />
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : joblist.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <p>No jobs found</p>
        </div>
      ) : (
        joblist.map((job, index) => {
          return (
            <Link
              href={`/views/jobs/${job._id}`}
              key={index}
              className="bg-white  flex m-4 md:m-6 flex-col md:flex-row justify-between gap-4 rounded-lg p-4 text-gray-700 shadow hover:shadow-sm"
            >
              <div className="flex md:gap-5 text-sm sm:text-lg">
                <div className="relative h-[85px] w-[85px] object-cover rounded-xl m-1 overflow-hidden  order-2 md:order-1 p-2">
                  <img
                    src={job.companyLogo}
                    alt="Invision company logo"
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col grow space-y-1 pt-1 md:space-y-0 justify-between order-1 md:order-2">
                  <h3 className="text-base text-gray-800 capitalize">
                    {job.companyName}
                  </h3>
                  <h6 className="text-xl capitalize md:text-2xl text-[#FF5722] font-semibold sm:text-xl">
                    {job.jobPosition}
                  </h6>
                  <div className="flex flex-col text-sm sm:text-base gap-1 pt-2 md:flex-row md:gap-2">
                    <span className="text-sm ">
                      Experience:
                      <span className="bg-green-100  text-green-900 px-2 py-0.5 rounded-full">
                        {job.experience}
                      </span>
                    </span>
                    <span>
                      Salary:
                      <span className="bg-blue-100  text-blue-900 px-2 py-0.5 rounded-full">
                        {job.salary}
                      </span>
                    </span>
                  </div>
                  <div className="text-gray-500 flex md:pt-2 capitalize flex-wrap text-sm ">
                    {job.jobType} &middot; {job.location} &middot; {job.jobMode}
                  </div>
                </div>
              </div>
              <div className="flex  text-sm pb-2  items-center justify-end  ">
                {job?.createdAt
                  ? formatDistanceToNow(new Date(job.createdAt), {
                      addSuffix: true,
                    })
                  : ""}
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}
