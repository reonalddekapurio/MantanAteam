"use client";

import { useRouter, usePathname } from "next/navigation";

export default function OrderButtons() {
    const router = useRouter();
    const pathname = usePathname();
    const handleClick = () => {
       switch (pathname) {
           case "/order":
               router.push("/option");
               break;
            case "/option":
                router.push("/amount");
                break;
       }
    }

    return (
        <div className="flex justify-between items-center px-10">
        <button className="bg-gray-300 text-white px-16 py-4 rounded-full font-bold shadow-md text-lg"
        onClick={() => router.back()}>
            戻る
        </button>
        <button className="bg-[#63A144] text-white px-16 py-4 rounded-full font-bold shadow-md text-lg"
        onClick={handleClick}>
            次へすすむ
        </button>
        </div>
    );
}


