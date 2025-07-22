import { EmailOtpType } from "@/core/types/email-otp.types";
import { AuthUser } from "@/entities/models/auth-user.entity";

export interface IAuthService {
  getCurrentUser(): Promise<AuthUser | null>;
  login(email: string, password: string): Promise<void>;
  signup(email: string, password: string): Promise<void>;
  verifyOtp(tokenHash: string, type: EmailOtpType): Promise<void>;
  logout(): Promise<void>;
}
