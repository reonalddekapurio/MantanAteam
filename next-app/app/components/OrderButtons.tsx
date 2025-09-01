"use client";

export default function OrderButtons() {
    return (
        <div className="flex justify-between items-center px-20 py-10">
        <button className="bg-gray-400 text-white px-16 py-4 rounded-full font-bold shadow-md text-lg">
            戻る
        </button>
        <button className="bg-green-600 text-white px-16 py-4 rounded-full font-bold shadow-md text-lg">
            次へすすむ
        </button>
        </div>
    );
}


