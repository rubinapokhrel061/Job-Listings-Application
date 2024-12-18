import HeroSec from "./components/HeroSec";
import JobList from "./components/JobList";

export default async function Home() {
  return (
    <div>
      <HeroSec />
      <JobList />
    </div>
  );
}
