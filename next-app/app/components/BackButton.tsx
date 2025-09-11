'use client';

import {useRouter} from "next/navigation";

export default function TopBar() {

    const router = useRouter();

    return (
        <div className="pl-4">
        <button 
            onClick={() => router.push('/top')}
            className="bg-orange-400 w-70 h-15 hover:bg-orange-500 text-white font-bold text-2xl px-10 py-2 rounded-full shadow"
        >
            メニューに戻る
        </button>
        </div>
    );
}
