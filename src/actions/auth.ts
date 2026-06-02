"use server";

import { prisma, Prisma } from "@/lib/prisma";
import { validate } from "@/lib/validate";
import bcrypt from "bcrypt";
import * as crypto from "crypto";
import { SignupSchema, type SignupInput } from "@/lib/validations";

export async function signup(formData: SignupInput) {
  const { data, errors } = validate(SignupSchema, formData);

  if (errors) {
    return {
      success: false,
      errors,
    }
  }

  const { name, email, phone, password } = data;

  try {
    const saltRounds = 10;

    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(), // normalize email
        phone,
        password: hashedPassword,
        emailVerificationToken: crypto.randomBytes(32).toString("hex"), // generate a random token
      },
    });

    if (!user) {
      return {
        success: false,
        errors: ["Failed to create user"],
      }
    }

    return { success: true }
  } catch (e) {
    console.error("Signup error:", e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // Known DB errors (like unique constraint)
      if (e.code === 'P2002') {
        return {
          success: false,
          errors: ["Email already exists"],
        }
      }
    }

    // fallback generic
    return {
      success: false,
      errors: ["An unexpected error occurred"],
    }
  }
}