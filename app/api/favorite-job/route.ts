import { addFavouriteJob } from "@/app/controllers/favouriteJobController";

export async function POST(req: Request) {
  return await addFavouriteJob(req);
}
