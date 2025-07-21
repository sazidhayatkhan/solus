import Button from '@/components/ui/Button'
import React from 'react'

type Props = {}

const SectionOne = (props: Props) => {
  return (
   <div
  className="_container relative w-full h-[250px] md:h-[400px] bg-cover bg-top rounded-0 md:rounded-[40px]"
  style={{ backgroundImage: "url('/images/therapists.png')" }}
>
  <div className="absolute bottom-4 left-0 right-0 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
    <p className="paragraph-base max-w-[90%] md:max-w-[30%] text-center md:text-start mb-4 md:mb-0 bg-secondary/50">
      Lorem ipsum dolor, sit amet consectetur adipisicing. amet consectetur adipisicing. Lorem ipsum dolor, sit amet
    </p>
    <Button>Book Now</Button>
  </div>
</div>

  )
}

export default SectionOne