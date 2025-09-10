"use client";

import { useState } from "react";
import BackButton from "@/app/components/BackButton";
import ActionButtons from "@/app/components/ActionButtons";
import Number from "@/app/components/Number";
import CartList from "@/app/components/CartList";
import CartSummary from "@/app/components/CartSummary";

const initialItems = [
    { id: 1, name: "ハンバーグ", price: 1000, quantity: 1, imageUrl: "/hamburg1.jpg" },
    { id: 2, name: "パスタ", price: 800, quantity: 1, imageUrl: "/pasta.jpg" },
    { id: 3, name: "スープ", price: 600, quantity: 1, imageUrl: "/soup.jpg" },
    { id: 4, name: "パンケーキ", price: 600, quantity: 1, imageUrl: "/pancake.jpg" },
];

export default function CartPage() {
    const [items, setItems] = useState(initialItems);

    const handleUpdate = (id: number, quantity: number) => {
        setItems((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, quantity } : item
        )
        );
    };

    const handleRemove = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="flex flex-col h-[800px">
        {/* 上部ボタン */}
        <div className="absolute top-4 left-4 flex gap-4">
            <BackButton />
            <button className="absolute left-175 bg-gray-300 text-gray-800 px-6 py-2 text-[30px] text-white font-bold rounded-full shadow w-[357px] h-[67px]">
            注文をからに
            </button>
        </div>

        {/* 注文リスト */}
        <div className="absolute top-25 left-6 right-48 bottom-28 overflow-y-auto">
            <CartList items={items} onUpdate={handleUpdate} onRemove={handleRemove} />
        </div>

        {/* 合計と注文確定 */}
        <div className="absolute bottom-6 right-50">
            <CartSummary total={total} />
        </div>

        {/* 右サイドメニュー */}
        <div>
            <ActionButtons />
        </div>

        {/* 左下インジケーター */}
        <div className="absolute bottom-0 left-0">
            <Number />
        </div>

        </div>
    );
}
