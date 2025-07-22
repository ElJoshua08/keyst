// modules/auth.module.ts
import { ContainerModule } from "inversify";
import { IAuthService } from "@/application/services/auth-service.interface";
import { AuthService } from "@/infra/services/auth.service";
import { DI_SYMBOLS } from "../types";

export const AuthModule = new ContainerModule((container) => {
  if (process.env.NODE_ENV === "test") {
    // aquí podrías enlazar a un mock para testing
    // container.bind<IAuthService>(DI_SYMBOLS.IAuthService).to(MockAuthService);
  } else {
    container.bind<IAuthService>(DI_SYMBOLS.IAuthService).to(AuthService);
  }
});
