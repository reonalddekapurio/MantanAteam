"use client";
import { useState } from "react";

export default function CategoryMenu() {
  const categories = [
    "おすすめメニュー",
    "ライスパスタ",
    "ステーキハンバーグ",
    "一品",
    "お子様メニュー",
    "デザートドリンク",
    "サラダ スープ セットライス",
  ];

  const categoriessub: Record<string, string[]> = {
    おすすめメニュー: ["ライス", "お得なセット", "国産", "スーパーライス", "パスタ"],
    ライスパスタ: ["ライス", "お得なセット", "国産", "スーパーライス", "パスタ"],
    ステーキハンバーグ: [
      "ハンバーグ",
      "チーズinハンバーグ",
      "チキン",
      "チーズinチキン",
      "ステーキ",
      "国産",
      "お得なセット",
    ],
    デザートドリンク: ["プリン", "プリンサラダ", "プリンライス", "プリンセット"],
    "サラダ スープ セットライス": ["サラダ", "スープ", "セットライス"],
  };

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
            onClick={() => setActive(active === category ? null : category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* サブカテゴリ */}
      {active && categoriessub[active] && (
        <div className="flex flex-wrap gap-2">
          {categoriessub[active].map((sub, j) => (
            <button
              key={j}
              className={`w-[139px] h-[71px] rounded-xl font-bold text-center text-sm
                bg-[#FFCA6D]
              `}
              onClick={() => console.log(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


