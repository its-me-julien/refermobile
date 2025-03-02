import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | ReferMobile</title>
        <meta
          name="description"
          content="Read the Terms of Service for ReferMobile. Understand the rules and conditions for using our referral services."
        />
        <link rel="canonical" href="https://refermobile.com/terms/" />

        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />

        {/* Favicon & App Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Terms of Service | ReferMobile" />
        <meta
          property="og:description"
          content="Read the Terms of Service for ReferMobile. Understand the rules and conditions for using our referral services."
        />
        <meta property="og:url" content="https://refermobile.com/terms/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://refermobile.com/social.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | ReferMobile" />
        <meta
          name="twitter:description"
          content="Read the Terms of Service for ReferMobile. Understand the rules and conditions for using our referral services."
        />
        <meta name="twitter:image" content="https://refermobile.com/social.png" />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ReferMobile",
              "url": "https://refermobile.com/",
              "logo": "https://refermobile.com/web-app-manifest-512x512.png",
              "description":
                "Read the Terms of Service for ReferMobile. Understand the rules and conditions for using our referral services.",
            }),
          }}
        />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-black">Terms of Service</h1>
        <p className="mt-4 text-[var(--mid-grey)]">Effective Date: 25 February 2025</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
          <p className="mt-2 text-[var(--mid-grey)]">
            Welcome to ReferMobile. We connect you with World Mobile’s network by sharing our exclusive referral codes.
            ReferMobile is an independent referral platform and is not affiliated with, sponsored by, or endorsed by World Mobile.
            We earn a commission on successful referrals. By accessing our site, you agree to these Terms of Service.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">2. User Responsibilities</h2>
          <p className="mt-2 text-[var(--mid-grey)]">
            You agree to use our services legally and responsibly, and to comply with all applicable local laws.
            Any misuse of our platform may result in account suspension or termination.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">3. Intellectual Property</h2>
          <p className="mt-2 text-[var(--mid-grey)]">
            All content on ReferMobile is owned by ReferMobile and its content partners.
            Any trademarks, logos, or brand names referenced on this site are the property of their respective owners.
            ReferMobile does not claim ownership of the World Mobile trademark or logo.
            You may not reproduce or distribute any materials without our prior written consent.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">4. Limitation of Liability</h2>
          <p className="mt-2 text-[var(--mid-grey)]">
            ReferMobile provides informational content and referral services but does not guarantee the availability, pricing, or performance of any third-party services, including those offered by World Mobile.
            ReferMobile is not liable for any indirect, incidental, or consequential damages arising from your use of our website.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">5. Modifications to the Service and Terms</h2>
          <p className="mt-2 text-[var(--mid-grey)]">
            We reserve the right to modify or discontinue our services and these Terms of Service at any time.
            Any changes will be posted on this page with an updated effective date.
            Please check back regularly for updates.
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
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:hello@refermobile.com" className="hover:underline">
              hello@refermobile.com
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
