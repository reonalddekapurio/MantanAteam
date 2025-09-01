"use client";

import CategoryMenu from "@/app/components/CategoryMenu";
import ActionButtons from "@/app/components/ActionButtons";
import Number from "@/app/components/Number";
import Product from "@/app/components/Product";

export default function MenuPage() {
    return (
        <div className="flex min-h-screen bg-white">
        {/* 左側：カテゴリー + 商品エリア */}
        <div className="flex-1 flex flex-col relative">
            {/* 上部カテゴリー */}
            <CategoryMenu />

            {/* 中央 商品エリア（写真 + 矢印） */}
            <div className="flex flex-1">
            {/* 左の矢印 */}
            <div className="flex items-center px-2">
                <button className="bg-orange-200 rounded-full p-3 shadow">←</button>
            </div>

            {/* 商品一覧 */}
            <div className="flex-1 px-4 py-6">
                <div className="grid grid-cols-2 grid-rows-2 gap-6">
                <Product
                    name="ハンバーグ"
                    price="¥1,000(税込¥1,100)"
                    image="/hamburg1.jpg"
                />
                <Product
                    name="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    price="¥1,000(税込¥1,100)"
                    image="/hamburg2.jpg"
                />
                <Product
                    name="商品名"
                    price="¥2,000(税込¥2,200)"
                    image="/hamburg3.jpg"
                />
                <Product
                    name="商品名"
                    price="値段"
                    image="/hamburg4.jpg"
                />
                </div>
            </div>

            {/* 右の矢印 */}
            <div className="flex items-center px-2">
                <button className="bg-orange-200 rounded-full p-3 shadow">→</button>
            </div>
            </div>

            {/* ページ番号（左下固定） */}
            <div className="absolute bottom-4 left-4">
            <Number number="01" />
            </div>
        </div>

        {/* 右側 操作パネル */}
        <div className="w-1/6 h-screen">
            <ActionButtons />
        </div>
        </div>
    );
}
