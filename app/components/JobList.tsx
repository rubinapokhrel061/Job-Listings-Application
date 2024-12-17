import Link from "next/link";

export default function JobList() {
  return (
    <div className="mt-12">
      <Link
        href={""}
        className="bg-white mt-6 flex flex-col md:flex-row justify-between gap-4 rounded-lg p-4 text-gray-700 shadow hover:shadow-sm"
      >
        <div className="flex">
          <div className="relative h-20 w-20  m-1 overflow-hidden rounded-lg order-2 md:order-1">
            <img
              src="https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?t=st=1734444559~exp=1734448159~hmac=54d4838a8bd87e07c227c268f8962e5451d8e884041ea56abcbe83d427f2e335&w=740"
              alt="Invision company logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 justify-between order-1 md:order-2">
            <h3 className="text-base text-gray-600">F1 Soft</h3>
            <h6 className="text-lg md:text-2xl text-[#FF5722] font-semibold sm:text-xl">
              Sr. Frontend Engineer
            </h6>
            <div className="text-gray-500 flex  flex-wrap text-sm md:text-sm">
              Remote &middot; Kathmandu, Nepal &middot; Full-Time &middot; 2
              weeks ago
            </div>
          </div>
        </div>
        <div className="flex md:flex-col md:gap-2 text-xs md:text-sm pb-2 gap-2 md:items-center md:justify-center pt-1 md:p-4">
          <span>
            Experience:
            <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded-full">
              2 Years
            </span>
          </span>
          <span>
            Salary:
            <span className="bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full">
              180-250k
            </span>
          </span>
        </div>
      </Link>
      <Link
        href={""}
        className="bg-white mt-6 flex flex-col md:flex-row justify-between gap-4 rounded-lg p-4 text-gray-700 shadow hover:shadow-sm"
      >
        <div className="flex">
          <div className="relative h-20 w-20  m-1 overflow-hidden rounded-lg order-2 md:order-1">
            <img
              src="https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?t=st=1734444559~exp=1734448159~hmac=54d4838a8bd87e07c227c268f8962e5451d8e884041ea56abcbe83d427f2e335&w=740"
              alt="Invision company logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 justify-between order-1 md:order-2">
            <h3 className="text-base text-gray-600">F1 Soft</h3>
            <h6 className="text-lg md:text-2xl text-[#FF5722] font-semibold sm:text-xl">
              Sr. Frontend Engineer
            </h6>
            <div className="text-gray-500 flex  flex-wrap text-sm md:text-sm">
              Remote &middot; Kathmandu, Nepal &middot; Full-Time &middot; 2
              weeks ago
            </div>
          </div>
        </div>
        <div className="flex md:flex-col md:gap-2 text-xs md:text-sm pb-2 gap-2 md:items-center md:justify-center pt-1 md:p-4">
          <span>
            Experience:
            <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded-full">
              2 Years
            </span>
          </span>
          <span>
            Salary:
            <span className="bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full">
              180-250k
            </span>
          </span>
        </div>
      </Link>
      <Link
        href={""}
        className="bg-white mt-6 flex flex-col md:flex-row justify-between gap-4 rounded-lg p-4 text-gray-700 shadow hover:shadow-sm"
      >
        <div className="flex">
          <div className="relative h-20 w-20  m-1 overflow-hidden rounded-lg order-2 md:order-1">
            <img
              src="https://img.freepik.com/free-vector/logo-with-curly-arrow_1043-146.jpg?t=st=1734444559~exp=1734448159~hmac=54d4838a8bd87e07c227c268f8962e5451d8e884041ea56abcbe83d427f2e335&w=740"
              alt="Invision company logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 justify-between order-1 md:order-2">
            <h3 className="text-base text-gray-600">F1 Soft</h3>
            <h6 className="text-lg md:text-2xl text-[#FF5722] font-semibold sm:text-xl">
              Sr. Frontend Engineer
            </h6>
            <div className="text-gray-500 flex  flex-wrap text-sm md:text-sm">
              Remote &middot; Kathmandu, Nepal &middot; Full-Time &middot; 2
              weeks ago
            </div>
          </div>
        </div>
        <div className="flex md:flex-col md:gap-2 text-xs md:text-sm pb-2 gap-2 md:items-center md:justify-center pt-1 md:p-4">
          <span>
            Experience:
            <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded-full">
              2 Years
            </span>
          </span>
          <span>
            Salary:
            <span className="bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full">
              180-250k
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
