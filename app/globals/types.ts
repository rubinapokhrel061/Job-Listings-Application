import { Status } from "./status"; // Ensure this import is correct
export interface CreatedBy {
  userName: string;
  userId: string;
  userEmail: string;
}

export interface JobList {
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  jobPosition: string;
  location: string;
  salary?: string;
  experience: "entry" | "mid" | "senior";
  jobType: "fullTime" | "partTime" | "contract";
  jobMode: "onsite" | "hybrid" | "remote";
  deadline: Date;
  description: string;
  createdBy: CreatedBy;
}

export interface JobState {
  jobs: JobList[];
  status: Status; // Assuming Status is an enum or type
}
