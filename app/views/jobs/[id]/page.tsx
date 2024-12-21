import Link from "next/link";

export default function JobDetails() {
  return (
    <div className=" py-6">
      <div className="bg-gray-50/90 py-12 w-full">
        <div className="container flex items-center justify-center px-6 text-center md:px-8">
          <div className="space-y-4">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight sm:text-4xl md:text-5xl">
              Senior Product Designer
            </h1>
            <div className="inline-flex items-center gap-3 text-sm font-medium md:gap-5">
              <p className="text-gray-600">at</p>
              <img
                src=""
                width="120"
                height="40"
                alt="Logo"
                className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container grid gap-12 px-6 py-8 text-base md:gap-16 md:px-8 lg:grid-cols-4 lg:gap-16 xl:gap-20">
        <div className="space-y-6 lg:col-start-2 lg:col-span-3 xl:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tighter sm:text-3xl">
              Senior Product Designer
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Full-Time Position
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed lg:space-y-8 xl:text-xl">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Job Description
              </h3>
              <p>
                We are looking for a Senior Product Designer to deliver top-tier
                online user experiences. Your role will play a crucial part in
                ensuring our success, customer satisfaction, and loyalty. The
                ideal candidate will have experience across various design
                platforms (mobile, desktop) and proficiency in working with
                complex systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>5+ years of experience as a Product Designer</li>
                <li>Proficiency in Figma, Sketch, or Adobe XD</li>
                <li>Experience with UI design and user research</li>
                <li>Strong understanding of usability principles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 border border-gray-200 rounded-lg p-6 lg:col-start-1 lg:row-start-1 dark:border-gray-800">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Location</h3>
            <p className="text-sm font-normal text-gray-700">
              San Francisco, CA
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Salary Range
            </h3>
            <p className="text-sm font-normal text-gray-700">
              $120,000 - $150,000
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Application Deadline
            </h3>
            <p className="text-sm font-normal text-gray-700">April 30, 2023</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-start-4 lg:gap-6 justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center h-12 px-10 text-sm font-semibold text-white bg-gray-900 rounded-md shadow-md transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
            prefetch={false}
          >
            Apply for this job
          </Link>
        </div>
      </div>

      <div className="container grid gap-12 px-6 py-8 text-base md:gap-16 md:px-8 lg:grid-cols-4 lg:gap-16 xl:gap-20">
        <div className="space-y-6 lg:col-start-1 lg:col-span-3 xl:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tighter sm:text-3xl">
              Company Overview
            </h2>
            <div className="inline-flex items-center gap-3 text-sm font-medium md:gap-5">
              <img
                src="/placeholder.svg"
                width="120"
                height="40"
                alt="Company Logo"
                className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <Link
                href="#"
                className="text-gray-500 underline dark:text-gray-400"
                prefetch={false}
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
