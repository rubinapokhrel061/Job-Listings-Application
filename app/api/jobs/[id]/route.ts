import {
  deleteJobByID,
  getSingleJob,
  updateJob,
} from "@/app/controllers/jobController";

export async function PUT(req: Request, context: { params: { id: string } }) {
  return await updateJob(req, context);
}

export async function GET(req: Request, context: { params: { id: string } }) {
  return await getSingleJob(req, context);
}

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  return await deleteJobByID(req, context);
}
