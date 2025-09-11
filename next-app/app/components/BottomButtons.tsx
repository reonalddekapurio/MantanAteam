'use client';

import { useRouter } from "next/navigation";

export default function BottomButtons() {

    const router = useRouter();

    return (
        <div className="flex justify-between mt-2 mb-6 pl-6 pr-15">
        <button 
            onClick={() => router.back()}
            className="bg-gray-300 text-white  px-25 py-3 rounded-4xl font-bold text-2xl shadow"
            
        >
            戻る
        </button>
        <button 
            onClick={() => router.push('/top')}
            className="bg-green-500 text-white px-20 py-3 rounded-4xl font-bold text-2xl shadow"
        >
            注文カゴに入れる
        </button>
        </div>
    );
}
