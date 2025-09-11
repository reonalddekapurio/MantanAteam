"use client";

import Image from "next/image";
import Link from "next/link";

export default function MenuItems() {
    return (
        <div className="">
            <Link href="/order">
                    <div className=" relative flex flex-col  rounded-[24px]  w-[400px] h-[230px] shadow-xl">
                    
                            <Image
                                src="/hamburg1.jpg"
                                alt="ハンバーグ"
                                width={400}
                                height={250}
                                className="rounded-t-[24px] text-base"
                            />
                        
                            <p className="font-bold text-xl p-2">ハンバーグ</p>
                            <div>
                                <p className="absolute font-bold right-0 bottom-0 p-2 text-lg ">¥1,000(税込¥1,100)</p>
                        </div>
                        
                    </div>
            </Link>
        </div>
    )
    
}
