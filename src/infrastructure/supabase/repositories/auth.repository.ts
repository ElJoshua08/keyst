import { AuthUser } from "@/entitites/auth-user.entity";
import { createClient } from "@/infrastructure/supabase/server";
import { AuthRepository } from "@/repositories/auth.repository";
import { injectable } from "tsyringe";

@injectable()
export class AuthSupabaseRepository implements AuthRepository {
  async login(email: string, password: string): Promise<AuthUser | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data) return null;

    return this.mapToAuthUser(data.user);
  }

  private mapToAuthUser(user: any): AuthUser {
    return {
      id: user.id,
      email: user.email,
      created_at: user.created_at,
    };
  }

  async signup(email: string, password: string): Promise<AuthUser | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data) return null;

    return this.mapToAuthUser(data.user);
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data) return null;

    return this.mapToAuthUser(data.user);
  }

  async logout(): Promise<void> {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) throw new Error("Logout failed");
  }
}
