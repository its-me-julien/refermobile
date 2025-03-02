import Head from "next/head";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Faq from "@/components/faq";
import Plans from "@/components/plans";
import CTA1 from "@/components/cta_section1";
import CTA2 from "@/components/cta_section2";
import Contact from "@/components/contact";
import About from "@/components/about";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://refermobile.com/" />.

        {/* Favicon & App Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="World Mobile Referral Code | Refer Mobile" />
        <meta
          property="og:description"
          content="Refer Mobile connects new customers to World Mobile’s network. Unlock exclusive referral rewards and savings, and experience mobile connectivity that values privacy and transparency."
        />
        <meta property="og:url" content="https://refermobile.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://refermobile.com/social.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Mobile Referral Code | Refer Mobile" />
        <meta
          name="twitter:description"
          content="Refer Mobile connects new customers to World Mobile’s network. Unlock exclusive referral rewards and savings, and experience mobile connectivity that values privacy and transparency."
        />
        <meta name="twitter:image" content="https://refermobile.com/social.png" />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Refer Mobile",
              "url": "https://refermobile.com/",
              "logo": "https://refermobile.com/web-app-manifest-512x512.png",
              "description":
                "Refer Mobile connects new customers to World Mobile’s network. Unlock exclusive referral rewards and savings, and experience mobile connectivity that values privacy and transparency.",
            }),
          }}
        />
      
      </Head>
      
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
