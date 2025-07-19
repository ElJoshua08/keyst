import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { redirect } from "next/navigation";

import "@/container";
import { AuthUseCase } from "@/useCases/auth.use-case";
import { container } from "tsyringe";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const useCase = container.resolve(AuthUseCase);
    const success = await useCase.verifyOtp(token_hash, type);

    if (!success) {
      // redirect the user to an error page with some instructions
      redirect("auth/error?cause=invalid-otp");
    }

    // redirect user to specified redirect URL or root of app
    redirect(next);
  }

  // redirect the user to an error page with some instructions
  redirect("auth/error?cause=missing-otp");
}
