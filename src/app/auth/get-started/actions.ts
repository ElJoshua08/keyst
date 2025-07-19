"use server";

import { login, Login } from "@/app/auth/get-started/schema";
import "@/container";

import { AuthUseCase } from "@/useCases/auth.use-case";
import { redirect } from "next/navigation";
import { container } from "tsyringe";

export async function loginAction(data: Login) {

  const validation = login.safeParse(data);
  if (!validation.success) {
    throw new Error(validation.error.message);
  }

  const useCase = container.resolve(AuthUseCase);
  const user = await useCase.login(data.email, data.password);

  if (!user) {
    return {
      error: {
        message: "Invalid Credentials",
      },
    };
  }

  redirect("/dashboard")
}

export async function signupAction(data: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const useCase = container.resolve(AuthUseCase);
  const result = await useCase.signup(data.email, data.password);
}
