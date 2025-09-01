"use client";

import Image from "next/image";

export default function OrderPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
        {/* 上部ステップバー */}
        <div className="flex justify-center gap-2 p-4">
            <div className="px-6 py-2 bg-orange-500 text-white font-bold rounded-l-full">
            メニュー選択
            </div>
            <div className="px-6 py-2 bg-orange-300 text-white font-bold">
            オプション選択
            </div>
            <div className="px-6 py-2 bg-orange-200 text-white font-bold rounded-r-full">
            数量選択
            </div>
        </div>

        {/* メインエリア */}
        <div className="flex flex-1 px-6 py-4 gap-6">
            {/* 左：商品カード */}
            <div className="flex-1">
            <div className="rounded-xl shadow p-4 border bg-white">
                <Image
                src="/hamburg1.jpg"
                alt="ハンバーグ"
                width={600}
                height={350}
                className="rounded-lg w-full h-auto"
                />
                <div className="mt-4 flex justify-between items-center">
                <h2 className="font-bold text-lg">ハンバーグ</h2>
                <p className="text-base font-semibold">¥1,000(税込)</p>
                </div>
            </div>
            </div>

            {/* 右：商品名やオプション表示 */}
            <div className="w-1/3 border-l pl-6 flex flex-col">
            <h2 className="font-bold text-xl mb-4">ハンバーグ</h2>
            {/* ここにオプション一覧や選択肢を追加予定 */}
            </div>
        </div>

        {/* 下部ボタン */}
        <div className="flex justify-between px-8 py-6">
            <button className="bg-gray-400 text-white px-8 py-3 rounded-full font-bold shadow">
            戻る
            </button>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow">
            次へすすむ
            </button>
        </div>
        </div>
    );
}
