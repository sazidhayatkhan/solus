import React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link"
import useBottomBarStore from "@/store/useBottomDrawerStore";
type Props = {};

const SectionTwo = (props: Props) => {
  const open = useBottomBarStore((state) => state.open);
  return (
    <div className="_container flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="space-y-6 text-center md:text-start mx-auto md:mx-0">
        <p className="heading-tag">HOW IT WORKS</p>
        <button
      onClick={() => open(<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error velit ad vel. Voluptatum vel, magni enim cumque fuga provident eum dolores nemo numquam nesciunt ducimus, dolor optio ipsum tempora.</p>)}
      className="px-3 py-2 bg-blue-600 text-white rounded"
    >
      Open Drawer (Home)
    </button>
        <h2 className="heading-xl w-[350px]">
          We Help You Prioritize Your Mental Health
        </h2>

        <p className="paragraph-base w-[350px]">
          Browse therapists, book a session, and start your healing journey with
          trusted professionals.
        </p>

        <div className="flex justify-center md:justify-start mb-10 md:mb-0">
          <Link href="/therapists">
            <Button>Find a Therapist</Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[200px] md:w-[400px] md:h-[400px] rounded-3xl bg-primary">
        <Image
          src="/images/frame_four.png"
          alt="Therapist helping client"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
