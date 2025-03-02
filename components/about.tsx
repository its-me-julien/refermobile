import Image from 'next/image'

export default function Example() {
  return (
    <div className="relative bg-[var(--white)]">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Image Section */}
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              alt="World Mobile network"
              src="/photo.avif"
              layout="fill"
              objectFit="cover"
              className=" bg-[var(--white)]"
              priority
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-[var(--primary)]">
              What is World Mobile?
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              The Future of Mobile Connectivity
            </h1>
            <div className="mt-10 text-base leading-7 text-[var(--mid-grey)]">
              <p>
                World Mobile is a new mobile network built on user‑owned infrastructure and supported by trusted partner networks, delivering coverage in the USA that outperforms Big Wireless.
              </p>
              <p className="mt-6">
                It offers fast, secure mobile services with reliable talk, text, and data that never let you down.
              </p>
              <p className="mt-6">
                Unlike Big Wireless, World Mobile is completely transparent—what you see is what you get.
              </p>
              <p className="mt-6">
                Finally, a mobile network that puts you first.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://wmtx.cc/mobile"
                className="rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-[var(--white)] shadow-sm hover:bg-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Join World Mobile
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Removed Gradient Overlay */}
    </div>
  )
}
