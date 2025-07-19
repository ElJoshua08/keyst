"use client";

import { signupAction } from "@/app/auth/get-started/actions";
import { signup, Signup } from "@/app/auth/get-started/schema";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
import { CheckCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const form = useForm<Signup>({
    resolver: zodResolver(signup),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleSubmit(data: Signup) {
    await signupAction(data);
  }

  return (
    <>
      <Card className="min-w-md">
        <CardHeader>
          <CardTitle>Sign-Up</CardTitle>
          <CardDescription>
            Create a new account to continue into keyst
          </CardDescription>
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

              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <InputPassword
                        placeholder="Confirm Password"
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
        <CardFooter className="flex justify-end mt-6">
          <Button
            onClick={form.handleSubmit(handleSubmit)}
            loadOnClick
          >
            Sign-Up
          </Button>
        </CardFooter>
      </Card>

      <VerifyEmail open={form.formState.isSubmitSuccessful} />
    </>
  );
};

const VerifyEmail = ({ open }: { open: boolean }) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogOverlay className="bg-black/25 backdrop-blur-lg" />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Thanks for signing up into Keyst!</AlertDialogTitle>
          <AlertDialogDescription>
            Please check your email to verify your account before continuing.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex justify-center items-center py-6">
          <CheckCircleIcon className="bg-green-500 text-white p-3 size-16 rounded-full" />
        </div>

        <AlertDialogFooter>
          <Button
            onClick={() => {
              throw new Error("Not Implemented");
            }}
          >
            Resend Email
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
