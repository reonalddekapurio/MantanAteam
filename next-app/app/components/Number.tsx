"use client";

export default function PageNumber({ number = "01" }: { number?: string }) {
    return (
        <div className="bg-green-50 px-6 py-2 font-bold text-green-700 text-2xl rounded-tr-2xl">
        {number}
        </div>
    );
}
