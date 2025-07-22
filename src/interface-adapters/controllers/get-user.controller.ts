"use server";

import { getInjection } from "@/di/container";
import { UnauthenticatedError } from "@/entities/errors/auth.error";
import { AuthUser } from "@/entities/models/auth-user.entity";


function presenter(user: AuthUser) {
  return {
    email: user.email,
    user_metadata: user.user_metadata,
  };
}

export async function getUserController(): Promise<{
  email: string;
  user_metadata: object;
}> {
  const authenticationService = getInjection("IAuthService");
  const user = await authenticationService.getCurrentUser();
  if (user) {
    return presenter(user);
  }
  throw new UnauthenticatedError("No valid session");
}
