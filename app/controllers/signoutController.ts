import { NextApiRequest, NextApiResponse } from "next";
import { signOut } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export default async function handler(req: Request, res: Response) {
  try {
    await signOut();

    return NextResponse.json(
      { message: "Signed out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Sign-out error:", error);
    return NextResponse.json({ message: "Error SignOut " }, { status: 500 });
  }
}
