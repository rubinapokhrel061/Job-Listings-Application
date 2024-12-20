import { NextResponse } from "next/server";
import Job from "../models/jobModel";
import connectToDatabase from "../utils/db";

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
      !createdBy
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
