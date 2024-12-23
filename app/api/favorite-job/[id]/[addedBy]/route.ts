import { deleteFavouriteJob } from "@/app/controllers/favouriteJobController";

export async function DELETE(
  req: Request,
  context: { params: { id: string; addedBy: string } }
) {
  return await deleteFavouriteJob(req, context);
}
