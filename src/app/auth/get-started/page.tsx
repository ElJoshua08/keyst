import { Login } from "@/app/auth/get-started/login";
import { SignUp } from "@/app/auth/get-started/signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GetStartedPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Tabs defaultValue="login">
        <TabsList>
          <TabsTrigger value="login">Log-In</TabsTrigger>
          <TabsTrigger value="signup">Sign-Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
