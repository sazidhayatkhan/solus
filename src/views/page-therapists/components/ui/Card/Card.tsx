import React from "react";
import Link from 'next/link';
import Button from "@/components/ui/Button";

type Props = {
  data: {
    title?: string;
    desc?: string;
    bgUrl?: string;
    linkUrl?: string;
  };
};

const Card = ({ data }: Props) => {
  return (
    <div
      className="bg-cover bg-center rounded-3xl p-7 bg-secondary h-[20vh] md:h-[300px]"
      style={{
        backgroundImage: data?.bgUrl ? `url(${data.bgUrl})` : 'none',
      }}
    >
      <div>
        <p className="text-primary leading-6 md:leading-9 text-xl md:text-3xl font-bold">
          {data?.title}
        </p>
        <p className="paragraph-base mt-2 md:mt-0">
          {data?.desc}
        </p>
      </div>
      <div className="mt-5 md:mt-20">
        <Link href={data?.linkUrl || "/"}>
          <Button>Start Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
