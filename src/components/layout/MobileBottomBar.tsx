"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineProduct, AiOutlineComment } from "react-icons/ai";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";

type Props = {};

const MobileBottomBar = (props: Props) => {
  const pathname = usePathname();

  const data = [
    {
      icon: <RiHome5Line />,
      title: "Home",
      linkUrl: "/",
    },
    {
      icon: <MdOutlineMedicalServices />,
      title: "Records",
      linkUrl: "/therapists",
    },
    {
      icon: <AiOutlineComment />,
      title: "Services",
      linkUrl: "/services",
    },
    {
      icon: <AiOutlineProduct />,
      title: "Profile",
      linkUrl: "/dashboard",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary z-[2] block md:hidden border-t border-gray-300">
      <ul className="flex justify-around items-center">
        {data.map((item, index) => {
          const isActive =
            item.linkUrl === "/" ? pathname === "/" : pathname.startsWith(item.linkUrl);

          return (
            <Link key={index} href={item.linkUrl}>
              <li
                className={`flex flex-col items-center justify-center w-15 h-15 text-sm ${
                  isActive ? "text-green-300" : "text-gray-500"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileBottomBar;
