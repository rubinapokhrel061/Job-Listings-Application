import mongoose, { Document, Schema } from "mongoose";
import { JobList } from "../globals/types";

const JobSchema = new Schema<JobList>(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companyWebsite: {
      type: String,
      required: false,
      validate: {
        validator: (v: string) => /^https?:\/\/[^\s$.?#].[^\s]*$/.test(v),
        message: (props: { value: string }) =>
          `${props.value} is not a valid URL!`,
      },
    },
    companyLogo: {
      type: String,
      required: false,
    },
    jobPosition: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      enum: ["entry", "mid", "senior"],
      required: true,
    },
    jobType: {
      type: String,
      enum: ["fullTime", "partTime", "contract"],
      required: true,
    },
    jobMode: {
      type: String,
      enum: ["onsite", "hybrid", "remote"],
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      userName: {
        type: String,
        required: true,
        trim: true,
      },
      userId: {
        type: String,
        required: true,
      },
      userEmail: {
        type: String,
        required: true,
        validate: {
          validator: (v: string) => /\S+@\S+\.\S+/.test(v),
          message: (props: { value: string }) =>
            `${props.value} is not a valid email!`,
        },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<JobList>("Job", JobSchema);
