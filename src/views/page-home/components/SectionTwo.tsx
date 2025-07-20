import React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
type Props = {};

const SectionTwo = (props: Props) => {
  return (
    <div className="_container flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="space-y-6 text-center md:text-start mx-auto md:mx-0">
        <p className="text-sm text-primary font-semibold">HOW IT WORKS</p>

        <h2 className="text-primary leading-9 md:leading-[3.25rem] text-3xl md:text-5xl font-bold w-[350px]">
          We Help You Prioritize Your Mental Health
        </h2>

        <p className="text-regular text-primary w-[350px]">
          Browse therapists, book a session, and start your healing journey with
          trusted professionals.
        </p>

        <div className="flex justify-center md:justify-start mb-10 md:mb-0">
          <Button>Find a Therapist</Button>
        </div>
      </div>

      <div className="relative w-full h-[200px] md:w-[400px] md:h-[400px] rounded-3xl bg-primary">
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

export default SectionTwo;
