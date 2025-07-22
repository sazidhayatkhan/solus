import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
type Props = {};

const MobileBottomBar = (props: Props) => {
  const data = [
    {
      icon: <FaHome />,
      title: "Home",
      linkUrl: "/",
    },
    {
      icon: <AiOutlineProduct />,
      title: "Services",
      linkUrl: "/",
    },
    {
      icon: <AiOutlineComment />,
      title: "Records",
      linkUrl: "/therapists",
    },
    {
      icon: <AiOutlineAlignRight />,
      title: "Profile",
      linkUrl: "/dashboard",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 z-[2] block md:hidden border-t border-gray-300">
      <ul className="flex justify-around items-center">
        {data.map((item, index) => (
          <Link href={item?.linkUrl || ""}>
            <li
              key={index}
              className="flex flex-col items-center justify-center w-18 h-18 text-gray-500"
            >
              <span className="text-3xl">{item.icon}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileBottomBar;
