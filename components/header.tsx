'use client'

import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
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

export default function Header() {
  const [referralCode] = useState("NOTLIVEYET")
  const [showAlert, setShowAlert] = useState(false)

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  return (
    <>
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-2 px-6 py-3 rounded-md shadow-lg bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary-dark)] text-[var(--white)] transition duration-500 ease-out">
          <CheckCircleIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Referral code copied!</span>
        </div>
      )}
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--primary-light)] to-[var(--primary-dark)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div id="HOME" className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
              Use our World Mobile referral code
            </h1>
            <h2 className="mt-4 text-2xl text-[var(--foreground)]">
              To unlock the best rewards
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--mid-grey)]">
            Activate our exclusive World Mobile referral code to unlock savings. Join the revolution that puts your phone, data, and security first. Join the user-owned network that is rewriting telecom rules.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-y-4">
              <div className="text-xl font-mono bg-[var(--lightest-grey)] px-4 py-2 rounded-md">
                {referralCode}
              </div>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={copyReferralCode}
                className="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-[var(--white)] shadow-sm hover:bg-[var(--primary-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Copy Referral Code
              </button>
              <a href="https://wmtx.cc/mobile" className="text-sm font-semibold leading-6 text-[var(--foreground)]">
                Use Referral Link <span aria-hidden="true">→</span>
              </a>
            </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--primary-light)] to-[var(--primary-dark)] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  )
}
