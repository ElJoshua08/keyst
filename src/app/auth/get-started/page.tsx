"use client";

import { Login } from "@/app/auth/get-started/login";
import { SignUp } from "@/app/auth/get-started/signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GetStartedPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center flex-col gap-y-6">
      <Tabs defaultValue="login">
        <TabsList className="min-w-md h-12 p-1 ">
          <TabsTrigger
            value="login"
            className="border-none cursor-pointer"
          >
            Log-In
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="border-none cursor-pointer"
          >
            Sign-Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
      </Tabs>

      <p className="text-xs  text-muted-foreground">
        © 2025 Keyst. All rights reserved.
      </p>
    </div>
  );
}
