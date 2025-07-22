import { CurrentUserDTO } from "@/core/dto/current-user.dto";
import { AuthUser } from "@/entitites/auth-user.entity";

export const AuthUserDTO = (user: AuthUser): CurrentUserDTO => ({
  id: user.id,
  email: user.email,
  name: user.name ?? null,
});
