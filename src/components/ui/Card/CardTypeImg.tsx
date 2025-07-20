import React from "react";
import Button from "../Button";
import Image from "next/image";
type Props = {};

const CardTypeImg = (props: Props) => {
  return (
    <div className="bg-secondary rounded-3xl p-7 flex justify-between items-center">
      <div className="space-y-5">
        <p className="text-primary leading-8 md:leading-9 text-2xl md:text-3xl font-bold w-[300px]">
          Mindfulness & Meditation
        </p>
        <p className="paragraph-base w-[300px]">
          Guided meditation sessions and stress management techniques.
        </p>
        <Button variant="outline">Learn More</Button>
      </div>
      <div className="relative w-full h-[200px] md:w-[100px] md:h-[100px]">
        <Image
          src="/images/frame_four.png"
          alt="Therapist helping client"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CardTypeImg;
