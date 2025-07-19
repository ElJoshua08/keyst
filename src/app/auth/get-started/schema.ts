import { z } from "zod";

export const login = z.object({
  email: z.email("Email must be a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /\d/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[^\w\s]/.test(val), {
      message: "Password must contain at least one special character",
    }),
});

export type Login = z.infer<typeof login>;

export const signup = z
  .object({
    email: z.email("Email must be a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((val) => /\d/.test(val), {
        message: "Password must contain at least one number",
      })
      .refine((val) => /[^\w\s]/.test(val), {
        message: "Password must contain at least one special character",
      }),

    confirmPassword: z.string(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type Signup = z.infer<typeof signup>;
