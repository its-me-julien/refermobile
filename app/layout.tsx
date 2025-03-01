import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Mobile Referral Code",
  description: "Claim your World Mobile referral code today and get an exclusive discount on your first month of wireless service. Start saving now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
