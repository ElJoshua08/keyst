import { User } from "@/entitites/user.entity";

export interface UserRepository {
  getUserById(id: string): Promise<User | null>;
  getUsers({ limit }: { limit: number }): Promise<User[] | null>;
  createUser(user: User): Promise<User | null>;
  deleteUserById(id: string): Promise<void>;
}
