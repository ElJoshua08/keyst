import "reflect-metadata";
import { container } from "tsyringe";

import { AuthSupabaseRepository } from "@/infrastructure/supabase/repositories/auth.repository";
import { UserSupabaseRepository } from "@/infrastructure/supabase/repositories/user.repository";
import { AuthRepository } from "@/repositories/auth.repository";
import { UserRepository } from "@/repositories/user.repository";

container.register<UserRepository>("UserRepository", {
  useClass: UserSupabaseRepository,
});

container.register<AuthRepository>("AuthRepository", {
  useClass: AuthSupabaseRepository,
});
