import { createJob, getAllJob } from "../../controllers/jobController";

export async function POST(req: Request) {
  return await createJob(req);
}

export async function GET(req: Request) {
  return await getAllJob(req);
}
