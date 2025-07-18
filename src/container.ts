import "reflect-metadata";

import { UserSupabaseRepository } from "@/infrastructure/supabase/repositories/user.repository";
import { UserRepository } from "@/repositories/user.repository";
import { container } from "tsyringe";

container.register<UserRepository>("UserRepository", {
  useClass: UserSupabaseRepository,
});
