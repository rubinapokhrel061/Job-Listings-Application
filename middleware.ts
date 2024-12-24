import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();
export const config = {
  matcher: [
    "/",
    "/views/new-job",
    "/views/jobs/:id",
    "/views/job-apply/:id",
    "/views/favourite-jobs",
    "/views/profile",
  ],
};
