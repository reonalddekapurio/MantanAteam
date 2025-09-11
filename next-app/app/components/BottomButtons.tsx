
"use client";


import { useRouter } from "next/navigation";

export default function BottomButtons() {

  const router = useRouter();

  return (
    <div className="flex justify-between mt-8 px-8">
      <button
        className="bg-gray-300 text-white px-16 py-4 rounded-full font-bold shadow-md text-lg"
        onClick={() => router.back()}
      >
        戻る
      </button>

      <button
        className="bg-[#63A144] text-white px-16 py-4 rounded-full font-bold shadow-md text-lg"
        onClick={() => router.push("/cart")} 
      >
        注文カゴに入れる
      </button>
    </div>
  );

}

