import { createJob, getAllJob } from '@/app/controllers/jobController';

export async function POST(req: Request) {
  return await createJob(req);
}

export async function GET(req: Request, context: { params: { page: string; limit: string } }) {
  const params = await context.params;
  return await getAllJob(req, { params });
}
