import React from "react";
import Button from "../Button";
import Image from "next/image";
type Props = {
  data: {
    title?: string;
    desc?: string;
    photoUrl?: string;
    bgColor?:string
  };
};

const CardTypeImg = ({ data }: Props) => {
  return (
    <div className={`${data?.bgColor ==='secondary'?"bg-secondary":"bg-white"} rounded-3xl p-7 flex justify-between items-center shadow`}>
      <div className="space-y-5">
        <p className="text-primary leading-8 md:leading-9 text-2xl md:text-3xl font-bold w-[200px] md:w-[250px]">
          {data?.title}
        </p>
        <p className="paragraph-base w-[200px] md:w-[300px]">{data.desc}</p>
        <Button variant="outline">Learn More</Button>
      </div>
      {
        data?.photoUrl &&
            <div className="relative w-full h-[200px] md:w-[200px] md:h-[250px]">
                <Image
                src={data?.photoUrl || "/images/ill_one.png"}
                alt="Therapist helping client"
                fill
                className="object-contain"
                />
            </div>
      }
    </div>
  );
};

export default CardTypeImg;
