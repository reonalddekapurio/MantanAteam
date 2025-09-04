"use client";

import OrderTop from "@/app/components/StepBar";
import OrderProductCard from "@/app/components/OrderProduct";
import OrderDetails from "@/app/components/OrderDetails";
import OrderButtons from "@/app/components/OrderButtons";

export default function OrderPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
        {/* 上部ステップバー */}
        <OrderTop />

        {/* メインエリア */}
        <div className="flex flex-1 px-6 py-4 gap-6">
            {/* 左：商品カード */}
            <div className="flex-1">
            <OrderProductCard
                name="ハンバーグ"
                price="¥1,000(税込)"
                image="/hamburg1.jpg"
            />
            </div>

            {/* 右：商品名やオプション */}
            <OrderDetails name="ハンバーグ" />
        </div>

        {/* 下部ボタン */}
        <OrderButtons />
        </div>
    );
}
