import CardTypeFull from "@/components/ui/Card/CardTypeFull";
import CardTypeImg from "@/components/ui/Card/CardTypeImg";
import React from "react";

type Props = {};

const SectionThree = (props: Props) => {
  const data = [
    {
      title: "Mindfulness & Meditation",
      desc: "Guided meditation sessions and stress management techniques.",
      photoUrl: "/images/ill_one.png",
      bgColor: "secondary",
    },
    {
      title: "One-on-One Therapy",
      desc: "Virtual and in-person therapy sessions with licensed professionals.",
      photoUrl: "",
      bgColor: "",
    },
  ];
  const dataTwo = {
    title: "Wellness Coaching",
    desc: "Personalized guidance to help you build healthier habits, manage stress, and achieve balance in all areas of your life. Our wellness coaches support you in creating sustainable routines for mental, emotional, and physical well-being.",
    photoUrl: "/images/ill_six.png",
  };
  return (
    <div className="_container">
      <div className="space-y-6 w-[250px] md:w-[300px] mx-auto text-center">
        <p className="heading-tag">SERVICES</p>
        <h2 className="heading-xl">Your Path to Well-being</h2>
        <p className="paragraph-base">
          Discover expert guidance for a healthier mind and balanced life.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        {data?.map((item, index) => (
          <CardTypeImg key={index} data={item} />
        ))}
      </div>
      <div>
        <CardTypeFull data={dataTwo} />
      </div>
    </div>
  );
};

export default SectionThree;
