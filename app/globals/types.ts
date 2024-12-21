import { Status } from "./status"; // Ensure this import is correct
export interface CreatedBy {
  userName: string;
  userId: string;
  userEmail: string;
}

export interface JobList {
  _id?: string;
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  jobPosition: string;
  location: string;
  salary?: string;
  experience: "Entry-Level" | "Mid-Level" | "Senior-Level";
  jobType: "Full-Time" | "Part-Time" | "Contract";
  jobMode: "onsite" | "hybrid" | "remote";
  deadline: Date;
  description: string;
  requirements: string;
  createdBy: CreatedBy;
}

export interface JobState {
  jobs: JobList[];
  status: Status; // Assuming Status is an enum or type
}
