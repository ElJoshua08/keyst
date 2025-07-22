"use client";

import { Logo } from "@/components/shared/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { CircleUserRoundIcon } from "lucide-react";
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

const AccountAvatar = ({
  user,
}: {
  user: {
    email: string;
    user_metadata: object;
  };
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-10 cursor-pointer">
          <AvatarImage />
          <AvatarFallback className="font-header uppercase">
            {user.email.split("")[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
      >
        <DropdownMenuLabel className="text-sm">Account</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link
            href="/account"
            className="inline-flex items-center justify-start gap-x-2 w-full h-full text-base"
          >
            <CircleUserRoundIcon /> Go to Account
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
