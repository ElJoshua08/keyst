"use server";

import "@/core/di/container";
import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { getInjection } from "@/di/container";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const authService = getInjection("IAuthService");

    try {
      await authService.verifyOtp(token_hash, type);

      redirect(next);
    } catch (e) {
      const error = e as Error;
      redirect("auth/error?cause=" + error.cause);
    }

  }

  // redirect the user to an error page with some instructions
  redirect("auth/error?cause=missing-otp");
}
