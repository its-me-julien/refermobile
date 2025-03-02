'use client'




const navigation = [
  { name: 'Home', href: '#HOME' },
  { name: 'Plans', href: '#PLANS' },
  { name: 'FAQ', href: '#FAQ' },
  { name: 'Support', href: '#SUPPORT' },
]

export default function Menu() {


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
    </header>
  )
}
