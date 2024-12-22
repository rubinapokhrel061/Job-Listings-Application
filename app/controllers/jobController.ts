import { NextResponse } from "next/server";
import Job from "../models/jobModel";
import connectToDatabase from "../utils/db";

// Create Job
export const createJob = async (req: Request) => {
  try {
    await connectToDatabase();

    const {
      companyName,
      companyWebsite,
      companyLogo,
      jobPosition,
      location,
      salary,
      experience,
      jobType,
      jobMode,
      deadline,
      description,
      createdBy,
      requirements,
    } = await req.json();

    if (
      !companyName ||
      !jobPosition ||
      !location ||
      !experience ||
      !jobType ||
      !jobMode ||
      !deadline ||
      !description ||
      !createdBy ||
      !companyLogo ||
      !requirements
    ) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    const newJob = new Job({
      companyName,
      companyWebsite,
      companyLogo,
      jobPosition,
      location,
      salary,
      experience,
      jobType,
      jobMode,
      deadline,
      description,
      createdBy,
      requirements,
    });

    const savedJob = await newJob.save();

    return NextResponse.json(
      { message: "Job created successfully", job: savedJob },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error during job creation:", error);
    return NextResponse.json(
      { message: "Error creating job post", error: error.message },
      { status: 500 }
    );
  }
};

// Get All Jobs
export const getAllJob = async (req: Request) => {
  try {
    await connectToDatabase();

    const jobs = await Job.find({});

    if (jobs.length === 0) {
      return NextResponse.json({ message: "No jobs found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Jobs retrieved successfully", jobs },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { message: "Error fetching jobs", error: error.message },
      { status: 500 }
    );
  }
};

// Get Single Job
export const getSingleJob = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDatabase();
    const { id } = await params;
    const job = await Job.findById(id);
    console.log(id);
    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Job retrieved successfully", job },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching job:", error);
    return NextResponse.json(
      { message: "Error fetching job", error: error.message },
      { status: 500 }
    );
  }
};

// Delete Job by ID
export const deleteJobByID = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDatabase();
    const { id } = await params;

    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Job deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { message: "Error deleting job", error: error.message },
      { status: 500 }
    );
  }
};

// Update Job
export const updateJob = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDatabase();

    const {
      companyName,
      companyWebsite,
      companyLogo,
      jobPosition,
      location,
      salary,
      experience,
      jobType,
      jobMode,
      deadline,
      description,
      createdBy,
      requirements,
    } = await req.json();

    const { id } = await params;

    if (
      !companyName ||
      !jobPosition ||
      !location ||
      !experience ||
      !jobType ||
      !jobMode ||
      !deadline ||
      !description ||
      !createdBy
    ) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      {
        companyName,
        companyWebsite,
        companyLogo,
        jobPosition,
        location,
        salary,
        experience,
        jobType,
        jobMode,
        deadline,
        description,
        createdBy,
        requirements,
      },
      { new: true }
    );

    if (!updatedJob) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Job updated successfully", job: updatedJob },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error during job update:", error);
    return NextResponse.json(
      { message: "Error updating job post", error: error.message },
      { status: 500 }
    );
  }
};
