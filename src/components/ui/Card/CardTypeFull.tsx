import React from "react";
import Button from "../Button";
import Image from "next/image";
type Props = {
  data: {
    title?: string;
    desc?: string;
    photoUrl?: string;
  };
};

const CardTypeFull = ({ data }: Props) => {
  return (
    <div className={`bg-white rounded-3xl flex justify-between items-center shadow`}>
      <div className="space-y-5 ps-7 py-7">
        <p className="text-primary leading-8 md:leading-9 text-2xl md:text-3xl font-bold w-[200px] md:w-[500px]">
          {data?.title}
        </p>
        <p className="paragraph-base w-[200px] md:w-[500px]">{data.desc}</p>
        <Button>Learn More</Button>
      </div>
      {
        data?.photoUrl &&
            <div className="relative w-[200px] h-[300px] md:w-full md:h-[350px]">
                <Image
                src={data?.photoUrl || "/images/ill_one.png"}
                alt="Therapist helping client"
                fill
                className="object-cover"
                />
            </div>
      }
    </div>
  );
};

export default CardTypeFull;
