"use client";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { fetchJobs } from "../redux/slices/jobSlice";
export default function JobList() {
  const dispatch = useAppDispatch();
  const { jobs } = useAppSelector((state) => state.jobs);
  const joblist = jobs;
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  return (
    <div className="py-8 my-4 grow bg-[#eef2f5]  rounded-lg min-h-[300px]">
      <h1 className="mx-4 md:m-6 font-bold">Recent Jobs..</h1>
      {joblist.map((job, index) => {
        return (
          <Link
            href={`/views/jobs/${job._id}`}
            key={index}
            className="bg-white  flex m-4 md:m-6 flex-col md:flex-row justify-between gap-4 rounded-lg p-4 text-gray-700 shadow hover:shadow-sm"
          >
            <div className="flex ">
              <div className="relative h-20 w-20  m-1 overflow-hidden rounded-lg order-2 md:order-1 p-2">
                <img
                  src={job.companyLogo}
                  alt="Invision company logo"
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col grow space-y-1 pt-1 md:space-y-0 justify-between order-1 md:order-2">
                <h3 className="text-base text-gray-800">{job.companyName}</h3>
                <h6 className="text-lg md:text-2xl text-[#FF5722] font-semibold sm:text-xl">
                  {job.jobPosition}
                </h6>
                <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                  <span>
                    Experience:
                    <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded-full">
                      {job.experience} Level
                    </span>
                  </span>
                  <span>
                    Salary:
                    <span className="bg-blue-100  text-blue-900 px-2 py-0.5 rounded-full">
                      {job.salary}
                    </span>
                  </span>
                </div>
                <div className="text-gray-500 flex md:pt-2  flex-wrap text-sm ">
                  {job.jobType} &middot; {job.location} &middot;
                  {job.jobMode}
                </div>
              </div>
            </div>
            <div className="flex md:flex-col  md:gap-8 text-sm pb-2 gap-2 justify-between md:items-center md:justify-center pt-1 md:p-4">
              <div className="md:order-2"> 2 weeks ago</div>
              <FavoriteBorderIcon className="mr-8 md:order-1" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
