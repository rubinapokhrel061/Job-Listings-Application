import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { applyForm, JobApplyState } from "../../globals/types";
import { Status } from "../../globals/status";
import { AppDispatch } from "../store";
import { API } from "@/app/http";
import { toast } from "react-toastify";

const initialState: JobApplyState = {
  jobApply: [],
  status: Status.LOADING,
};

const jobApplySlice = createSlice({
  name: "jobApply",
  initialState,
  reducers: {
    setJobApply(state: JobApplyState, action: PayloadAction<applyForm[]>) {
      state.jobApply = action.payload;
    },
    setStatus(state: JobApplyState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { setJobApply, setStatus } = jobApplySlice.actions;
export default jobApplySlice.reducer;

export function JobApply(formData: applyForm) {
  return async function JobApplyThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await API.post("/job-apply", formData);
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
