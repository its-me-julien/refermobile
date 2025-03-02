import Header from "@/components/header";
import Menu from "@/components/menu";
import Faq from "@/components/faq";
import Plans from "@/components/plans";
import CTA1 from "@/components/cta_section1";
import CTA2 from "@/components/cta_section2";
import Contact from "@/components/contact";
import About from "@/components/about";
import Banner from "@/components/banner";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "World Mobile Referral Code | Refer Mobile",
  description:
    "Join World Mobile's user-owned mobile network with our exclusive referral code. Unlock promotions and significant savings.",
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
    "Join World Mobile's user-owned mobile network with our exclusive referral code. Unlock promotions and significant savings.",
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
    "Join World Mobile's user-owned mobile network with our exclusive referral code. Unlock promotions and significant savings.",
    images: ["https://refermobile.com/social.png"],
  },
  icons: {
    icon: ["/favicon-96x96.png", "/favicon.svg"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};


export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <Plans />
      <CTA1 />
      <About />
      <Faq />
      <Contact />
      <CTA2 />
      <Banner />
    </>
  );
}
