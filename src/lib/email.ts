"use server";
import nodemailer from "nodemailer";
import { render, pretty } from "@react-email/render";
import VerifyEmailTemplate from "@/app/(auth)/verify-email/components/VerifyEmailTemplate";
import React from "react";
import ResetEmailTemplate from "@/app/(auth)/reset-password/_components/ResetEmailTemplate";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type SendVerificationProps = {
  to: string;
  token: string;
  username: string;
};

export const sendVerificationEmail = async ({
  to,
  token,
  username,
}: SendVerificationProps) => {
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;
  const html = await pretty(
    await render(
      React.createElement(VerifyEmailTemplate, { verifyUrl, username })
    )
  );

  console.log("ENVIANDO EMAIL A:", to, "con token:", token);

  const response = await transporter.sendMail({
    from: `"Dýnamis" <${process.env.SMTP_USER}>`,
    to: to,
    subject: "Verifica tu cuenta en Dýnamis",
    html,
  });

  console.log("DATOS: ", response);
};

type SendPasswordResetEmailProps = Omit<SendVerificationProps, "username" >

export const sendPasswordResetEmail = async ({
  to,
  token,
}: SendPasswordResetEmailProps) => {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/confirm?token=${token}&email=${to}`;
  const html = await pretty(
    await render(React.createElement(ResetEmailTemplate, { resetUrl }))
  );

  await transporter.sendMail({
    from: `"Dýnamis" <${process.env.SMTP_USER}>`,
    to: to,
    subject: "Restablece tu contraseña en Dýnamis",
    html,
  });
};
