import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobList, JobState } from "../../globals/types";
import { Status } from "../../globals/status";
import { AppDispatch } from "../store";
import { API } from "@/app/http";
import { toast } from "react-toastify";

const initialState: JobState = {
  jobs: [],
  status: Status.LOADING,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobs(state: JobState, action: PayloadAction<JobList[]>) {
      state.jobs = action.payload;
    },
    setStatus(state: JobState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { setJobs, setStatus } = jobSlice.actions;
export default jobSlice.reducer;

export function addJob(formData: JobList) {
  return async function addJobThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.post("api/jobs", formData);
      console.log(response);
      if (response.status === 201) {
        dispatch(setStatus(Status.SUCCESS));
        toast.success(response?.data?.message);
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      dispatch(setStatus(Status.ERROR));
      toast.error(error.response?.data?.message);
    }
  };
}
export function fetchJobs() {
  return async function fetchJobsThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));

    try {
      const response = await API.get("api/jobs");
      console.log(response);

      if (response.status === 200 && response.data) {
        const jobs = response.data.jobs;
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setJobs(jobs));
      } else {
        dispatch(setStatus(Status.ERROR));
        toast.error("Failed to fetch jobs.");
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
