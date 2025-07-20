import Button from '@/components/ui/Button'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    // <div
    //   className="relative mx-auto w-200 h-[400px] bg-cover bg-center flex items-center justify-center rounded-[40px]"
    //   style={{ backgroundImage: "url('./images/hero_bg.jpg')" }}
    // >
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold mb-4">Your Main Title Here</h1>
    //     <p className="text-lg mb-6">This is the subtext or subtitle.</p>
    //     <Button>Learn more</Button>
    //   </div>
    // </div>
    <>
    <div className='_container'>
    <div className='bg-red-800 h-[400px]'>
        <p>test</p>
    </div>
    </div>
    <div className='bg-blue-800 h-[400px]'>
        <p>test</p>
    </div>
    </>
  )
}

export default Hero