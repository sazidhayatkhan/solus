import Button from "@/components/ui/Button";
import React from "react";
import Card from "./components/ui/Card/Card";
import HeroSection from "@/components/layout/Hero";

type Props = {};

const SectionOne = (props: Props) => {
  const data = [
    {
      title: "Instant Consultation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgUrl: "/images/doc3.png",
      linkUrl: "/",
    },
    {
      title: "Find Doctors Near You",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgUrl: "/images/doc1.png",
      linkUrl: "/",
    },
    {
      title: "24/7 Medicines",
      desc: "Essentials at your own doorstep",
      bgUrl: "/images/doc2.png",
      linkUrl: "/",
    },
    {
      title: "Accurate Lab Tests",
      desc: "Free pickup from your home on any day",
      bgUrl: "/images/doc4.png",
      linkUrl: "/",
    },
  ];
  return (
    <div className="">
      <div className="">
        <HeroSection
          backgroundImageUrl="/images/therapists.png"
        >
          <div className="absolute bottom-4 left-0 right-0 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="paragraph-base max-w-[90%] md:max-w-[30%] text-center md:text-start mb-4 md:mb-0 bg-secondary/50">
              Lorem ipsum dolor, sit amet consectetur adipisicing. amet
              consectetur adipisicing. Lorem ipsum dolor, sit amet
            </p>
            <Button>Book Now</Button>
          </div>
        </HeroSection>
      </div>
      <div className="px-4 md:px-0">
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data?.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
