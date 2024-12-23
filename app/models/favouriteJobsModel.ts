import mongoose, { Document, Schema } from "mongoose";

interface CreatedBy {
  userName: string;
  userId: string;
  userEmail: string;
}

interface Job {
  _id: string;
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

interface FavouriteJobs extends Document {
  job: Job;
  favorite: boolean;
  addedBy: string;
}

const FavouriteJobSchema = new Schema<FavouriteJobs>(
  {
    job: {
      _id: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
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
      },
      location: {
        type: String,
        required: true,
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
      },
      requirements: {
        type: String,
        required: true,
      },

      createdBy: {
        userName: {
          type: String,
          required: true,
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
    favorite: {
      type: Boolean,
      default: true,
    },
    addedBy: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => /\S+@\S+\.\S+/.test(v),
        message: (props: { value: string }) =>
          `${props.value} is not a valid email!`,
      },
    },
  },
  { timestamps: true }
);

// Add a compound index to prevent duplicates (same job, same user)
FavouriteJobSchema.index(
  { "job._id": 1, "job.addedBy.userEmail": 1 },
  { unique: true }
);

export default mongoose.model<FavouriteJobs>(
  "FavouriteJob",
  FavouriteJobSchema
);
