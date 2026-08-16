import Image from 'next/image'
import { DynamicTitle } from '@/components/Helper/DynamicTitle'
import React from 'react'

const clientLogos = [
  { src: '/images/Logo1.svg', alt: 'Client logo 1' },
  { src: '/images/Logo (2).svg', alt: 'Client logo 2' },
  { src: '/images/Logo (3).svg', alt: 'Client logo 3' },
  { src: '/images/Logo (4).svg', alt: 'Client logo 4' },
  { src: '/images/Logo (5).svg', alt: 'Client logo 5' },
  { src: '/images/Logo.svg', alt: 'Client logo 6' },
]

const Clients = () => {
  return (
    <section className="bg-[#F5F7FA] py-12 lg:py-20">
      <div className="w-[90%] lg:w-[85%] mx-auto">
        <DynamicTitle
          heading="Our Clients"
          subheading="We have been working with some Fortune 500+ clients"
        />

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.src}
                className="flex h-24 items-center justify-center rounded-2xl border border-gray-100 bg-[#F9FAFB] transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-md"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients