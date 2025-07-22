import { type Provider } from "@supabase/supabase-js";
import { injectable } from "inversify";

import { IAuthService } from "@/application/services/auth-service.interface";

import { EmailOtpType } from "@/core/types/email-otp.types";
import {
  AuthenticationError,
  UnauthenticatedError,
} from "@/entities/errors/auth.error";
import { AuthUser } from "@/entities/models/auth-user.entity";
import { createClient } from "@/infra/utils/supabase/server";

@injectable()
export class AuthService implements IAuthService {
  private _providers: Provider[] = ["google"];

  constructor() {}

  async getCurrentUser() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      throw new UnauthenticatedError(error.message, {
        cause: error.cause,
      });
    }

    return {
      id: data.user.id,
      email: data.user.email,
      user_metadata: data.user.user_metadata,
    } as AuthUser;
  }

  async login(email: string, password: string) {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new AuthenticationError(error.message, {
        cause: error.cause,
      });
    }
  }

  async signup(email: string, password: string) {
    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/account`,
      },
    });

    if (error) {
      throw new AuthenticationError(error.message, {
        cause: error.cause,
      });
    }
  }

  async verifyOtp(tokenHash: string, type: EmailOtpType) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type: type,
      token_hash: tokenHash,
    });

    if (error) {
      throw new AuthenticationError(error.message, {
        cause: error.cause,
      });
    }
  }

  async logout() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new AuthenticationError(error.message, {
        cause: error.cause,
      });
    }
  }
}
