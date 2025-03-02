import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Refer Mobile",
  description:
    "Read the Terms of Service for Refer Mobile. Understand the rules and conditions for using our referral services.",
  metadataBase: new URL("https://refermobile.com/"),
  alternates: {
    canonical: "https://refermobile.com/terms/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Refer Mobile",
    description:
      "Read the Terms of Service for Refer Mobile. Understand the rules and conditions for using our referral services.",
    url: "https://refermobile.com/terms/",
    type: "website",
    images: [
      {
        url: "https://refermobile.com/social.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Refer Mobile",
    description:
      "Read the Terms of Service for Refer Mobile. Understand the rules and conditions for using our referral services.",
    images: ["https://refermobile.com/social.png"],
  },
  icons: {
    icon: ["/favicon-96x96.png", "/favicon.svg"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-black">Terms of Service</h1>
      <p className="mt-4 text-[var(--mid-grey)]">Effective Date: 25 February 2025</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          Welcome to Refer Mobile. We connect you with World Mobile’s network by sharing our exclusive referral codes.
          Refer Mobile is an independent referral platform and is not affiliated with, sponsored by, or endorsed by World Mobile.
          By accessing our site, you agree to these Terms of Service.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">2. User Responsibilities</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          You agree to use our services legally and responsibly and comply with all applicable laws.
          Any misuse of our platform may result in suspension or termination of access.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">3. Intellectual Property</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          All content on Refer Mobile is owned by Refer Mobile and its content partners.
          Any trademarks, logos, or brand names referenced on this site are the property of their respective owners.
          You may not reproduce or distribute any materials without written consent.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">4. Limitation of Liability</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          Refer Mobile provides informational content and referral services but does not guarantee the availability, pricing, or performance of any third-party services, including those offered by World Mobile.
          Refer Mobile is not liable for any damages arising from your use of our website.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">5. Modifications to Terms</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          We reserve the right to modify these Terms of Service at any time.
          Changes will be posted on this page with an updated effective date.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">6. Governing Law</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          These Terms of Service are governed by the laws of the British Virgin Islands.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">7. Contact Us</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          If you have any questions, contact us at{" "}
          <a href="mailto:hello@refermobile.com" className="hover:underline">
            hello@refermobile.com
          </a>.
        </p>
      </section>
    </main>
  );
}
