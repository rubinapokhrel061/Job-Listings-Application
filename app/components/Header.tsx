import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container items-center flex justify-between">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2 *:font-serif *:py-2 *:px-2 *:md:px-4 *:rounded">
          <Link href={"/login"} className="bg-gray-200">
            Login
          </Link>
          <Link href={"/new-listing"} className="bg-[#FF5722]">
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
