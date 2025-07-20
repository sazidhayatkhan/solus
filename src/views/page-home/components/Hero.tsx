import Button from '@/components/ui/Button'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div
      className="relative mx-auto w-full md:w-200 h-[400px] bg-cover bg-center flex items-center justify-center rounded-[40px]"
      style={{ backgroundImage: "url('./images/hero_bg.jpg')" }}
    >
      <div className="text-center">
        <h1 className="w-[500px] mx-auto text-[45px] leading-tight font-bold mb-4 text-primary">Support for Your Mental Well-being</h1>
        <p className="w-[320px] mx-auto text-sm mb-6 text-primary">Connect with licensed therapists, counselors, and wellness coaches to support your journey.</p>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Hero