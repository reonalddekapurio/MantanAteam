"use client";

import CategoryMenu from "@/app/components/CategoryMenu";
import ActionButtons from "@/app/components/ActionButtons";
import Number from "@/app/components/Number";
import Product from "@/app/components/Product";
import MenuItems from "@/app/components/MenuItems";  // ← {} を外す
import TakeOutMenuBar from "@/app/components/TakeOutMenuBar";



export default function Takeout() {
    return (
        <div className="flex min-h-screen bg-white">
        {/* 左側：カテゴリー + 商品エリア */}
        <div className="flex-1 flex flex-col relative">
            {/* 上部カテゴリー */}
            <TakeOutMenuBar />
            


            {/* 中央 商品エリア（写真 + 矢印） */}
            <div className="flex flex-1">
            {/* 左の矢印 */}
            <div className="flex items-center px-2">
                <button className="bg-[#FFCA6D] rounded-full p-3 shadow w-[50px] h-[109px] text-white text-xl">◀︎</button>
            </div>

            {/* 商品一覧 */}
            <div className="grid grid-cols-2  w-[900] h-[500px] mx-5">
                <MenuItems /> <MenuItems /> 
                <MenuItems /> <MenuItems /> 
            </div>

            {/* 右の矢印 */}
            <div className="flex items-center px-2">
                <button className="bg-[#FFCA6D] rounded-full p-3 shadow w-[50px] h-[109px] text-white text-xl">▶︎</button>
            </div>
            </div>

            {/* ページ番号（左下固定） */}
            <div className="absolute bottom-0 left-0">
            <Number number="01" />
            </div>
        </div>

        {/* 右側 操作パネル */}
        <div>
            <ActionButtons />
        </div>
        </div>
    );
}