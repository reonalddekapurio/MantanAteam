"use client";

import { useRouter } from "next/navigation";

export default function TopBar() {
const router = useRouter();
    return (

        <div className="">
        <button className="bg-[#FFAA49] text-[30px] hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full shadow w-[339px] h-[67px]"
        onClick={() => router.push("/top")} >
            

            メニューに戻る
        
        </button>
        </div>
    );
}
