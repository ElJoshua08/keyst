import { AuthUser } from "@/entitites/auth-user.entity";

export interface AuthRepository {
  login(email: string, password: string): Promise<AuthUser | null>;
  signup(email: string, password: string): Promise<AuthUser | null>;

  getCurrentUser(): Promise<AuthUser | null>;
  logout(): Promise<void>;
}
