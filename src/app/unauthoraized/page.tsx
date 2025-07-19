import { buttonVariants } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Sorry, you are not authorized to access this page.
          </CardTitle>
        </CardHeader>

        <CardFooter>
          <Link
            href="/"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Return to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
