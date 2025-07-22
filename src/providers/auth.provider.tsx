// app/_providers/auth.provider.tsx

"use client";

import "@/di/container";
import { AuthenticationError } from "@/entities/errors/auth.error";
import { AuthUser } from "@/entities/models/auth-user.entity";
import { getUserController } from "@/interface-adapters/controllers/get-user.controller";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  user: {
    email: string;
    user_metadata: object;
  } | null;
  error: Error | null;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{
    email: string;
    user_metadata: object;
  } | null>(null);
  const [error, setError] = useState<AuthenticationError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let _ignore = false;

    async function getUser() {
      const user = await getUserController();

      setUser(user);
      setIsLoading(false);
    }

    getUser();

    return () => {
      _ignore = true;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
