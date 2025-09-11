"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ← 追加
import BackButton from "@/app/components/BackButton";
import ActionButtons from "@/app/components/ActionButtons";
import Number from "@/app/components/Number";
import CartList from "@/app/components/CartList";
import CartSummary from "@/app/components/CartSummary";

const initialItems = [

    { id: 1, name: "ハンバーグ", price: 1000, quantity: 1, imageUrl: "/img/hamburg/hamburg-1.jpg" },
    { id: 2, name: "パスタ", price: 800, quantity: 1, imageUrl: "/img/pasta/pasta-2.jpg" },
    { id: 3, name: "スープ", price: 600, quantity: 1, imageUrl: "/img/soup/soup-1.jpg" },
    { id: 4, name: "パンケーキ", price: 600, quantity: 1, imageUrl: "/img/dessert/dessert-1.jpg" },
];

export default function CartPage() {
    const [items, setItems] = useState(initialItems);
    const router = useRouter();

    const handleUpdate = (id: number, quantity: number) => {
        setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const handleRemove = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClear = () => {
        setItems([]); // ← 全削除
    };

    const handleConfirm = () => {
        // ここで注文確定処理（API送信など）を入れてもOK
        router.push("/"); // ← トップページに戻る
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (

        <div className="relative flex flex-col h-[800px] mx-auto bg-white">

        {/* 上部ボタン */}
        <div className="absolute top-4 left-6 right-48 flex justify-between items-center">
            <BackButton />

            <button
            onClick={handleClear}
            className="bg-gray-400 hover:bg-orange-500 w-70 h-15 text-white font-bold text-2xl px-10 py-2 rounded-full shadow"
            >
            注文を空に

            </button>
        </div>

        {/* 注文リスト */}

        <div className="absolute top-20 left-6 right-48 bottom-28 text-black">

            <CartList items={items} onUpdate={handleUpdate} onRemove={handleRemove} />
        </div>

        {/* 合計と注文確定 */}

        <div className="absolute bottom-6 left-6 right-48 flex justify-end">

            <CartSummary total={total} />
        </div>

        {/* 右サイドメニュー */}

        <div className="absolute top-20 right-6 bottom-6 flex flex-col gap-4 w-40">
            <SideMenu />

        </div>

        {/* 左下インジケーター */}
        <div className="absolute bottom-0 left-0">
            <Number />
        </div>

        </div>
    );
}
