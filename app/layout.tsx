import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Mobile Referral Code | Refer Mobile",
  description:
    "Refer Mobile connects new customers to World Mobile’s network. Unlock exclusive referral rewards and savings, and experience mobile connectivity that values privacy and transparency.",
  metadataBase: new URL("https://refermobile.com/"),
  alternates: {
    canonical: "https://refermobile.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "World Mobile Referral Code | Refer Mobile",
    description:
      "Refer Mobile connects new customers to World Mobile’s network. Unlock exclusive referral rewards and savings, and experience mobile connectivity that values privacy and transparency.",
    url: "https://refermobile.com/",
    type: "website",
    images: [
      {
        url: "https://refermobile.com/social.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Mobile Referral Code | Refer Mobile",
    description:
      "Refer Mobile connects new customers to World Mobile’s network. Unlock exclusive referral rewards and savings, and experience mobile connectivity that values privacy and transparency.",
    images: ["https://refermobile.com/social.png"],
  },
  icons: {
    icon: ["/favicon-96x96.png", "/favicon.svg"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
