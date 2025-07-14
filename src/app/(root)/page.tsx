import { CallToAction } from "@/app/(root)/_components/call-to-action";
import { HeaderLine } from "@/app/(root)/_components/header-line";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="flex flex-col items-center justify-center gap-y-6 py-12 px-16 text-center h-dvh w-full"
      >
        <h1 className="text-3xl font-medium ">
          Welcome to <span className="font-header text-primary">Keyst</span>
        </h1>

        <HeaderLine />
 
        <CallToAction />
      </section>
    </div>
  );
}
