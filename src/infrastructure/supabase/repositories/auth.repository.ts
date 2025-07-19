import { AuthUser } from "@/entitites/auth-user.entity";
import { createClient } from "@/infrastructure/supabase/server";
import { AuthRepository } from "@/repositories/auth.repository";
import { VerifyOtpParams } from "@supabase/supabase-js";
import { injectable } from "tsyringe";

@injectable()
export class AuthSupabaseRepository implements AuthRepository {
  async getCurrentUser(): Promise<AuthUser | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data) return null;

    return this.mapToAuthUser(data.user);
  }

  async login(email: string, password: string): Promise<AuthUser | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data) return null;

    return this.mapToAuthUser(data.user);
  }

  async signup(email: string, password: string): Promise<AuthUser | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/account`,
      },
    });

    if (error || !data) return null;

    return this.mapToAuthUser(data.user);
  }

  async verifyOtp(token_hash: string, type: string): Promise<AuthUser | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.verifyOtp({
      type: type,
      token_hash: token_hash,
    } as VerifyOtpParams);

    console.error("Error detected at verifyOtp", error);

    if (error || !data) return null;

    return this.mapToAuthUser(data.user);
  }

  async logout(): Promise<void> {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) throw new Error("Logout failed");
  }

  private mapToAuthUser(user: any): AuthUser {
    return {
      id: user.id,
      email: user.email,
      created_at: user.created_at,
    };
  }
}
