import { FavouriteJob } from "@/app/globals/types";
import { API } from "@/app/http";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AppDispatch } from "../store";
import { Status } from "@/app/globals/status";

interface FavouriteJobsState {
  FavJobs: FavouriteJob[];
  status: Status;
}

const initialState: FavouriteJobsState = {
  FavJobs: [],
  status: Status.LOADING,
};

const favouriteJobsSlice = createSlice({
  name: "favouriteJobs",
  initialState,
  reducers: {
    addFavourite: (
      state: FavouriteJobsState,
      action: PayloadAction<FavouriteJob>
    ) => {
      if (
        !state.FavJobs.some(
          (favjob) => favjob.job._id === action.payload.job._id
        )
      ) {
        state.FavJobs.push(action.payload);
      }
    },
    removeFavourite: (
      state: FavouriteJobsState,
      action: PayloadAction<{ _id: string }>
    ) => {
      state.FavJobs = state.FavJobs.filter(
        (favjob) => favjob.job._id !== action.payload._id
      );
    },
    setFavourites: (
      state: FavouriteJobsState,
      action: PayloadAction<FavouriteJob[]>
    ) => {
      state.FavJobs = action.payload;
    },
    setStatus(state: FavouriteJobsState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { addFavourite, removeFavourite, setFavourites, setStatus } =
  favouriteJobsSlice.actions;

export default favouriteJobsSlice.reducer;

// Add to Favourites
export function addToFavourites(favjob: FavouriteJob) {
  return async function addToFavouritesThunk(dispatch: AppDispatch) {
    try {
      const response = await API.post("/favorite-job", favjob);
      if (response.status === 201) {
        dispatch(addFavourite(response.data.favouriteJob));
        toast.success(response?.data?.message);
        dispatch(setStatus(Status.SUCCESS));
      } else {
        toast.error("Failed to add job to favourites.");
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

// Remove from Favourites
export function removeFromFavourites(jobId: string, userEmail: string) {
  return async function removeFromFavouritesThunk(dispatch: AppDispatch) {
    try {
      const response = await API.delete(`/favorite-job/${jobId}/${userEmail}`);
      if (response.status === 200) {
        dispatch(removeFavourite({ _id: jobId }));
        toast.success(response?.data?.message);
        dispatch(setStatus(Status.SUCCESS));
      } else {
        toast.error("Failed to remove job from favourites.");
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
//fetch favouriteJobs by email
export function fetchFavouriteJobsByEmail(email: string) {
  return async function fetchFavouriteJobsByEmailThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      console.log(email);
      const response = await API.get(`/favorite-job/getbyemail/${email}`);
      console.log(response);
      if (response.status === 200) {
        const { favouriteJobs } = response.data;
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setFavourites(favouriteJobs));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error: any) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
