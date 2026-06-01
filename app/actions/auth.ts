"use server";

import { prisma } from "@/lib/prisma";

export async function signup(data: any) {
  delete data.confirmPassword;

  const user = await prisma.user.create({ data });

  return user;
}