import { User } from "@/entitites/user.entity";
import { type UserRepository } from "@/repositories/user.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  async getUsers({ limit = 10 }: { limit?: number }): Promise<User[]> {
    const users = await this.userRepository.getUsers({ limit });

    if (!users) return [];

    return users;
  }

  async createUser(user: User): Promise<User> {
    const createdUser = await this.userRepository.createUser(user);

    if (!createdUser) throw new Error("User not created");

    return createdUser;
  }

  async deleteUserById(id: string): Promise<void> {
    await this.userRepository.deleteUserById(id);
  }
}
