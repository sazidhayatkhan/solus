import Button from "@/components/ui/Button";
import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="rounded-3xl p-7 bg-secondary">
      <div>
        <p className="text-primary leading-6 md:leading-9 text-xl md:text-3xl font-bold">
          Instant Consultation
        </p>
        <p className="paragraph-base mt-2 md:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="mt-5 md:mt-20">
        <Button>Start Now</Button>
      </div>
    </div>
  );
};

export default Card;
