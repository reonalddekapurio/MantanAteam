"use client";

export default function StepBar() {
    return (
        <div className="flex justify-center p-4">
        <div className="flex gap-4 text-sm font-bold">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-l-lg">
            メニュー選択
            </div>
            <div className="bg-orange-200 text-black px-4 py-2">
            オプション選択
            </div>
            <div className="bg-orange-200 text-black px-4 py-2 rounded-r-lg">
            数量選択
            </div>
        </div>
        </div>
    );
}
