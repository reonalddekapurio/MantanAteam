"use client";

export default function CategoryMenu() {
    const categories = [
        "おすすめメニュー",
        "ライスパスタ",
        "ステーキハンバーグ",
        "一品",
        "お子様メニュー",
        "デザートドリンク",
        "サラダ スープ セットライス",
        "ハンバーグ",
        "チーズinハンバーグ",
        "チキン",
        "チーズinチキン",
        "ステーキ",
        "国産",
        "お得なセット",
    ];

    return (
        <div className="grid grid-cols-7 gap-2 bg-white p-4">
        {categories.map((label, i) => (
            <button
            key={i}
            className="bg-orange-200 text-black rounded-md px-2 py-2 text-sm hover:bg-orange-300"
            >
            {label}
            </button>
        ))}
        </div>
    );
}
