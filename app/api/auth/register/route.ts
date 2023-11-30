import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import { UserSchema } from "@/lib/schema";

export async function POST(request: Request) {
  const body = await request.json();
  const validatedRequest = UserSchema.safeParse(body);
  let ErrorMessage = "";

  if (!validatedRequest.success) {
    validatedRequest.error.issues.map((issue) => {
      ErrorMessage += `${issue.message}` + " \n";
    });

    return NextResponse.json({ message: ErrorMessage }, { status: 400 });
  }

  console.log("body", body);
  try {
    const { password, ...rest } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { ...rest, password: hashedPassword },
    });

    const { password: userPassword, ...createdUser } = newUser;
    return NextResponse.json(createdUser);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error },
      { status: 500, statusText: "something wrong" }
    );
  }
}
