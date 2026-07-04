import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/Logo.svg" alt="Logo" width={150} height={50} />
    </Link>
  )
}

export default Logo