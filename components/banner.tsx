"use client"

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-[var(--primary-dark)] px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-sm leading-6 text-[var(--white)]">
            <a href="#">
              <strong className="font-semibold">ReferMobile</strong>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              The referral program hasn&apos;t been launched yet. Stay tuned.&nbsp;
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
          <button
            type="button"
            className="-m-1.5 flex-none p-1.5"
            onClick={() => setVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" className="h-5 w-5 text-[var(--white)]" />
          </button>
        </div>
      </div>
    </>
  )
}
