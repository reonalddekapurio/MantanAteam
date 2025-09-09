"use client";

import Link from "next/link";

export default function ActionButtons() {
  const mainBtns = [
    { label: "店員呼び出し", color: "bg-[#63A144]", css: "h-[146px] w-[168px]", link: "#" },
    { label: "操作ガイド", color: "bg-[#FFAA49]", css: "h-[95px] w-[168px] p-1", link: "#" },
    { label: "アレルギー表", color: "bg-[#FFAA49]", css: " h-[95px] w-[168px] ", link: "#" },
    { label: "お持ち帰り", color: "bg-[#FFAA49]", css: "h-[95px] w-[168px]", link: "#" },
    { label: "注文履歴", color: "bg-[#FFAA49]", css: "h-[95px] w-[168px]", link: "#" },
    { label: "注文カゴ", color: "bg-[#63A144]", css: "h-[207px] w-[168px]", link: "/cart" },
  ];

  return (
    <div className="fixed right-0 top-0 h-full flex flex-col justify-between p-3 gap-2 font-bold">
      {mainBtns.map((btn, i) => (
        <Link
          key={i}
          href={btn.link}
          className={`${btn.color} ${btn.css} flex items-center justify-center text-white rounded-xl text-[24px]`}
        >
          {btn.label}
        </Link>
      ))}
    </div>
  );
}

