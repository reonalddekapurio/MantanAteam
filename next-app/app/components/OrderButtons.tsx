"use client";


import { useRouter,usePathname } from "next/navigation";

export default function OrderButtons() {

    const router = useRouter();
    const pathname = usePathname();

    const getNextPath = () => {
        if (pathname === "/order") return "/option";
        if (pathname === "/option") return "/amount";
        return "/"; // デフォルト（想定外のページならトップへ）
    };

    return (
        <div className="flex justify-between mt-2 mb-6 pl-6 pr-15">
        <button 
            onClick={() => router.back()}
            className="bg-gray-300 text-white  px-25 py-3 rounded-4xl font-bold text-2xl shadow"
        >
            戻る
        </button>
        <button 
            onClick={() => router.push(getNextPath())}
            className="bg-green-500 text-white px-20 py-3 rounded-4xl font-bold text-2xl shadow"
            >

            次へすすむ
        </button>
        </div>
    );
}


