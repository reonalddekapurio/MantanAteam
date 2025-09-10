"use client";

import StepBar from "../components/StepBar";
import OrderProduct from "../components/OrderProduct";
import OrderDetails from "../components/OrderDetails";
import OrderButtons from "../components/OrderButtons";

export default function OrderPage() {
    return (
        <div className="flex flex-col h-[800px] mx-auto bg-white">
            <div className="flex flex-col min-h-screen bg-white">
                {/* 上部ステップバー */}
                <StepBar />
                {/* メインエリア */}
                <div className="flex flex-1 px-6 py-4 gap-6">
                {/* 左：商品カード */}
                    <div className="flex-1">
                    <OrderProduct
                    name="ハンバーグ"
                    price="¥1,000(税込)"
                    image="/img/hamburg/hamburg-1.jpg"
                    />
                    </div>

                {/* 右：商品名やオプション */}
                    <OrderDetails name="ハンバーグ" />
                </div>

                {/* 下部ボタン */}
                <OrderButtons />
            </div>
        </div>
    );
}
