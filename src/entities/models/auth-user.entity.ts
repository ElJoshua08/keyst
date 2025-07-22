import { z } from "zod";

export const AuthUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  user_metadata: z.object({}),
});

export type AuthUser = z.infer<typeof AuthUserSchema>;
