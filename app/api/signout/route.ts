import handler from "@/app/controllers/signoutController";

export async function POST(req: Request, res: Response) {
  return await handler(req, res);
}
