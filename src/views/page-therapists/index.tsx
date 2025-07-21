import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

type Props = {}

const TherapistsUI = (props: Props) => {
  return (
    <div className='space-y-16 md:space-y-20'>
      <SectionOne/>
      <SectionTwo/>
    </div>
  )
}

export default TherapistsUI