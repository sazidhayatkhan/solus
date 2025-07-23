'use client';

import useBottomBarStore from "@/store/useBottomDrawerStore";

export default function BottomPopUpDrawer() {
  const { isOpen, close } = useBottomBarStore();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg h-[400px]">
      <div className="flex justify-between items-center">
        <p>This is the Bottom Bar</p>
        <button onClick={close} className="text-sm bg-red-600 px-2 py-1 rounded">Close</button>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est eos incidunt magnam qui ipsa modi placeat ratione iste et molestias deleniti soluta, beatae nobis laborum, cum rerum sequi nihil?</p>
    </div>
  );
}
