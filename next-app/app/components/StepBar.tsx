"use client";

interface Props {
    current?: "menu" | "option" | "quantity";
}

export default function OrderTop({ current = "menu" }: Props) {
    return (
        <div className="flex justify-center p-4">
        <div className="flex gap-2 text-sm font-bold">
            <div
            className={`px-4 py-2 rounded-l-lg ${
                current === "menu" ? "bg-orange-500 text-white" : "bg-orange-200 text-black"
            }`}
            >
            メニュー選択
            </div>
            <div
            className={`px-4 py-2 ${
                current === "option" ? "bg-orange-500 text-white" : "bg-orange-200 text-black"
            }`}
            >
            オプション選択
            </div>
            <div
            className={`px-4 py-2 rounded-r-lg ${
                current === "quantity" ? "bg-orange-500 text-white" : "bg-orange-200 text-black"
            }`}
            >
            数量選択
            </div>
        </div>
        </div>
    );
}

