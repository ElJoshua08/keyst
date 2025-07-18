"use server";

import "@/container";

import { User } from "@/entitites/user.entity";
import { UserUseCase } from "@/useCases/user.use-case";
import { revalidatePath } from "next/cache";
import { container } from "tsyringe";

export async function getUsersAction() {
  // Resolver el use case con las dependencias inyectadas
  const useCase = container.resolve(UserUseCase);
  return await useCase.getUsers({});
}

export async function createUserAction(user: User) {
  // Resolver el use case con las dependencias inyectadas
  const useCase = container.resolve(UserUseCase);
  const createdUser = await useCase.createUser(user);

  revalidatePath("/users");

  return createdUser;
}

export async function deleteUserAction(id: string) {
  // Resolver el use case con las dependencias inyectadas
  const useCase = container.resolve(UserUseCase);
  await useCase.deleteUserById(id);

  revalidatePath("/users");

  return;
}
