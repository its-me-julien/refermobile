'use client'

import { useEffect } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const plans = [
  {
    id: "essential-usa",
    name: "Essential USA",
    carrier: "By World Mobile",
    description: "",
    price: "$59.00",
    priceValue: 59.0,
    features: [
      "Unlimited calls, texts, and data with 10GB high‑speed priority access.",
      "Nationwide coverage (99%)",
      "Built-in SIM security insurance",
      "Extra Plan Perks*",
      "Your personal data, secured with encryption.",
      "No contracts. No data selling. No tracking.",
    ],
    buttonText: "Refer me",
    image: "https://wm.deals/plans/essential.jpg",
  },
  {
    id: "advanced-usa",
    name: "Advanced USA",
    carrier: "By World Mobile",
    description: "For Power Users",
    price: "$85.00",
    priceValue: 85.0,
    features: [
      "Unlimited calls, texts, and data with 30GB high‑speed priority access.",
      "Nationwide coverage (99%)",
      "Built-in SIM security insurance",
      "Extra Plan Perks*",
      "Your personal data, secured with encryption.",
      "No contracts. No data selling. No tracking.",
    ],
    buttonText: "Refer me",
    image: "https://wm.deals/plans/advanced.jpg",
  },
  {
    id: "global-access",
    name: "Global Access",
    carrier: "By World Mobile",
    description: "For Travelers",
    price: "$70.00",
    priceValue: 70.0,
    features: [
      "20GB of high‑speed data.",
      "Coverage in over 60 countries",
      "Built-in SIM security insurance",
      "Extra Plan Perks*",
      "Your personal data, secured with encryption.",
      "No contracts. No data selling. No tracking.",
    ],
    buttonText: "Refer me",
    image: "https://wm.deals/plans/global.jpg",
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Plans() {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "World Mobile Plans",
      "itemListElement": plans.map((plan, index) => ({
        "@type": "Product",
        "name": plan.name,
        "description": plan.description,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": plan.priceValue,
          "availability": "https://schema.org/InStock",
          "url": "https://wmtx.cc/mobile"
        },
        "category": "Mobile Phone Plans",
        "position": index + 1
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="PLANS" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[var(--primary)]">
            Exclusive World Mobile Referral Code
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            World Mobile Phone &amp; Data Plans
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--mid-grey)]">
            Unlock exclusive savings on your ideal mobile plan.
          </p>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="ring-1 ring-[var(--light-grey)] rounded-3xl p-8 xl:p-10 flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-[var(--foreground)]">
                    {plan.name}
                  </h3>
                  {plan.description && (
                    <span className="rounded-full bg-[var(--primary-light)] px-2 py-1 text-xs font-semibold text-[var(--white)]">
                      {plan.description}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-[var(--mid-grey)]">
                  {plan.carrier}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
                    {plan.price}
                  </span>
                </p>
                <a
                  href="https://wmtx.cc/mobile"
                  className={classNames(
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6',
                    'bg-[var(--primary)] text-[var(--white)] shadow-sm hover:bg-[var(--primary-light)]'
                  )}
                >
                  {plan.buttonText}
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-[var(--mid-grey)]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[var(--primary)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
