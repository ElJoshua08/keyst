"use server";

import { login, Login, Signup, signup } from "@/app/auth/get-started/schema";
import { getInjection } from "@/di/container";
import { AuthenticationError } from "@/entities/errors/auth.error";

import { redirect } from "next/navigation";

export async function loginAction(data: Login) {
  const validation = login.safeParse(data);
  if (!validation.success) {
    return {
      error: {
        message: validation.error.message,
      },
    };
  }

  const { email, password } = data;

  const authService = getInjection("IAuthService");

  try {
    await authService.login(email, password);
  } catch (e) {
    const error = e as AuthenticationError;
    return {
      error: {
        message: error.message,
      },
    };
  }

  redirect("/account");
}

export async function signupAction(data: Signup) {
  const validation = signup.safeParse(data);
  if (!validation.success) {
    return {
      error: {
        message: validation.error.message,
      },
    };
  }

  const { email, password } = data;

  const authService = getInjection("IAuthService");

  try {
    await authService.signup(email, password);
  } catch (e) {
    const error = e as AuthenticationError;
    return {
      error: {
        message: error.message,
      },
    };
  }
}
