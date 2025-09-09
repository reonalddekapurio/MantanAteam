"use client";

import { useRouter } from "next/navigation";

export default function TopBar() {
const router = useRouter();
    return (
        <div className="p-4">
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow"
        onClick={() => router.push("/top")} >
            
            メニューに戻る
        
        </button>
        </div>
    );
}
