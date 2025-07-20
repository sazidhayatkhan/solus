import React from 'react'
import Hero from './components/Hero'

type Props = {}

const HomePageUI = (props: Props) => {
  return (
    <div className=''>
    <Hero/>
    <div className='_container flex justify-between items-center bg-amber-200'>
        <p>test</p>
        <p>hello</p>
    </div>
    </div>
  )
}

export default HomePageUI