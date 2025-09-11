"use client";

import Image from "next/image";

import { CallStaffButton } from "./components/CallStaffButton";
import { FooterNavigation } from "./components/FooterNavigation";

export default function Index(){
  return(
    <div>
      <CallStaffButton />

      <div className="flex flex-col items-center">

        <div className="flex justify-center mt-[-50px]">
          <Image
            src="/mantanlogo.png"
            alt="ロゴ"
            width={157}
            height={157}
          />
        </div>

        <p className="text-[32px] font-bold m-5">いらっしゃいませ　マンタンへようこそ</p>

        <button className="bg-[#63A144] text-white p-5 w-[547px] h-[172px] rounded-full font-bold  text-[40px]">
          <a href="/select-order">注文を開始する</a>
        </button>

        <p className="text-[32px] font-bold m-5">タブレットなし注文希望の方は店員までお願いします</p>
      
      </div>

      <FooterNavigation />

    </div>
  )
}