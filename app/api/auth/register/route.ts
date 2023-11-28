import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  // if(){throw new Error()}
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
    return NextResponse.json({ error });
  }
}
