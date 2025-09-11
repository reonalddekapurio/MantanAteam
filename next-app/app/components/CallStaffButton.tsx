"use client";

import { useState } from "react";
import CallStaffModalButton from "./CallStaffModalButton"; 

export function CallStaffButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="w-[206px] h-[206px] bg-[#63A144] rounded-bl-[32px] flex items-center justify-center text-white text-[32px] font-bold">
        <button
          onClick={() => setOpenModal(true)}
          className="text-center"
        >
          店員<br />呼び出し
        </button>
      </div>

      {openModal && (
        <CallStaffModalButton onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
}
