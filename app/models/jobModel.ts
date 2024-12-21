import mongoose, { Document, Schema } from "mongoose";

interface CreatedBy {
  userName: string;
  userId: string;
  userEmail: string;
}

interface Job extends Document {
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
  createdBy: CreatedBy;
  requirements: string;
}

const JobSchema = new Schema<Job>(
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
      enum: ["Entry-Level", "Mid-Level", "Senior-Level"],
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract"],
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
    requirements: {
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

export default mongoose.model<Job>("Job", JobSchema);
