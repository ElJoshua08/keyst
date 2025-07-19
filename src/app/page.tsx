import { Navbar } from "@/app/navbar";

export default async function Page() {

  return (
    <main className="flex flex-col items-start justify-start w-full h-dvh">
      <Navbar />

      <h1>Welcome to <span>Keyst</span></h1>
    </main>
  );
}
