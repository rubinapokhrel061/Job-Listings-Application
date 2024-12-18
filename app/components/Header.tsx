import { getSignInUrl, signOut, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();
  console.log(JSON.stringify(user));
  return (
    <header>
      <div className="container items-center flex justify-between">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2 ">
          {!user && (
            <Link
              href={signInUrl}
              className="bg-gray-200  font-serif py-2 px-2 md:px-4 rounded"
            >
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-gray-200 text-sm sm:text-lg font-serif py-2 px-2 md:px-4 rounded"
              >
                LogOut
              </button>
            </form>
          )}
          <Link
            href={"new-job"}
            className="bg-[#FF5722] text-sm sm:text-lg font-serif py-2 px-2 md:px-4 rounded"
          >
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
