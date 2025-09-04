"use client";

import Image from "next/image";
import Link from "next/link";

import ActionButtons from "../components/ActionButtons";
import Number from "../components/Number";

export default function SelectOrder() {
    return (
        <div className="flex">
            <div className="flex gap-4 mt-10  ml-4">
                <div className="flex flex-col items-center drop-shadow-xl bg-white w-[509px] h-[605px] gap-5 pt-6 rounded-[51px]">
                    <Link href="/top">
                        <Image
                        src="/menuimage.png"
                        alt="通常メニューから"
                        width={468}
                        height={460}
                        />
                        <p className=" flex flex-col text-[32px] font-bold mt-3 items-center">メニューから選ぶ</p>
                    </Link>
                </div>


                <div className="flex flex-col items-center drop-shadow-xl bg-white w-[509px] h-[605px] gap-5 pt-6 rounded-[51px]">
                        <Link href="/top">
                            <Image
                            src="/osusumemenuimage.png"
                            alt="おすすめメニューから"
                            width={468}
                            height={460}
                            />
                            <p className="text-[32px] font-bold mt-3">おすすすめメニューから選ぶ</p>
                        </Link>
                </div>
            </div>
            

            <div className="w-1/6 h-screen fixed right-0">
                <ActionButtons />
            </div>

            <div className="fixed bottom-0 left-0">
                <Number number="01" />
            </div>



        </div>
    );
}