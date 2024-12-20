"use client";
import { withAuth } from "@workos-inc/authkit-nextjs";
import HeroSec from "./components/HeroSec";
import JobList from "./components/JobList";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await withAuth();
      if (user) {
        console.log(user);
        const userName =
          user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : " ";
        const userDetails = {
          userName,
          userId: user.id,
          userEmail: user.email,
        };

        localStorage.setItem("user", JSON.stringify(userDetails));
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <HeroSec />
      <JobList />
    </div>
  );
}
