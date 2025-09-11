"use client";

export default function PageNumber({ number = "01" }: { number?: string }) {
    return (
        <div className="flex justify-center w-[144px] text-[#63A144] text-[60px] bg-[#FFE8CD] rounded-tr-[32px] p-2">
        {number}
        </div>
    );
}
