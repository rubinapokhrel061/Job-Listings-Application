import { getFavouriteJobsByEmail } from "@/app/controllers/favouriteJobController";

export async function GET(
  req: Request,
  context: { params: { email: string } }
) {
  return await getFavouriteJobsByEmail(req, context);
}
