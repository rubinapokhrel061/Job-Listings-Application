import { jobApply } from "../../controllers/jobApplyController";

export async function POST(req: Request) {
  return await jobApply(req);
}