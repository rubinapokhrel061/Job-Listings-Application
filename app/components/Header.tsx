"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";

interface User {
  profilePictureUrl?: string;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [signInUrl, setSignInUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
    null
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const authData = await withAuth();
        setUser(authData.user as User);
        const url = await getSignInUrl();
        setSignInUrl(url);

        if (authData.user?.profilePictureUrl) {
          localStorage.setItem(
            "profilePictureUrl",
            authData.user.profilePictureUrl
          );
          setProfilePictureUrl(authData.user.profilePictureUrl);
        }
      } catch (error) {
        console.error("Error fetching auth data:", error);
      }
    };

    fetchAuthData();

    const storedProfilePictureUrl = localStorage.getItem("profilePictureUrl");
    if (storedProfilePictureUrl) setProfilePictureUrl(storedProfilePictureUrl);
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await fetch("/api/signout", { method: "POST" });
      if (response.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("profilePictureUrl");
        setProfilePictureUrl(null);
      } else {
        console.error("Failed to sign out");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <header>
      <div className="container items-center flex justify-between">
        <Link href="/" className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-2">
          {!user && (
            <Link
              href={signInUrl}
              className="bg-white rounded-full shadow-lg hover:text-[#388E3C] text-sm sm:text-lg font-serif py-2 px-3 md:px-4"
            >
              LogIn
            </Link>
          )}
          {user && (
            <div className="dropdown relative inline-flex">
              <button
                type="button"
                onClick={toggleDropdown}
                className="dropdown-toggle flex gap-1 items-center bg-gray-200 shadow-lg text-[#388E3C] text-sm sm:text-lg font-serif py-2 px-3 md:px-4 rounded-full cursor-pointer"
              >
                Profile
                <FiChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="dropdown-menu flex flex-col justify-center items-center rounded-xl shadow-lg bg-white absolute top-full w-32 mt-2">
                  <ul className="py-2">
                    <Link href="/views/profile">
                      <li
                        className="flex gap-1 py-2 px-2 md:px-4"
                        onClick={toggleDropdown}
                      >
                        <p>Profile</p>
                        {profilePictureUrl ? (
                          <Image
                            src={profilePictureUrl}
                            alt="Profile"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        ) : (
                          <FaUserCircle className="w-6 text-[#FF5722] h-6" />
                        )}
                      </li>
                    </Link>
                    <li>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="text-sm sm:text-lg text-[#FF5722] font-serif py-2 px-2 md:px-4"
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
          <Link
            href="/views/new-job"
            className="bg-[#FF5722] rounded-full shadow-lg text-sm sm:text-lg font-serif py-2 px-2 md:px-4"
          >
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
