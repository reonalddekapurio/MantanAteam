"use client";

import Image from "next/image";

const options = [
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/rice.jpg" },
    { name: "ライス（普通盛り）", price: "¥1,000(税込)", image: "/rice.jpg" },
];

export default function OptionList() {
    return (
        <>
        {options.map((opt, i) => (
            <div
            key={i}
            className="rounded-xl shadow p-2 border bg-white flex flex-col items-center"
            >
            <Image
                src={opt.image}
                alt={opt.name}
                width={180}
                height={120}
                className="rounded-lg"
            />
            <div className="mt-2 text-center">
                <h2 className="font-bold text-sm">{opt.name}</h2>
                <p className="text-xs">{opt.price}</p>
            </div>
            </div>
        ))}
        </>
    );
}
