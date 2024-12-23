import { Status } from "./status";
export interface CreatedBy {
  userName: string;
  userId: string;
  userEmail: string;
}
export interface jobdetails {
  jobPosition: string;
  jobId: string | undefined;
  companyName: string;
}
export interface applyForm {
  fullName: string;
  email: string;
  resume: string;
  coverletter: string;
  jobDetails: jobdetails;
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
  createdAt?: Date;
}

export interface JobState {
  jobs: JobList[];
  status: Status;
  singleJob: JobList | null;
  totalJobs: number;
  totalPages: number;
  currentPage: number;
  jobByEmail: JobList[];
}

export interface JobApplyState {
  jobApply: applyForm[];
  status: Status;
}
export interface CreatedBy {
  userName: string;
  userId: string;
  userEmail: string;
}

export interface Job {
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

export interface FavouriteJob {
  job: Job;
  favorite: boolean;
  addedBy: string;
  createdAt?: Date;
}
