import React from 'react'
import Hero from './components/Hero'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'

type Props = {}

const HomePageUI = (props: Props) => {
  return (
    <div className='space-y-16 md:space-y-20'>
    <Hero/>
    <SectionTwo/>
    <SectionThree/>
    <Hero/>
    <SectionTwo/>
    </div>
  )
}

export default HomePageUI