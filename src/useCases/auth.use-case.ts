import { AuthUser } from "@/entitites/auth-user.entity";
import { type AuthRepository } from "@/repositories/auth.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthUseCase {
  constructor(
    @inject("AuthRepository")
    private userRepository: AuthRepository
  ) {}

  async login(email: string, password: string): Promise<AuthUser> {
    const user = await this.userRepository.login(email, password);
    if (!user) throw new Error("User not found");
    return user;
  }

  async signup(email: string, password: string): Promise<AuthUser> {
    const user = await this.userRepository.signup(email, password);
    if (!user) throw new Error("User not found");
    return user;
  }

  async getCurrentUser(): Promise<AuthUser> {
    const user = await this.userRepository.getCurrentUser();
    if (!user) throw new Error("User not found");
    return user;
  }

  async logout(): Promise<void> {
    await this.userRepository.logout();
  }
}
