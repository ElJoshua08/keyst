import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-fit w-full border-b py-4 px-6 flex items-center justify-between ">
      <Link href="/" className="inline-flex items-center justify-center gap-2">
        <Logo className="size-8 text-foreground" />
        <h1 className="text-2xl font-bold font-header">Keyst</h1>
      </Link>

      <Link href="/login" className={buttonVariants()}>
        Start now
      </Link>
    </nav>
  );
};
