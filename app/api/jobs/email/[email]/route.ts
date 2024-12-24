import { getJobByEmail } from "@/app/controllers/jobController";

export async function GET(
  req: Request,
  context: { params: { email: string } }
) {
  return await getJobByEmail(req, context);
}
