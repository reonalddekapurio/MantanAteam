"use client";

import CategoryMenu from "@/app/components/CategoryMenu";
import ActionButtons from "@/app/components/ActionButtons";
import Number from "@/app/components/Number";
import Product from "@/app/components/Product";
import { MenuItems } from "../components/MenuItems";

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
            <div>
                <MenuItems />
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
