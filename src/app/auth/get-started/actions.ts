"use server";

import "@/container";

import { AuthUseCase } from "@/useCases/auth.use-case";
import { container } from "tsyringe";

export async function loginAction(data: { email: string; password: string }) {
  const useCase = container.resolve(AuthUseCase);
  const user = await useCase.login(data.email, data.password);

  return user;
}

export async function signupAction(data: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const useCase = container.resolve(AuthUseCase);
  const user = await useCase.signup(data.email, data.password);
}
