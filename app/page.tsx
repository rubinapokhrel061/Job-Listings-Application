import HeroSec from "./components/HeroSec";
import JobList from "./components/JobList";
import { getSignInUrl, getSignUpUrl } from "@workos-inc/authkit-nextjs";
export default async function Home() {
  const signInUrl = await getSignInUrl();

  const signUpUrl = await getSignUpUrl();
  return (
    <div>
      <HeroSec />
      <JobList />
    </div>
  );
}
