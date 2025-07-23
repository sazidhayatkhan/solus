
import Button from '@/components/ui/Button'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div
      className="_container relative w-full min-h-[300px] md:h-[490px] bg-cover bg-center flex items-center justify-center mx-auto rounded-0 md:rounded-[40px]"
      style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
    >
      <div className="text-center px-4">
        <h1 className="font-brico max-w-[95%] md:max-w-[600px] mx-auto text-3xl md:text-6xl leading-tight font-bold mb-4 text-primary">
          Support for Your Mental Well-being
        </h1>
        <p className="max-w-[74%] md:max-w-[360px] mx-auto paragraph-base mb-6">
          Connect with licensed therapists, counselors, and wellness coaches to support your journey.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Hero