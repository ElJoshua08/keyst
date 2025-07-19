"use client";

import { Logo } from "@/components/shared/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthUser } from "@/entitites/auth-user.entity";
import { useAuth } from "@/providers/auth.provider";
import Link from "next/link";

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between w-full border-b px-6 py-4">
      <Link
        href="/"
        className="flex items-center gap-1"
      >
        <Logo className=" text-white  size-8" />
        <p className="text-xl font-header">Keyst</p>
      </Link>

      {user ? (
        <AccountAvatar user={user} />
      ) : (
        <Link
          href="/auth/get-started?type=signup"
          className={buttonVariants({})}
        >
          Get Started
        </Link>
      )}
    </header>
  );
};

const AccountAvatar = ({ user }: { user: AuthUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage />
          <AvatarFallback>{user.email.split("")[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
