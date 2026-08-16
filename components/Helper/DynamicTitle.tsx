import React from 'react'

type Props = {
  heading: string
  subheading: string
}

export const DynamicTitle = ({ heading, subheading }: Props) => {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold text-[#4D4D4D]'>{heading}</h1>
      <p className='text-lg text-gray-600 mt-2'>{subheading}</p>
    </div>
  )
}
