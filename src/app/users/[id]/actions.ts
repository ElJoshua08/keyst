"use server";

import { UserUseCase } from "@/useCases/user.use-case";
import { container } from "tsyringe";

export async function getUserByIdAction(id: string) {
  // Resolver el use case con las dependencias inyectadas
  const useCase = container.resolve(UserUseCase);
  return await useCase.getUserById(id);
}
