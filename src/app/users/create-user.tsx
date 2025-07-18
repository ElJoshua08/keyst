"use client";

import { createUserAction } from "@/app/users/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/entitites/user.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createUser = z.object({
  name: z.string().min(3),
  email: z.email(),
});

export const CreateUser = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof createUser>>({
    resolver: zodResolver(createUser),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function hanldeSubmit(data: z.infer<typeof createUser>) {
    await createUserAction(data as User);
    setOpen(false);
    form.reset({
      name: "",
      email: "",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>Create a new user</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Name" {...field} />
                  <FormDescription>New user name.</FormDescription>
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" {...field} />
                  <FormDescription>New user email.</FormDescription>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() =>
                form.reset({
                  name: "",
                  email: "",
                })
              }
              variant="outline"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={form.handleSubmit(hanldeSubmit)} loadOnClick>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
