"use client";

import { loginAction } from "@/app/auth/get-started/actions";
import {
  type Login as LoginSchema,
  login,
} from "@/app/auth/get-started/schema";
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
import Link from "next/link";
import { useForm } from "react-hook-form";

export const Login = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(login),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(data: LoginSchema) {
    await loginAction(data);
  }

  return (
    <Card className="min-w-md">
      <CardHeader>
        <CardTitle>Log-In</CardTitle>
        <CardDescription>Log-In into your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-12">
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
                  <FormLabel className="inline-flex w-full justify-between items-center">Password <Link href="/auth/forgot-password" className="no-underline text-muted-foreground hover:underline hover:text-foreground">Forgot Password?</Link></FormLabel>
                  <FormControl>
                    <InputPassword
                      placeholder="Password"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end mt-6">
        <Button
          onClick={form.handleSubmit(handleSubmit)}
          loadOnClick
        >
          Log-In
        </Button>
      </CardFooter>
    </Card>
  );
};
