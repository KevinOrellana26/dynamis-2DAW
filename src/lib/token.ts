"use server";
import crypto from "crypto";
import bcrypt from "bcryptjs";

export async function generateToken() {
  const rawToken = crypto.randomBytes(32).toString("hex");
  return {
    rawToken,
    hashedToken: bcrypt.hashSync(rawToken, 10),
  };
}
