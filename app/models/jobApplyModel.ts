import mongoose, { Document, Schema } from "mongoose";
interface jobDetails {
  jobPosition: string;
  jobId: string;
  companyName: string;
}
interface ApplyJob extends Document {
  fullName: string;
  email: string;
  resume: string;
  coverletter: string;
  jobDetails: jobDetails;
}

const JobApplicationSchema = new Schema<ApplyJob>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    resume: {
      type: String,

      trim: true,
    },
    coverletter: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v: string) => /\S+@\S+\.\S+/.test(v),
        message: (props: { value: string }) =>
          `${props.value} is not a valid email!`,
      },
    },
    jobDetails: {
      companyName: {
        type: String,
        required: true,
        trim: true,
      },
      jobId: {
        type: String,
        required: true,
      },
      jobPosition: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<ApplyJob>("JobApply", JobApplicationSchema);
