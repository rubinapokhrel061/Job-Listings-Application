import { createJob } from "../../controllers/jobController";

export async function POST(req: Request) {
  return await createJob(req);
}
