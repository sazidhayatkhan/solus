import Button from "@/components/ui/Button";
import React from "react";
import Card from "./components/ui/Card/Card";

type Props = {};

const SectionOne = (props: Props) => {
  return (
    <div className="px-4 md:px-0 _container">
      <div className="mt-4 md:mt-0">
        <div
          className="w-full h-[24vh] md:h-[400px] bg-cover bg-top bg-no-repeat rounded-3xl md:rounded-[40px] relative"
          style={{ backgroundImage: "url('/images/therapists.png')" }}
        >
          <div className="absolute bottom-4 left-0 right-0 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="paragraph-base max-w-[90%] md:max-w-[30%] text-center md:text-start mb-4 md:mb-0 bg-secondary/50">
              Lorem ipsum dolor, sit amet consectetur adipisicing. amet
              consectetur adipisicing. Lorem ipsum dolor, sit amet
            </p>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
