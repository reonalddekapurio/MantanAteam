"use client";

export default function ActionButtons() {
    const mainBtns = [
        { label: "店員呼び出し", color: "bg-green-500" },
        { label: "操作ガイド", color: "bg-orange-300" },
        { label: "アレルギー情報", color: "bg-orange-300" },
        { label: "お持ち帰り", color: "bg-orange-300" },
        { label: "注文履歴", color: "bg-orange-300" },
        { label: "注文カゴ", color: "bg-green-600" },
    ];

    return (
        <div className="flex flex-col justify-between h-full p-3">
        {mainBtns.map((btn, i) => (
            <button
            key={i}
            className={`${btn.color} text-white rounded-xl py-6 text-lg font-bold`}
            >
            {btn.label}
            </button>
        ))}
        </div>
    );
}

