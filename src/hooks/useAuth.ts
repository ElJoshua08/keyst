import { AuthContext } from "@/providers/auth.provider";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
