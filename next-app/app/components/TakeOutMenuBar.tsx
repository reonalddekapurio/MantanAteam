"use client";
import { Link } from "lucide-react";
import { useState } from "react";

export default function TakeOutMenuBar() {
  const categories = [
    "ライスパスタ",
    "ステーキハンバーグ",
    "お子様メニュー",
    "デザートドリンク",
    "サラダ スープ セットライス",
  ];

  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="space-y-4 p-4">
      {/* 親カテゴリ */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category, i) => (
          <button
            key={i}
            className={`w-[139px] h-[71px] rounded-xl font-bold text-center text-sm
              ${active === category
                ? "bg-[#FEFCF0] border border-[#FFCA6D]"
                : "bg-[#FFCA6D]"}
            `}
            onClick={() =>
              setActive(active === category ? null : category)
            }
          >
            {category}
          </button>
        ))}

       <a href="/top" className="flex items-center justify-center ml-44 bg-gray-300 w-[139px] h-[71px]  rounded-xl shadow text-white text-3xl font-bold ">
            戻る
        </a>



      </div>
    </div>
  );
}

