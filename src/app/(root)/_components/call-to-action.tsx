import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <Link href="/login" className={cn(buttonVariants({
      size: "lg",
    }), "mt-24")}>
      Start now
    </Link>
  );
};