export default function AuthErrorPag() {
  const { cause } = new URL(window.location.href).searchParams as unknown as {
    cause: string;
  };

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold">
          {cause === "missing-otp" ? "Missing OTP" : "Invalid OTP"}
        </h1>
        <p className="text-lg">
          {cause === "missing-otp"
            ? "Please check your email for the OTP"
            : "The OTP is invalid"}
        </p>
      </div>
    </div>
  );
}
