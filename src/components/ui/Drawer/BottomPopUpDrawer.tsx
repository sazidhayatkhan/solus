'use client';

import useBottomBarStore from "@/store/useBottomDrawerStore";

export default function BottomBar() {
  const { isOpen, content, close } = useBottomBarStore();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg h-[400px]">
      <div className="flex justify-between items-start">
        <div className="flex-1">{content}</div>
        <button onClick={close} className="text-sm bg-red-600 px-2 py-1 rounded ml-4">Close</button>
      </div>
    </div>
  );
}
