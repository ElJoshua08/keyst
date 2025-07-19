import "@/container";

import { inject, injectable } from "tsyringe";
import { AuthUser } from "@/entitites/auth-user.entity";
import { type AuthRepository } from "@/repositories/auth.repository";

@injectable()
export class AuthUseCase {
  constructor(
    @inject("AuthRepository")
    private authRepository: AuthRepository
  ) {}

  async getCurrentUser(): Promise<AuthUser> {
    const user = await this.authRepository.getCurrentUser();
    if (!user) throw new Error("User not found");
    return user;
  }

  async login(email: string, password: string): Promise<AuthUser> {
    const user = await this.authRepository.login(email, password);
    if (!user) throw new Error("User not found");
    return user;
  }

  async signup(email: string, password: string): Promise<AuthUser> {
    const user = await this.authRepository.signup(email, password);
    if (!user) throw new Error("User not found");
    return user;
  }

  async verifyOtp(
    token_hash: string,
    type: string,
  ): Promise<AuthUser> {
    const success = await this.authRepository.verifyOtp(
      token_hash,
      type
    );

    if (!success) {
      throw new Error("Invalid OTP");
    }

    return success;
  }

  async logout(): Promise<void> {
    await this.authRepository.logout();
  }
}
