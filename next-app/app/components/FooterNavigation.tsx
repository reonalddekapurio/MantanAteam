"use client";

import { useState } from "react";
import Number from "@/app/components/Number";
import GuideModal from "@/app/components/GuideModal";

export function FooterNavigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 gap-3 bg-[#FFE8CD]">
      <div className="flex justify-between items-center px-4">
        <div className="w-[237px]">
          <Number number="01" />
        </div>

        <ul className="flex gap-2 bg-[#ffffff] p-2 rounded-[12px] border-2 border-[#63A144] text-[20px]">
          <li className="bg-[#FFAF54] px-4 py-2 rounded-[12px] font-bold text-[#ffffff]">日本語</li>
          <li className="bg-[#FFAF54] px-4 py-2 rounded-[12px] font-bold text-[#ffffff]">English</li>
          <li className="bg-[#FFAF54] px-4 py-2 rounded-[12px] font-bold text-[#ffffff]">한국어</li>
          <li className="bg-[#FFAF54] px-4 py-2 rounded-[12px] font-bold text-[#ffffff]">中文簡体</li>
        </ul>

        <button
          className="flex items-center justify-center bg-[#FFAF54] text-white p-5 w-[237px] h-[58px] rounded-full font-bold text-[32px]"
          onClick={() => setIsModalOpen(true)}
        >
          操作ガイド
        </button>
      </div>

      {isModalOpen && <GuideModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
