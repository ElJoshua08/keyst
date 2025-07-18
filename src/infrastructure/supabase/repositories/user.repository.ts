import { User } from "@/entitites/user.entity";
import { createServiceRoleSupabaseClient } from "@/infrastructure/supabase/server";
import { UserRepository } from "@/repositories/user.repository";
// Removed import of Next.js Error component to use built-in Error class
import { injectable } from "tsyringe";

@injectable()
export class UserSupabaseRepository implements UserRepository {
  async getUserById(id: string): Promise<User | null> {
    const supabase = await createServiceRoleSupabaseClient();

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
    };
  }

  async getUsers({ limit }: { limit: number }): Promise<User[] | null> {
    const supabase = await createServiceRoleSupabaseClient();

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .limit(limit)
      .order("created_at", { ascending: false });

    if (error || !data) return null;

    return data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }

  async createUser(user: User): Promise<User | null> {
    const supabase = await createServiceRoleSupabaseClient();

    const { data, error } = await supabase
      .from("users")
      .insert(user)
      .select("*")
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
    };
  }

  async deleteUserById(id: string): Promise<void> {
    const supabase = await createServiceRoleSupabaseClient();

    const { error } = await supabase.from("users").delete().eq("id", id);

    if (error) throw new Error("User not deleted");
  }
}
