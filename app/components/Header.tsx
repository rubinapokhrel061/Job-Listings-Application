"use client";

import { useEffect, useState } from "react";
import { getSignInUrl, signOut, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default function Header() {
  const [user, setUser] = useState(null);
  const [signInUrl, setSignInUrl] = useState("");

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const authData = await withAuth();
        setUser(authData.user);
        const url = await getSignInUrl();
        setSignInUrl(url);
      } catch (error) {
        console.error("Error fetching auth data:", error);
      }
    };
    fetchAuthData();
  }, []);

  return (
    <header>
      <div className="container items-center flex justify-between">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2">
          {!user && (
            <Link
              href={signInUrl}
              className="bg-white rounded-full shadow-lg hover:text-[#388E3C] text-sm sm:text-lg font-serif py-2 px-2 md:px-4"
            >
              LogIn
            </Link>
          )}
          {user && (
            <form action={() => signOut()}>
              <button
                type="submit"
                onClick={() => localStorage.removeItem("user")}
                className="bg-gray-200 rounded-full shadow-lg text-[#388E3C] text-sm sm:text-lg font-serif py-2 px-2 md:px-4 "
              >
                LogOut
              </button>
            </form>
          )}
          <Link
            href={"/views/new-job"}
            className="bg-[#FF5722] rounded-full shadow-lg text-sm sm:text-lg font-serif py-2 px-2 md:px-4 "
          >
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
