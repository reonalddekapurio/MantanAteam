"use client";

import Link from "next/link";
import { useState } from "react";
import CallStaffModalButton from "./CallStaffModalButton";
import GuideModal from "./GuideModal";
import AllergyModal from "./AllergyModal";

export default function ActionButtons() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const mainBtns = [
    { label: "店員呼び出し", color: "bg-[#63A144]", css: "h-[146px] w-[168px]", type: "modal", modalId: "callStaff" },
    { label: "操作ガイド", color: "bg-[#FFAA49]", css: "h-[95px] w-[168px] p-1", type: "modal", modalId: "guide" },
    { label: "アレルギー表", color: "bg-[#FFAA49]", css: "h-[95px] w-[168px]", type: "modal", modalId: "allergy" },
    { label: "お持ち帰り", color: "bg-[#FFAA49]", css: "h-[95px] w-[168px]", type: "link", link: "#" }, // ← ここがリンク
    { label: "注文履歴", color: "bg-[#FFAA49]", css: "h-[95px] w-[168px]", type: "link", link: "/history" },
    { label: "注文カゴ", color: "bg-[#63A144]", css: "h-[207px] w-[168px]", type: "link", link: "/cart" },
  ];

  return (
    <div className="absolute fixed right-0 top-0 h-full flex flex-col justify-between p-3 gap-2 font-bold">
      {mainBtns.map((btn, i) =>
        btn.type === "link" ? (
          <Link
            key={i}
            href={btn.link!}
            className={`${btn.color} ${btn.css} flex items-center justify-center text-white rounded-xl text-[24px]`}
          >
            {btn.label}
          </Link>
        ) : (
          <button
            key={i}
            onClick={() => setOpenModal(btn.modalId)}
            className={`${btn.color} ${btn.css} flex items-center justify-center text-white rounded-xl text-[24px]`}
          >
            {btn.label}
          </button>
        )
      )}

      {/* モーダル表示 */}
      {openModal === "callStaff" && <CallStaffModalButton onClose={() => setOpenModal(null)} />}
      {openModal === "guide" && <GuideModal onClose={() => setOpenModal(null)} />}
      {openModal === "allergy" && <AllergyModal onClose={() => setOpenModal(null)} />}
    </div>
  );
}


