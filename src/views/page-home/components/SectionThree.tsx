import CardTypeImg from '@/components/ui/Card/CardTypeImg'
import React from 'react'

type Props = {}

const SectionThree = (props: Props) => {
  return (
    <div className='_container'>
        <div className='space-y-6 w-[240px] md:w-[300px] mx-auto text-center'>
            <p className="heading-tag">SERVICES</p>
            <h2 className="heading-xl">Your Path to Well-being</h2>
            <p className="paragraph-base">Discover expert guidance for a healthier mind and balanced life.</p>
        </div>
        <div className='mt-10'>
            <CardTypeImg/>
        </div>
    </div>
  )
}

export default SectionThree