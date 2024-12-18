"use client";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function JobList() {
  const joblist = [
    {
      companyLogo:
        "https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?t=st=1734444559~exp=1734448159~hmac=54d4838a8bd87e07c227c268f8962e5451d8e884041ea56abcbe83d427f2e335&w=740",
      company: "Tech Corp",
      position: "Software Engineer",
      workTtime: "Full-time",
      workPlace: "Kathmandu, Nepal",
      experience: "3+ years",
      salary: "$90,000 - $110,000",
    },
    {
      companyLogo:
        "https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?t=st=1734444559~exp=1734448159~hmac=54d4838a8bd87e07c227c268f8962e5451d8e884041ea56abcbe83d427f2e335&w=740",
      company: "Tech Corp",
      position: "Software Engineer",
      workTtime: "Full-time",
      workPlace: "Kathmandu, Nepal",
      experience: "3+ years",
      salary: "$90,000 - $110,000",
    },
    {
      companyLogo:
        "https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?t=st=1734444559~exp=1734448159~hmac=54d4838a8bd87e07c227c268f8962e5451d8e884041ea56abcbe83d427f2e335&w=740",
      company: "Tech Corp",
      position: "Software Engineer",
      workTtime: "Full-time",
      workPlace: "Kathmandu, Nepal",
      experience: "3+ years",
      salary: "$90,000 - $110,000",
    },
  ];
  return (
    <div className="py-8 my-4 grow bg-[#eef2f5]  rounded-lg min-h-[300px]">
      <h1 className="mx-4 md:m-6 font-bold">Recent Jobs..</h1>
      {joblist.map((job, index) => {
        return (
          <Link
            href={""}
            key={index}
            className="bg-white  flex m-4 md:m-6 flex-col md:flex-row justify-between gap-4 rounded-lg p-4 text-gray-700 shadow hover:shadow-sm"
          >
            <div className="flex">
              <div className="relative h-20 w-20  m-1 overflow-hidden rounded-lg order-2 md:order-1">
                <img
                  src={job.companyLogo}
                  alt="Invision company logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col grow space-y-1 pt-1 md:space-y-0 justify-between order-1 md:order-2">
                <h3 className="text-base text-gray-800">{job.company}</h3>
                <h6 className="text-lg md:text-2xl text-[#FF5722] font-semibold sm:text-xl">
                  {job.position}
                </h6>
                <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                  <span>
                    Experience:
                    <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded-full">
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
                <div className="text-gray-500 flex md:pt-2  flex-wrap text-sm ">
                  {job.workTtime} &middot; {job.workPlace} &middot;
                  {job.workTtime}
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
