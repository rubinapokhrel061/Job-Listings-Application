"use client";

import { Status } from "@/app/globals/status";
import { CreatedBy } from "@/app/globals/types";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { deleteJob, fetchJobByemail } from "@/app/redux/slices/jobSlice";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

export default function UserProfile() {
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
    null
  );
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  const dispatch = useAppDispatch();
  const { jobByEmail, status } = useAppSelector((state) => state.jobs);

  // Set user information from localStorage
  useEffect(() => {
    const storedProfilePictureUrl = localStorage.getItem("profilePictureUrl");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser: CreatedBy = JSON.parse(storedUser);
      setUserName(parsedUser.userName || "");
      setUserEmail(parsedUser.userEmail || "");
    }

    if (storedProfilePictureUrl) {
      setProfilePictureUrl(storedProfilePictureUrl);
    }
  }, []);

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchJobByemail(userEmail));
    }
  }, [dispatch, userEmail]);

  const handleDelete = (id: string) => {
    dispatch(deleteJob(id));
  };
  return (
    <div className="container mx-auto min-h-screen p-4 mt-10">
      <div className="flex flex-col gap-4 md:flex md:flex-row md:justify-center items-center bg-white p-5 rounded-lg shadow-lg">
        {profilePictureUrl ? (
          <img
            src={profilePictureUrl}
            alt={userName}
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="w-24 h-24 text-gray-400" />
        )}
        <div>
          <h2 className="text-xl font-semibold">{userName}</h2>
          <p className="text-gray-500">{userEmail}</p>
        </div>
      </div>

      <div className="rounded-sm border border-stroke bg-white px-5 pt-2 mt-8 mb-10 shadow-default sm:px-7.5 pb-10">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black">
            Recently Created Job List:
          </h4>
        </div>

        <div className="max-w-full overflow-x-auto">
          {status === Status.LOADING ? (
            <div className="text-center py-5">
              <div
                role="status"
                aria-label="loading"
                className="flex justify-center items-center min-h-screen"
              >
                <FiLoader className="animate-spin text-indigo-600 w-6 h-6" />
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : jobByEmail && jobByEmail.length > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="min-w-[220px] text-center py-4 px-4 font-medium text-black xl:pl-11">
                    Job Position
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                    Company Name
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                    Location
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black">
                    Deadline
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobByEmail.map((job, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <h1 className="font-bold">{job.jobPosition}</h1>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      {job.companyName}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      {job.location}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      {new Date(job.deadline).toLocaleDateString()}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4">
                      <div className="flex items-center space-x-3.5">
                        <button
                          // onClick={() => {
                          //   onSubmit(product);

                          // }}
                          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(job?._id as string)}
                          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center p-5">
              <p className="text-center text-gray-500">No Jobs found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
