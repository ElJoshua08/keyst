import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headerFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-header",
})

const bodyFont = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Keyst",
  description: "Keyst is your go-to place for all your keyboard related needs."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headerFont.variable} ${bodyFont.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
