'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#HOME' },
  { name: 'Plans', href: '#PLANS' },
  { name: 'FAQ', href: '#FAQ' },
  { name: 'Support', href: '#SUPPORT' },
]

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const Logo = () => (
    <a href="#" className="flex items-center space-x-2 -m-1.5 p-1.5">
      <span className="text-[var(--black)] text-xl font-medium">
        <span className="font-bold bg-[var(--primary)] px-3 py-1 rounded-md shadow-sm text-[var(--white)]">
          Refer
        </span>
        <span className="ml-1 text-[var(--black)]">
          Mobile
        </span>
      </span>
    </a>
  )

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--dark-grey)]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-[var(--foreground)]"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--white)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[var(--foreground)]/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[var(--dark-grey)]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[var(--grey)]/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--foreground)] hover:bg-[var(--lightest-grey)]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
