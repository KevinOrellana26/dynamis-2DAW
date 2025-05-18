"use server";
import { sendVerificationEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { generateToken } from "../../../../lib/token";
import { sendEmailVerification, verifyEmail } from "./verify-email.db";
import {
  SendEmailVerificationT,
  VerifyEmailTokenT,
} from "./verify-email.definitions";

export async function verifyEmailTokenAction({ token }: VerifyEmailTokenT) {
  const message = await verifyEmail({ token });
  return message;
}

export async function sendEmailVerificationAction({
  userId,
  email,
  username,
}: SendEmailVerificationT) {
  await sendEmailVerification({ userId, email, username });
}
