"use client";

import { loginAction } from "@/app/auth/get-started/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputPassword } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const login = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8)
    .refine(
      (val) =>
        /* First validation for an uppercase */ val.toLowerCase() === val,
      {
        error: "Password must contain at least one uppercase letter",
      }
    )
    .refine((val) => /* Second validation for a number */ val.match(/\d/), {
      error: "Password must contain at least one number",
    })
    .refine(
      (val) => /* Third validation for a special character */ val.match(/\W/),
      {
        error: "Password must contain at least one special character",
      }
    ),
});

export const Login = () => {
  const form = useForm<z.infer<typeof login>>({
    resolver: zodResolver(login),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof login>) {
    await loginAction(data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log-In</CardTitle>
        <CardDescription>Log-In into your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <InputPassword
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button onClick={form.handleSubmit(handleSubmit)}>Log-In</Button>
      </CardFooter>
    </Card>
  );
};
