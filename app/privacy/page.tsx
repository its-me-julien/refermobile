import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Refer Mobile",
  description:
    "Read the Privacy Policy for Refer Mobile. Learn how we collect, use, and protect your data.",
  metadataBase: new URL("https://refermobile.com/"),
  alternates: {
    canonical: "https://refermobile.com/privacy/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Refer Mobile",
    description:
      "Read the Privacy Policy for Refer Mobile. Learn how we collect, use, and protect your data.",
    url: "https://refermobile.com/privacy/",
    type: "website",
    images: [
      {
        url: "https://refermobile.com/social.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Refer Mobile",
    description:
      "Read the Privacy Policy for Refer Mobile. Learn how we collect, use, and protect your data.",
    images: ["https://refermobile.com/social.png"],
  },
  icons: {
    icon: ["/favicon-96x96.png", "/favicon.svg"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
      <p className="mt-4 text-[var(--mid-grey)]">Effective Date: 25 February 2025</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          Welcome to Refer Mobile. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect data on our website and services.
          Refer Mobile is an independent referral platform and is not affiliated with, sponsored by, or endorsed by World Mobile.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">2. Information We Collect</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          We collect anonymized usage data automatically, including IP addresses, browser type, and usage metrics.
          We do not collect personally identifiable information such as names, emails, or phone numbers.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">3. Tracking Technologies</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          We use cookies and tracking tools like Google Analytics (GA4) and Cloudflare Analytics to gather anonymized usage data.
          You can manage or disable cookies in your browser settings.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">4. How We Use Your Data</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          Collected data is used only for service improvement, analytics, and marketing insights. No personally identifiable data is stored.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">5. Data Sharing</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          We do not sell, rent, or share any data with third parties. All collected data is retained for internal use only.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">6. User Rights</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          Since we only collect anonymized data, there is no personally identifiable information to request or delete.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">7. Data Security</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          We use Cloudflare and Google Analytics (GA4) for security and data protection. No personally identifiable data is stored.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">8. Changes to This Privacy Policy</h2>
        <p className="mt-2 text-[var(--mid-grey)]">
          We may update this Privacy Policy from time to time. Changes will be posted with an updated effective date.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-black">9. Contact Us</h2>
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
