"use client";

import OrderTop from "@/app/components/StepBar";
import OptionList from "@/app/components/OptionList";
import OptionCart from "@/app/components/OptionCart";
import OrderButtons from "../components/OrderButtons";

export default function OrderOption() {
    return (
        <div className="flex flex-col h-[800px] mx-auto bg-white">
            {/* 上部：ステップバー */}
            <div className="shrink-0">
                <OrderTop current="option" />
            </div>

            {/* 中央：商品一覧 + カート */}
            <div className="flex flex-1 p-4 gap-4">
                {/* 左側：商品一覧 */}
                <div className="flex-[3] grid grid-cols-3 gap-4">
                    <OptionList />
                </div>

                {/* 右側：選んだ商品 */}
                <div className="flex-[1] border-l border-black pl-4">
                    <OptionCart />
                </div>
            </div>

            {/* 下部：操作ボタン */}
            <div className="shrink-0">
                <OrderButtons />
            </div>
        </div>
    );
}
