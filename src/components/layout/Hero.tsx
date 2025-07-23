'use client'
import React from "react";

type HeroSectionProps = {
  children: React.ReactNode;
  backgroundImageUrl: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  backgroundImageUrl,
}) => {

  return (
    <div
      className="_container relative w-full min-h-[300px] md:h-[490px] bg-contain md:bg-cover bg-no-repeat bg-secondary bg-top flex items-center justify-center mx-auto rounded-0 md:rounded-[40px]"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
    {children}
    </div>
  );
};

export default HeroSection;
