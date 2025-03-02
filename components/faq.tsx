import React from 'react'

const faqs = [
  {
    id: 1,
    question: "How does World Mobile work?",
    answer:
      "World Mobile operates by combining a user‑owned network of AirNodes with select partner networks, delivering fast, secure mobile services with full talk, text, data, and emergency access across the USA.",
  },
  {
    id: 2,
    question: "What are the benefits of joining World Mobile?",
    answer:
      "With World Mobile, you enjoy transparent pricing, reliable connectivity, and rewards for your active participation. Experience top‑notch privacy with built‑in encryption and a network that truly puts you first.",
  },
  {
    id: 3,
    question: "How do I get started with World Mobile?",
    answer: (
      <>
        Getting started is simple. Subscribe using{" "}
        <a
          href="https://wmtx.cc/mobile"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-600"
        >
          our exclusive referral code
        </a>{" "}
        and enjoy a modern mobile network built with you in mind.
      </>
    ),
  },
  {
    id: 4,
    question: "Does World Mobile support international roaming?",
    answer:
      "Yes. World Mobile covers over 60 countries and is continuously expanding its global reach, so you can stay connected wherever you go.",
  },
  {
    id: 5,
    question: "Are there cancellation fees?",
    answer: "No, there are no cancellation fees.",
  },
  {
    id: 6,
    question: "Does World Mobile offer a family plan?",
    answer: "Yes. You can add extra lines at a reduced price during checkout.",
  },
  {
    id: 7,
    question: "Does World Mobile throttle after high‑speed priority data is used?",
    answer:
      "No. While there is some deprioritization after your high‑speed data is used, your service remains active without harsh throttling.",
  },
  {
    id: 8,
    question: "How do World Mobile unlimited plans work?",
    answer:
      "World Mobile unlimited plans are prepaid monthly and include unlimited data, hotspot data, and talk/text. Users enjoy consistent 4G LTE speeds with typical download speeds of 110–170 Mbps, upload speeds of 10–30 Mbps, and latency between 120–180 ms.",
  },
  {
    id: 9,
    question: "Who owns World Mobile?",
    answer: (
      <>
        World Mobile Group operates the network. The AirNodes infrastructure is user‑owned, and data is encrypted on the World Mobile Chain with transactions validated by user‑owned Earth Nodes.{" "}
        <a
          href="https://worldmobile.info/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-600"
        >
          Read more
        </a>.
      </>
    ),
  },
  {
    id: 10,
    question: "Should you sign up for World Mobile Wireless?",
    answer:
      "Yes—if you value speed, extensive USA coverage, superior privacy, and extra security features like SwapStop, World Mobile is the smart choice.",
  },
]

export default function Example() {
  return (
    <div id="FAQ" className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
